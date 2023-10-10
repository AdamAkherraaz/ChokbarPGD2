import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';

const Fidelite = () => {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle10} />
      <View style={styles.rectangle13} />
      <Text style={styles.exempleDeBar}>Exemple de bar</Text>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingText}>4.1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 338,
    height: 110,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  rectangle13: {
    width: 338,
    height: 110,
    backgroundColor: '#FDFDFD',
    borderRadius: 15,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1,
  },
  rectangle10: {
    position: 'absolute',
    top: 0,
    width: 338,
    height: 55,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#E2E2E2',
    zIndex: 2,
  },
  exempleDeBar: {
    position: 'absolute',
    top: 70, 
    left: 15,  // Ajustement pour se rapprocher du côté gauche
    width: 241,
    color: '#000',
    fontFamily: FontFamily.promptRegular,    
    fontSize: 18,
    zIndex: 3,
  },
  ratingCircle: {
    position: 'absolute',
    top: 60,
    right: 15, // Ajustement pour se rapprocher du côté droit
    width: 25, // Taille du cercle
    height: 25,
    borderRadius: 20,
    backgroundColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  ratingText: {
    fontSize: 12,
    color: '#000',
    fontFamily: FontFamily.promptRegular,    
  },
});

export default Fidelite;
