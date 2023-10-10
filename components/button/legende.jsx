import React from 'react';
import {StyleSheet, View} from 'react-native';
import EllipseWhite from '../../assets/ellipse_white.svg';
import EllipseOrange from '../../assets/ellipse_orange.svg';
import MapBlack from '../../assets/map_black.svg';
import MapWhite from '../../assets/map_white.svg';

const LegendeProperty1 = {
  Active: 'Active',
  Unactive: 'Unactive',
};

 function Legend(props) {
  const isActive = props.property1 === LegendeProperty1.Active;

  const Ellipse = isActive ? EllipseOrange : EllipseWhite;
  const MapIcon = isActive ? MapWhite : MapBlack;

  return (
    <View style={[styles.root, isActive ? styles.rootProperty1Active : styles.rootProperty1Unactive]}>
      <Ellipse />
      <MapIcon style={styles.mapIcon} />
    </View>
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
    position: 'absolute',
  }
});


export default Legend