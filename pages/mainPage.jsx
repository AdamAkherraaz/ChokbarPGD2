import React, { useRef, useState , useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import { NavBar } from "../components/button/navbar";
import Map from '../Map';
import Register from '../Login-Register/Register';
import Login from '../Login-Register/Login';

const MainPage = ({ route }) => {
  const mapRef = useRef(null);
  const userId = route.params.id;
  
  const centerMap = () => {
    console.log('Attempting to center map on user location...');
    mapRef.current?.centerOnUserLocation();
  };
  
  return (
    <View style={styles.container}>
      <Map mapRef={mapRef} />
      <View style={styles.navBarContainer}>
        <NavBar onCenterPress={centerMap} userId={userId} />      
      </View>
      <View style={styles.buttonContainer}>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  navBarContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50, 
    alignSelf: 'center',
    zIndex: 2,
  }
});

export default MainPage;
