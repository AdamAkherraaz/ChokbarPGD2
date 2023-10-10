  import React, { useState, useEffect } from 'react';
  import * as Font from 'expo-font';
  import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, Image } from 'react-native';
  import { auth } from '../firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { getDoc } from 'firebase/firestore';
  import { doc } from 'firebase/firestore';
  import { db } from '../firebase';
  import emailIcon from '../assets/emailIcon.png';
  import lockIcon from '../assets/lock.png';
  import eyeOffIcon from '../assets/eye-off.png';
  import eyeIcon from '../assets/eye.png';
  import googleIcon from '../assets/google.png';


  function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [stayConnected, setStayConnected] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'BungeeShade-Regular': require('../assets/fonts/BungeeShade-Regular.ttf')
            });
            setFontLoaded(true);
        }
        loadFont();
    }, []);

    const login = async () => {
      let user; // define user outside of the try block
  
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          user = userCredential.user;
  
          if (!user || !user.uid) {
              console.error('User or user UID is not available.');
              return;
          }
  
          const userDoc = await getDoc(doc(db, 'users', user.uid));
  
          if (userDoc.exists) {
              if (userDoc.data()?.isAdmin) {
                  navigation.navigate('AdminPage', { id: user.uid });
              } else {
                  navigation.navigate('MainPage', { id: user.uid });
              }
          } else {
              navigation.navigate('MainPage', { id: user.uid });
          }
      } catch (error) {
          Alert.alert("Mauvais identifiants", error.message);
      }
    };
  
    

    if (!fontLoaded) {
        return null;  // Vous pouvez choisir d'afficher un écran de chargement ou un spinner ici si vous le souhaitez.
    }
    

    const handleForgotPassword = () => {
      // Ajouter une action à exécuter lorsque l'utilisateur clique sur "Mot de passe oublié ?"
    };

  
    return (
      <View style={styles.container}>
        <Text style={styles.loginTitle}>Connexion</Text>
    
        <View style={styles.inputIconContainer}>
          <Image source={emailIcon} style={styles.icon} />
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
            
        <View style={[styles.inputIconContainer, { marginTop: 10 }]}>
          <Image source={lockIcon} style={styles.icon} />
          <TextInput
            style={styles.inputPassword}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Image source={hidePassword ? eyeOffIcon : eyeIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
    
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 342, marginTop: 8 }}>
          <TouchableOpacity style={styles.checkboxContainer} onPress={() => setStayConnected(!stayConnected)}>
            <View style={[styles.checkbox, stayConnected && styles.checkboxChecked]} />
            <Text style={styles.checkboxLabel}>Rester connecté</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
    
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
    
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>ou continuer avec</Text>
          <View style={styles.divider} />
        </View>
    
        <Image source={googleIcon} style={styles.googleIcon} />
    
        <View style={styles.accountContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.noAccountText}>Pas encore de compte ?</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.createAccountText} onPress={() => navigation.navigate('Register')}>  Crée un compte</Text>
          </View>
        </View>
      </View>
    )};
    

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#A2A2A6',
      borderWidth: 1,
      borderRadius: 4,
      height: 43,
      width: 342,
      paddingLeft: 10,
      marginBottom: 16
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 8
    },
    inputEmail: {
      flex: 1,
      height: 43,
      borderColor: 'transparent'
    },
    inputPassword: {
      flex: 1,
      height: 43,
      borderColor: 'transparent'
    },
    button: {
      backgroundColor: '#FF914D',
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      height: 43,
      width: 342,
      marginBottom: 16
    },
    buttonText: {
      color: 'white',
      fontSize: 16
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16
    },
    checkbox: {
      width: 16,
      height: 16,
      borderWidth: 1,
      borderColor: '#747980',
      borderRadius: 2,
      marginRight: 5
    },
    checkboxChecked: {
      backgroundColor: '#747980'
    },
    checkboxLabel: {
      fontSize: 12,
      color: '#747980'
    },
    forgotPasswordLink: {
      marginBottom: 16
    },
    forgotPasswordText: {
      color: '#FF914D',
      fontSize: 12
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16
    },
    divider: {
      backgroundColor: '#CDCED1',
      height: 1,
      flex: 1,
      alignSelf: 'center'
    },
    dividerText: {
      marginHorizontal: 12,
      color: '#747980',
      fontSize: 14
    },
    googleIcon: {
      width: 36,
      height: 36,
      marginBottom: 16
    },
    noAccountText: {
      fontSize: 12,
      color: '#747980',
      marginBottom: 0,
      padding: 0
    },
    createAccountText: {
      fontSize: 12,
      color: '#FF914D',
      marginBottom: 0,
      padding: 0
    },
    accountContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginBottom: 16
    },
    textWrapper: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginTitle: {
      fontSize: 28,
      color: '#312E49',
      fontFamily: 'BungeeShade-Regular',  // Assurez-vous que ce nom correspond exactement au nom de la police défini dans le fichier .ttf.
      alignSelf: 'center',
      marginBottom: 20, 
    },
    
  });

  export default Login;

