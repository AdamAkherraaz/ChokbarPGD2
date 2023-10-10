import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';
import MaskGroup from '../assets/legende/mask-group.png';
import MaskGroup1 from '../assets/legende/mask-group1.png';
import MaskGroup2 from '../assets/legende/mask-group2.png';
import { Image } from 'react-native';

const LegendeDesc = () => {
  return (
    <View style={styles.legendeDesc}>
      <Text style={styles.laffluenceDesBars}>
        *L’affluence des bars est calculée en fonction de la position en temps
        réel des utilisateurs de Chok’Bar.
      </Text>
      <View style={styles.maskGroupParent}>
        <Image source={MaskGroup2} />  
        <View style={[styles.laSalleEstPleineCraquerParent, styles.parentLayout]}>
          <Text style={[styles.laSalleEst, styles.laSalleEstTypo]}>
            La salle est pleine à craquer, sors tes meilleurs pas de danse !
          </Text>
          <Text style={[styles.forteAffluence, styles.affluenceTypo]}>
            Forte affluence
          </Text>
        </View>
      </View>
      <View style={[styles.maskGroupGroup, styles.maskGroupLayout]}>
        <Image source={MaskGroup1} />
        <View style={[styles.ilCommenceYAvoirDuMondeParent, styles.commenceLayout]}>
          <Text style={[styles.ilCommence, styles.commenceLayout]}>
            Il commence à y avoir du monde, prends vite les dernières places !
          </Text>
          <Text style={[styles.moyenneAffluence, styles.affluenceTypo]}>
            Moyenne affluence
          </Text>
        </View>
      </View>
      <View style={[styles.maskGroupContainer, styles.maskGroupLayout1]}>
        <Image source={MaskGroup} />
        <View style={[styles.ilCommenceYAvoirDuMondeParent, styles.commenceLayout]}>
          <Text style={[styles.ilCommence, styles.commenceLayout]}>
            Le bar est calme, parfait pour une partie de jeux de société !
          </Text>
          <Text style={[styles.faibleAffluence, styles.affluenceTypo]}>
            Faible affluence
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  laffluenceDesBars: {
    marginLeft: -166,
    top: 618,
    left: "50%",
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "200",
    fontFamily: FontFamily.promptExtraLightItalic,
    textAlign: "center",
    width: 340,
    color: Color.colorBlack,
    position: "absolute",
  },
  maskGroupParent: {
    flexDirection: 'row', // aligns children horizontally
    alignItems: 'center', // vertically aligns children in the center
    top: 425,
    width: 340,
    height: 150,
    position: 'absolute',
    left: -180,
  },
  maskGroupGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 185,
  },
  maskGroupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },  
  parentLayout: {
    height: 84,
    left: 170,
  },
  laSalleEstTypo: {
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.promptRegular,
    lineHeight: 18,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    left: 0,
    top: 30,
  },
  affluenceTypo: {
    fontFamily: FontFamily.promptMedium,
    fontWeight: '500',
    lineHeight: 22, // Ensure this is large enough. Adjust as necessary.
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.colorBlack,
  },
  maskGroupLayout: {
    height: 140,
    width: 330,
    left: -180,
    top: 230,
    position: 'absolute',
  },
  maskGroupLayout1: {
    height: 140,
    width: 330,
    left: -180,
    top: 30,
    position: 'absolute',
  },
  commenceLayout: {
    width: 175,
    position: 'absolute',
  },
  forteAffluence: {
    width: 154,
    position: 'absolute',
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
  },
  laSalleEstPleineCraquerParent: {
    top: 33,
    width: 185,
    position: 'absolute',
  },
  ilCommence: {
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.promptRegular,
    lineHeight: 18,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    top: 30,
  },
  ilCommenceYAvoirDuMondeParent: {
    top: 28,
    height: 84,
    left: 170,
  },
  legendeDesc: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 520,
  },
});

export default LegendeDesc;
