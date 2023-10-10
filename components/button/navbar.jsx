import React, { useState } from 'react'; 
import {StyleSheet, View, TouchableOpacity,Modal,Text,Pressable,Image, PanResponder} from 'react-native'; // import TouchableOpacity
import Legende from '../button/legende';
import MenuButton from './menuButton';
import QrcodeText from '../qrcode/qrcodeText';
import Hot from '../button/hot';
import Center from '../button/center';
import { Qrcode } from './qrcodeButton';
import Menu from '../../pages/menu';
import { useFonts } from 'expo-font';
import Offres from '../../pages/offres';
import { FideliteButton } from '../qrcode/fideliteButton';
import Fidelite from '../offers/fidelite';
import LegendeDesc from '../../pages/map-key';

export function NavBar({ onCenterPress, userId }) {
  
  const [activeButton, setActiveButton] = useState(''); // initialize with an empty string
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible1, setModalVisible1] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [modalVisible3, setModalVisible3] = React.useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const [fontsLoaded, error] = useFonts({
    "Bungee-Shade": require("../../assets/fonts/BungeeShade-Regular.ttf"),
  });

  const panResponder = React.useRef(
    PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            if (gestureState.dy > 50) {  // si glissé vers le bas de plus de 50 pixels
                setModalVisible(false);
                setModalVisible1(false);
                setModalVisible2(false);
                setModalVisible3(false);
            }
        }
    })
).current;

  return (
    <View style={styles.root}>
      <View style={styles.frame17}>
        <Center property1="Unactive" onPress={onCenterPress} />
      </View>
      <View style={styles.frame17}>
      <Modal

    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
    }}>
    <View 
        {...panResponder.panHandlers}
        style={{width:"100%",height:"100%",backgroundColor:"rgba(52, 52, 52, 0.8)",opacity:50}} 
        onPress={() => setModalVisible(false)}>
        <View style={styles.centerModal}>
            <View style={[styles.modalView,{height:"95%"}]}>
                <View style={styles.header}>
                    <Text style={styles.modalText}>Légende</Text>
                    <Pressable style={{width:35}} onPress={() => {setModalVisible(!modalVisible), setActiveButton('')}}>
                    </Pressable>
                </View>
                <View><Text><LegendeDesc/></Text></View>
            </View>
        </View>
    </View>
</Modal>

        <TouchableOpacity onPress={() => {setActiveButton('Legende'),setModalVisible(true)}}>
          <Legende property1={activeButton === 'Legende' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
      </View>
      <View style={styles.frame14}>
        
      <Modal

    animationType="slide"
    transparent={true}
    visible={modalVisible1}
    onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible1(!modalVisible1);
    }}>
    <View 
        {...panResponder.panHandlers}
        style={{width:"100%",height:"100%",backgroundColor:"rgba(52, 52, 52, 0.8)",opacity:50}} 
        onPress={() => setModalVisible1(false)}>
        <View style={styles.centerModal}>
            <View style={[styles.modalView,{height:"45%"}]}>
                <View style={styles.header}>
                    <Text style={styles.modalText}>Menu</Text>
                    <Pressable style={{width:35}} onPress={() => {setModalVisible1(false), setActiveButton('')}}>
                    </Pressable>
                </View>
                <View><Menu/></View>
            </View>
        </View>
    </View>
</Modal>

        <TouchableOpacity onPress={() => {setActiveButton('MenuButton'),setModalVisible1(true)}}>
          <MenuButton property1={activeButton === 'MenuButton' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
        <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible2}
    onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible2(!modalVisible2);
    }}
>
    {/* Fond semi-transparent */}
    <View 
        style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor:"rgba(52, 52, 52, 0.8)"}} 
    />

    {/* Contenu du modal */}
    <View {...panResponder.panHandlers} style={styles.centerModal}>
        <View style={[styles.modalView, {height:"95%"}]}>
            {/* La barre d'en-tête */}
            <View style={styles.header}>
                <Text style={styles.modalText}>Offres</Text>
                <Pressable style={{width:35}} onPress={() => {setModalVisible2(false); setActiveButton('')}}>
                </Pressable>
            </View>
            <Offres/>
        </View>
    </View>
</Modal>




        <TouchableOpacity onPress={() => {setActiveButton('Hot'),setModalVisible2(true)}}>
          <Hot property1={activeButton === 'Hot' ? "Active" : "Unactive"}/>
        </TouchableOpacity>
      </View>

      <Modal

    animationType="slide"
    transparent={true}
    visible={modalVisible3}
    onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible3(!modalVisible3);
    }}>
    <View 
        {...panResponder.panHandlers}
        style={{width:"100%",height:"100%",backgroundColor:"rgba(52, 52, 52, 0.8)",opacity:50}} 
        onPress={() => setModalVisible3(false)}>
        <View style={styles.centerModal}>
            <View style={[styles.modalView,{height:"95%"}]}>
                <View style={styles.header}>
                    <Text style={styles.modalText}>Qrcode</Text>
                    <Pressable style={{width:35}} onPress={() => {setModalVisible3(false), setActiveButton('')}}>
                    </Pressable>
                </View>
                <QrcodeText userId={userId} /> 
                <FideliteButton style={styles.fideliteButtonWrapper}/>
            </View>
        </View>
    </View>
</Modal>


      <TouchableOpacity onPress={() => {setActiveButton('Qrcode'),setModalVisible3(true)}}>
        <Qrcode property1={activeButton === 'Qrcode' ? "Active" : "Unactive"}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 390,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    backgroundColor: 'transparent',
  },
  frame17: {
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frame14: {
    width: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centerModal:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width:"100%",
    margin: 20,
    marginBottom:0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily:"Bungee-Shade",
    fontSize:30
  },

  header:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    width:"100%"},

    fideliteButtonWrapper: {
      marginTop: 20, 
      alignSelf: 'center', 
      width: '100%', 
      alignItems: 'center',
    },
    
    
    
});
