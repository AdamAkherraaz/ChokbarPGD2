import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';
import QRCodeWhite from '../../assets/qrcode_white.svg';
import QRCodeBlack from '../../assets/qrcode_black.svg';
import theme from '../../theme';

export function Qrcode(props) {
  const isActive = props.property1 === 'Active';

  const QRCodeIcon = isActive ? QRCodeBlack : QRCodeWhite;

  return (
    <View style={[styles.root, isActive && styles.rootProperty1Active]}>
      <View style={styles.qrContainer}>
      <QRCodeIcon style={[styles.qrIcon, { transform: [{ scale: 0.8 }] }]} />        
        <Text style={[styles.scannezEtGagnez, isActive && styles.scannezEtGagnezProperty1Active]}>
          Scannez et gagnez
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width:320,
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
    marginRight: 10, // 10px padding between SVG and text
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
