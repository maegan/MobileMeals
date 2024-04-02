import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  search: {
    flex: 0.06,
    padding: 10,
    justifyContent: "center",
  },
  list: {
    flex: 0.95,
    backgroundColor: "blue",
    padding: 10,
    justifyContent: "top",
  },
});
