import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Image, Animated, Text } from 'react-native';


export default function Anim({onDone}) {
  const leftBeerAnim = useRef(new Animated.Value(0)).current;
  const rightBeerAnim = useRef(new Animated.Value(0)).current;
  const leftBeerRotate = useRef(new Animated.Value(-12)).current;
  const rightBeerRotate = useRef(new Animated.Value(13)).current;

  const goutteGaucheOpacity = useRef(new Animated.Value(0)).current;
  const goutteMilieuOpacity = useRef(new Animated.Value(0)).current;
  const goutteDroiteOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(leftBeerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(rightBeerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
      ]),
      Animated.parallel([
        Animated.timing(leftBeerAnim, {
          toValue: -1.5,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(rightBeerAnim, {
          toValue: -1.5,
          duration: 1000,
          useNativeDriver: true
        }),
      ]),
      Animated.parallel([
        Animated.timing(leftBeerRotate, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(rightBeerRotate, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        }),
      ]),
      Animated.timing(goutteGaucheOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(goutteMilieuOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(goutteDroiteOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
    ]).start(() => onDone()); 
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View style={{ 
        ...styles.leftBeerContainer, 
        transform: [
          { translateX: leftBeerAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 27] }) },
          { rotate: leftBeerRotate.interpolate({ inputRange: [0, 1], outputRange: ['1deg', '-29deg'] }) }
        ]
      }}>
        <Image source={require('./assets/leftBeer.png')} style={styles.beerImage} />
      </Animated.View>
      <Animated.View style={{ 
        ...styles.rightBeerContainer, 
        transform: [
          { translateX: rightBeerAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -27] }) },
          { rotate: rightBeerRotate.interpolate({ inputRange: [0, 1], outputRange: ['-2deg', '-29deg'] }) }
        ]
      }}>
         
        <Image source={require('./assets/rightBeer.png')} style={styles.beerImage} />
      </Animated.View>
      <View style={styles.goutteContainer}>
        <Animated.View style={{ ...styles.goutte, opacity: goutteGaucheOpacity }}>
          <Image source={require('./assets/goutte_gauche.png')} style={styles.goutteImage} />
        </Animated.View>
        <Animated.View style={{ ...styles.goutte, opacity: goutteMilieuOpacity }}>
          <Image source={require('./assets/goutte_milieu.png')} style={styles.goutteImage} />
        </Animated.View>
        <Animated.View style={{ ...styles.goutte, opacity: goutteDroiteOpacity }}>
          <Image source={require('./assets/goutte_droite.png')} style={styles.goutteImage} />
        </Animated.View>
      </View>
      <View style={styles.warningTextContainer}>
      <Text style={styles.warningText}>L'abus d'alcool est dangereux pour la santé, à consommer avec modération</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,  
  },
  leftBeerContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightBeerContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  beerImage: {
    width: 170,
    height: 300,
    resizeMode: 'contain',
  },
  goutteContainer: {
    position: 'absolute',
    top: '22%',  
    left: '12%',  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  
  goutte: {
    marginHorizontal: 5,
  },
  goutteImage: {
    width: 30,
    height: 60,
    resizeMode: 'contain',
  },
  warningTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  warningText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center'
  }
});
