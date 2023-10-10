import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View, TouchableOpacity, Modal, Text, Pressable, Image, ScrollView } from 'react-native';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';
import OffreBar from "../button/infobar";
import * as Font from 'expo-font';

const screenWidth = Dimensions.get('window').width;

async function loadFonts() {
  await Font.loadAsync({
    'Prompt': require('../../GlobalStyles'),
  });
}

loadFonts();

export default function Offre() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBar, setSelectedBar] = useState(null);

  const bars = [
    { name: 'Manneken-Pis', offer: 'Happy hour = 00h00', rating: 4.1, image: 'bar1' },
    { name: "L'Abreuvoir", offer: 'Un shooter offert', rating: 4.2, image: 'bar2' },
    { name: 'Boston Tavern', offer: 'Une boisson mystère', rating: 4.3, image: 'bar3' },
    { name: 'La Taverne du Perroquet', offer: "Pinte offerte = 20€ d'achat", rating: 4.4, image: 'bar4' },
    { name: 'Les poupées russes', offer: 'Shooter offert', rating: 4.5, image: 'bar5' },
    { name: "Le Gump's", offer: 'Un demi offert', rating: 4.6, image: 'bar6' },
  ];

  const getImage = (imageName) => {
    switch (imageName) {
      case 'bar1':
        return require('../../assets/bar1.jpg');
      case 'bar2':
        return require('../../assets/bar2.jpg');
      case 'bar3':
        return require('../../assets/bar3.jpg');
      case 'bar4':
        return require('../../assets/bar4.jpg');
      case 'bar5':
        return require('../../assets/bar5.jpg');
      case 'bar6':
        return require('../../assets/bar6.jpg');
      default:
        return null;
    }
  };

  const handleBarClick = (bar) => {
    setSelectedBar(bar);
    setModalVisible(true);
  };

  return (
    <ScrollView style={{ flex: 1, overflow: 'visible' }}>
      {bars.map((bar, index) => (
        <TouchableOpacity key={index} onPress={() => handleBarClick(bar)} style={{ ...styles.root, ...styles.clickable }}>
          <View style={styles.rectangle10}>
            <Image source={getImage(bar.image)} style={{ width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
          </View>
          <Text style={styles.exempleDeBar}>
            {bar.name}
          </Text>
          <View style={styles.offre}>
            <View style={styles.frame13}>
              <Text style={styles.exempleDoffre}>
                {bar.offer}
              </Text>
            </View>
          </View>
          <View style={styles.ratingCircle}>
            <Text style={styles.ratingText}>{bar.rating}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { height: '95%' }]}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 15 }}>
              <Text style={styles.modalText}>Offre de {selectedBar?.name}</Text>
              <Pressable style={{ width: 35 }} onPress={() => setModalVisible(false)}>
              </Pressable>
            </View>
            <Image source={getImage(selectedBar?.image)} style={styles.modalImage} />
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 230 }}>
              {selectedBar && <OffreBar barDetails={selectedBar} />}
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: screenWidth - 30, 
    height: 160,
    backgroundColor: '#FDFDFD',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  rectangle10: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 108,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#E2E2E2',
  },
  exempleDeBar: {
    position: 'absolute',
    bottom: 16,
    left: 17,
    fontSize: 18,
    fontFamily: FontFamily.promptRegular,
    color: '#000',
  },
  offre: {
    position: 'absolute',
    top: 25,
    left: 0,
    flexDirection: 'row',
    width: '100%',
  },
  frame13: {
    backgroundColor: '#FF914D',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exempleDoffre: {
    fontSize: 12,
    color: '#FFF',
    fontFamily: FontFamily.promptRegular,
  },
  ratingCircle: {
    position: 'absolute',
    top: 119,
    right: 15,
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#D0D5D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 12,
  },
  modalImage: {
    width: '98%', 
    height: 200, 
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
    top: 150, 
    marginBottom: 10,
    zIndex: 2,
},

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: FontSize.medium,
    color: Color.primary,
    fontFamily: FontFamily.promptBold,
  },
  clickable: {
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
    marginTop: 15,
    marginLeft: -20,
  },
  
  
});

