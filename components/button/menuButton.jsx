import React from 'react';
import {StyleSheet, View} from 'react-native';
import EllipseWhite from '../../assets/ellipse_white.svg';
import EllipseOrange from '../../assets/ellipse_orange.svg';
import MenuBlack from '../../assets/menu_black.svg';
import MenuWhite from '../../assets/menu_white.svg';

const MenuButtonProperty1 = {
  Active: 'Active',
  Unactive: 'Unactive',
};

function MenuButton(props) {
  const isActive = props.property1 === MenuButtonProperty1.Active;

  const Ellipse = isActive ? EllipseOrange : EllipseWhite;
  const MenuButtonIcon = isActive ? MenuWhite : MenuBlack;

  return (
    <View style={[styles.root, isActive ? styles.rootProperty1Active : styles.rootProperty1Unactive]}>
      <Ellipse />
      <MenuButtonIcon style={styles.MenuButtonIcon} />
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
  MenuButtonIcon: {
    position: 'absolute',
  }
});

export default MenuButton;
