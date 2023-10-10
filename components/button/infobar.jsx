import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export function ButtonPoint({ progress = 85 }) {
  const progressBarWidth = (progress / 100) * 200;

  return (
    <View style={styles.buttonRoot}>
      <View style={styles.rectangle13Button}>
        <Text style={styles.vosPoints}>Vos points</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.offreContainer, { width: 200 }]}>
            <View style={[styles.offre2, { width: progressBarWidth }]} />
          </View>
          <Text style={styles.percentage}>{progress}%</Text>
        </View>
        <Text style={styles.votrePinteOfferte}>Votre pinte offerte !</Text>
      </View>
    </View>
  );
}

export function OffreBar({ barDetails }) {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle13}>
      <View style={styles.rectangle10}>
  <Image
    source={{ uri: barDetails.image }}
    style={{ width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
    resizeMode="cover"
  />
</View>

        <View style={styles.header}>
          <Text style={styles.exempleDeBar}>{barDetails.name}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingCircle}>
              <Text style={styles.ratingText}>{barDetails.rating}</Text>
            </View>
          </View>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.adresse}>Adresse</Text>
          <Text style={styles.numero}>Numéro</Text>
        </View>
        <View style={styles.rectangle14}>
          <Text style={styles.offre}>{barDetails.offer}</Text>
        </View>
        <View style={styles.buttonPointContainer}>
          <ButtonPoint />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  rectangle13: {
    width: 338,
    height: 320,
    backgroundColor: '#FDFDFD',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15,
  },
  rectangle10: {
    width: 0,
    height: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#E2E2E2',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 185,
  },
  ratingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontFamily: 'Prompt',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exempleDeBar: {
    color: '#000',
    fontFamily: 'Prompt',
    fontSize: 18,
  },
  addressContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 1,
  },
  adresse: {
    color: '#000',
    fontFamily: 'Prompt',
    fontSize: 12,
  },
  numero: {
    color: '#000',
    fontFamily: 'Prompt',
    fontSize: 12,
    marginTop: 5,
  },
  rectangle14: {
    alignSelf: 'center',
    width: 318,
    height: 26,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19,
  },
  offre: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Prompt',
    fontSize: 12,
  },
  buttonPointContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonRoot: {
    width: 230,
    height: 110,
    marginTop: 10,
    alignItems: 'center',
  },
  rectangle13Button: {
    width: 230,
    height: 110,
    backgroundColor: '#FDFDFD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  vosPoints: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Prompt',
    fontSize: 24,
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  offreContainer: {
    height: 13,
    backgroundColor: '#E5D2C7',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  offre2: {
    height: 13,
    backgroundColor: '#FF914D',
    borderRadius: 15,
  },
  percentage: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Prompt',
    fontSize: 10,
    left: -190,
  },
  votrePinteOfferte: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Prompt',
    fontSize: 16,
    marginTop: 14,
  },
});

export default OffreBar;
