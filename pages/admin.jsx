
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Modal, Pressable,TouchableHighlight } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { arrayUnion, doc,getDoc, setDoc, updateDoc,query,collection,where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import User from '../components/user';
import { useFonts } from 'expo-font';

const Admin = ({navigation}) => {
    const [text, setText] = useState('Not yet scanned')
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [barName,setBarName]=useState("")
    const [theArray, setTheArray] = useState( [])
    const askForCameraPermission = () => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })()
    }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
    getBarInfo()
  }, []);

  const [fontsLoaded, error] = useFonts({
    "Bungee-Shade": require("../assets/fonts/BungeeShade-Regular.ttf"),
  });
  const getBarInfo=async()=>{
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    setBarName(docSnap.data()["etablissement"])
  }


  const addTransaction=async(doc1,data)=>{
    if (doc1==null){    
        try{
            let dat={
                uid:data,
                points:5,
                etablissement:barName}
            await setDoc(doc(collection(db, "allBarsScan")), dat)
            setTheArray(oldArray => [...oldArray, dat])
}catch(erro){
            console.error("Error :",erro)
        }
      }else{
        let dat=doc1.data()

        dat["points"]=dat["points"]+5
        const docRef= doc(db, "allBarsScan", doc1.id)
        await updateDoc(docRef,dat)
        setTheArray(oldArray => [...oldArray, dat])

        ;}

    
  }
  
  // What happens when we scan the bar code
  const handleBarCodeScanned = async({ type, data }) => {
    setScanned(true);
    setText(data)
    const mydoc= await getInfo(data)
    addTransaction(mydoc,data)

  };
    const getInfo=async(uid)=>{
        const docRef = query(collection(db, "allBarsScan"), where("uid", "==", uid),where("etablissement","==",barName));
        const docSnap = await getDocs(docRef);
        console.log(docSnap.docs);
        if (docSnap.docs.length==0){return null}
        else{return docSnap.docs[0]}
}

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }
                 // <-- "onPress" is apparently required
  return (
        <>
        <View style={{display:"flex",flexDirection:"column",marginTop:100,height:"100%"}}>
            <View style={{justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:50}}>
                <Text style={{fontFamily:"Bungee-Shade",fontSize:32}}>
                    Admin
                </Text>
                <Text style={{fontFamily:"Prompt-Medium",fontSize:20}}>
                    {barName}
                </Text>
            </View>
            <View style={{display:"flex",flexDirection:"column-reverse",justifyContent:"center",gap:5,marginTop:10}}>
                {theArray.map((e)=> 
                    
                    <User user={e}/>
                )}
            </View>
            <View style={{ display:"flex",position:"absolute",left:95,bottom:175,gap:30,justifyContent: "center",alignItems:"center",overflow:'hidden',borderRadius: 30,}}>
                    <View>{scanned&&<Text style={{fontFamily:"Prompt-Regular",color:"green"}}>Scan Réussi</Text>}</View>
                    <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 200, width: 200 }} />
                    
                    <TouchableHighlight onPress={() => setScanned(false)} style={{borderColor:"black",borderWidth:5,borderRadius:30}}><Text style={{fontFamily:"Prompt-Regular",fontSize:20}}> Scan again ? </Text></TouchableHighlight>
            </View>
        </View>
    
                {/* {user.forEach((e,i)=>{
                    <User user={e}/>
                })}
           
        
        
        {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' style={{backgroundColor:"black"}} />} */}
        </>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: "flex-end",
  marginBottom:50
},
maintext: {
  fontSize: 16,
  margin: 20,
},
barcodebox: {
  alignItems: '',
  justifyContent: "flex-end",
  overflow: 'hidden',
  borderRadius: 30,
}
});
export default Admin
