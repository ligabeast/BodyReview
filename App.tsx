import Settings from "@pages/Settings";
import "./nativewind-output";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";
import { styles } from "@styling/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Settings></Settings>;
  }
}
