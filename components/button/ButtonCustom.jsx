import { Image, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import QRCode from "../../assets/QRCode.svg"
import { useFonts } from 'expo-font';


const ButtonCustom = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Prompt-Regular': require('../../assets/fonts/Prompt/Prompt-Regular.ttf'),
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    
  });
  if (!fontsLoaded) {
    return null;
  }

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);


  return (
    <View style={styles.container}>
        <QRCode height={20} width={20}/>
        <Text style={[styles.texte,{fontFamily:"Inter-SemiBoldItalic"}]}>Scannez et gagnez</Text>
    
    </View>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"black",
        height:55,
        alignItems:"center",
        gap: "5px",
        paddingLeft: 20, 
        paddingRight: 20,
       borderRadius:60
        
    },
    texte:{
        color:"white",
        fontFamily: 'Prompt-Regular', // Use the exact font family name
    }
})    