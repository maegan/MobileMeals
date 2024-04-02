import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { RestaurantsScreen } from "./src/restaurants/screens/restaurants.screens";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
