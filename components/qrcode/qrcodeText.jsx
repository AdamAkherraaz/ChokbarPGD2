import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

const QrcodeText = ({ userId }) => {

  // Generate the URL for the QR Code
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=ff914d&data=${userId}`;

  return (
    <View style={styles.textParent}>
      <Text style={[styles.text, styles.textFlexBox]} />
      <View style={styles.qrcode}>
        <View style={[styles.qrcodeChild, styles.childPosition]} />
        <View style={styles.code}>
          <View style={[styles.codeChild, styles.childPosition]} />
          <Image
            style={styles.qrCode1Icon}
            contentFit="cover"
            source={{ uri: qrCodeUrl }}  // Updated this line
          />
          <Text style={[styles.ketxu, styles.ketxuTypo]}>KETXU</Text>
        </View>
        <Text style={[styles.scannezVotreQrContainer, styles.textFlexBox]}>
          Présentez votre QR Code pour{'\n'}commencer à gagner des récompenses.
        </Text>
        <Text style={[styles.thibaud, styles.ketxuTypo]}>Thibaud</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  ketxuTypo: {
    fontFamily: FontFamily.promptRegular,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    width: 226,
    height: 57,
  },
  qrcodeChild: {
    height: "122.86%",
    bottom: "-22.86%",
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
  },
  codeChild: {
    height: "100%",
    bottom: "0%",
    backgroundColor: Color.colorCoral,
    borderStyle: "solid",
    borderColor: Color.colorMediumpurple,
    borderWidth: 0.5,
  },
  qrCode1Icon: {
    height: "70.97%",
    width: "70.97%",
    top: "14.52%",
    right: "14.52%",
    bottom: "14.52%",
    left: "14.52%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
    borderWidth: 2,
    borderColor: Color.colorCoral,    
  },
  ketxu: {
    top: "86%",
    left: "35.48%",
    fontSize: FontSize.size_8xl_6,
    color: Color.colorDimgray,
  },
  code: {
    top: 20,
    left: 20,
    width: 310,
    height: 310,
    position: "absolute",
  },
  scannezVotreQrContainer: {
    marginLeft: -155,
    top: 410,
    fontSize: FontSize.size_base,
    fontWeight: "200",
    fontFamily: FontFamily.promptExtraLight,
    left: "50%",
  },
  thibaud: {
    marginLeft: -61,
    top: 348,
    fontSize: FontSize.size_12xl,
    left: "50%",
    color: Color.colorBlack,
    fontFamily: FontFamily.promptRegular,
  },
  qrcode: {
    marginLeft: -175,
    top: 22,
    width: 350,
    height: 400,
    left: "50%",
    position: "absolute",
  },
  textParent: {
    flex: 1,
    height: 514,
    width: "100%",
  },
});

export default QrcodeText;
