import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import EllipseWhite from '../../assets/ellipse_white.svg';
import EllipseOrange from '../../assets/ellipse_orange.svg';
import MapBlack from '../../assets/center/center-black.png';
import MapWhite from '../../assets/center/center-white.png';

const CenterState = {
  Active: 'Active',
  Unactive: 'Unactive',
};


function Center({ onPress }) {
  const [isPressed, setIsPressed] = useState(false); 

  const Ellipse = isPressed ? EllipseOrange : EllipseWhite;
  const MapIcon = isPressed ? MapWhite : MapBlack;

  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}>
      <View style={[styles.root, isPressed ? styles.rootProperty1Active : styles.rootProperty1Unactive]}>
        <Ellipse />
        <Image source={MapIcon} style={styles.mapIcon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',  // add this line
  },
  rootProperty1Active: {
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  rootProperty1Unactive: {
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  mapIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
  }
});

export default Center;
