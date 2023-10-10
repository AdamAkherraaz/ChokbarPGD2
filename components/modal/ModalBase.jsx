import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Modal,Pressable } from 'react-native'

const ModalBase = ({height,title,children}) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{width:"100%",height:"100%",backgroundColor:"rgba(52, 52, 52, 0.8)",opacity:50}} onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.centerModal}>
          <View style={[styles.modalView,{height:height}]}>
            
            <View style={{display:"inline-flex", justifyContent:"center",width:"100%",gap:125}}>
                <Text style={styles.modalText}>{title}</Text>
                <Pressable style={{width:35}} onPress={() => setModalVisible(!modalVisible)}></Pressable>
                </View>
            <View>{children}</View>
          </View>
        </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
    )
}

export default ModalBase

const styles = StyleSheet.create({
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
  },})