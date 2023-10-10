import React, {useState} from "react";
import { StatusBar, } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { useFonts } from "expo-font";
import Anim from "./Anim";

import Routes from "./routes";
import QrcodePage from "./pages/qrcode";

LogBox.ignoreAllLogs();


export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Prompt-ExtraLightItalic": require("./assets/fonts/Prompt-ExtraLightItalic.ttf"),
    "Prompt-ExtraLight": require("./assets/fonts/Prompt-ExtraLight.ttf"),
    "Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
    "Prompt-Medium": require("./assets/fonts/Prompt-Medium.ttf"),
    "Bungee-Shade": require("./assets/fonts/BungeeShade-Regular.ttf"),
  });
  const [loadingDone, setLoadingDone] = useState(false);

  if (!fontsLoaded && !error) {
    return null;
  }

  if (!loadingDone){
    return <Anim onDone={() => setLoadingDone(true)} />
  }

  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
});
