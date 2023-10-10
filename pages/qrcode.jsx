import React from 'react';
import { StyleSheet, View } from "react-native";
import { FideliteButton } from '../components/qrcode/fideliteButton';
import QrcodeText from '../components/qrcode/qrcodeText';

const QrcodePage = () => {
  return (
    <View style={styles.container}>
        <View>
            <QrcodeText />
        </View>
        <View style={styles.buttonContainer}>
            <FideliteButton />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 580,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  buttonContainer: {
    alignItems: 'center',
  }
});

export default QrcodePage;
