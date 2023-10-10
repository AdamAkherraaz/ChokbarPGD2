import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import QRCodeWhite from '../../assets/fidelite/fidelite-button-white.png';
import QRCodeBlack from '../../assets/fidelite/fidelite-button-black.png';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';
import theme from '../../theme';

export function FideliteButton(props) {
  const [isActive, setIsActive] = useState(false);
  const QRCodeIcon = isActive ? QRCodeBlack : QRCodeWhite;

  return (
    <View>
      <TouchableOpacity 
        style={[styles.root, isActive && styles.rootProperty1Active]}
        onPress={() => setIsActive(!isActive)}> 
        <View style={styles.qrContainer}>
          <Image source={QRCodeIcon} style={[styles.qrIcon, { transform: [{ scale: 0.8 }] }]} />
          <Text style={[styles.scannezEtGagnez, isActive && styles.scannezEtGagnezProperty1Active]}>
            Voir votre fidélité
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    width: 320,
    display: 'flex',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: '#000',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    borderRadius: 60,
  },
  qrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrIcon: {
    marginRight: 10, // 10px padding between PNG and text
    width: 30,       // Assuming a base size for the image. You may need to adjust.
    height: 30,      // Adjust based on your actual image's aspect ratio
    resizeMode: 'contain' // ensures the image scales correctly
  },
  rootProperty1Active: {
    backgroundColor: theme.colors.principalOrange,
  },
  scannezEtGagnez: {
    color: '#FFF',
    fontFamily: FontFamily.promptRegular,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  scannezEtGagnezProperty1Active: {
    color: '#000',
  },
});
