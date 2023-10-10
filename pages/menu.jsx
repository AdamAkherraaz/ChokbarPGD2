import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';
import Account from '../assets/menu/account';
import Fidelite from '../assets/menu/fidelite';
import Mentions from '../assets/menu/mentions';
import Cgu from '../assets/menu/cgu';
import theme from '../theme';
import { useNavigation } from '@react-navigation/native';
function Menu() {
  const navigation = useNavigation();
    return (
      <View style={styles.root}>
        <View style={[styles.menuItem, styles.separator]}>
          <Account width={20} height={20} />
          <Text style={styles.compte}>Compte</Text>
        </View>
        <View style={[styles.menuItem2, styles.separator]}>
          <Fidelite width={20} height={20} />
          <Text style={styles.fidelite}>Fidélité</Text>
        </View>
        <View style={[styles.menuItem3, styles.separator]}>
          <Mentions width={20} height={20} />
          <Text style={styles.mentionsLegales}>Mentions légales</Text>
        </View>
        <View style={styles.menuItem4}>
         
          <Cgu width={20} height={20} />
          <Text style={styles.conditionsGenerales}>Conditions générales</Text>
        </View>
      </View>
    );
}
  

const styles = StyleSheet.create({
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',  // adjust this color as needed
        paddingVertical: 20,
      },      
    Account: {
      width: 20,
      height: 20,
      flexShrink: 0,
    },
    compte: {
      height: 24,
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 0,
      color: theme.colors.Primary,
      fontFamily: FontFamily.promptRegular,    
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 24,
    },
    menuItem: {
      width: 320,
      alignItems: 'center',
      gap: 24,
      flexDirection: 'row',
      paddingVertical: 0,
      paddingHorizontal: 20,
    },
    Fidelite: {
      width: 20,
      height: 20,
      flexShrink: 0,
    },
    fidelite: {
      height: 24,
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 0,
      color: theme.colors.Primary,
      fontFamily: FontFamily.promptRegular,    
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 24,
    },
    menuItem2: {
      width: 320,
      alignItems: 'center',
      gap: 24,
      flexDirection: 'row',
      paddingVertical: 0,
      paddingHorizontal: 20,
    },
    Mentions: {
      width: 20,
      height: 20,
      flexShrink: 0,
    },
    mentionsLegales: {
      height: 24,
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 0,
      color: theme.colors.Primary,
      fontFamily: FontFamily.promptRegular,    
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 24,
    },
    menuItem3: {
      width: 320,
      alignItems: 'center',
      gap: 24,
      flexDirection: 'row',
      paddingVertical: 0,
      paddingHorizontal: 20,
    },
    Cgu: {
      width: 20,
      height: 20,
      flexShrink: 0,
    },
    conditionsGenerales: {
      height: 24,
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 0,
      color: theme.colors.Primary,
      fontFamily: FontFamily.promptRegular,    
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 24,
    },
    menuItem4: {
      width: 320,
      alignItems: 'center',
      gap: 24,
      flexDirection: 'row',
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
  });

export default Menu;
