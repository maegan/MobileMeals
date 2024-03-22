import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: "#fff";
  margin-top: ${StatusBar.currentHeight}px;
`;
// may need to use this if issues on iOS:
//${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

const SearchContainer = styled(View)`
  flex: 0.08;
  padding: 10px;
  justify-content: "center";
`;

const RestaurantListContainer = styled(View)`
  flex: 0.95;
  background-color: blue;
  padding: 10px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfo />
    </RestaurantListContainer>
  </SafeArea>
);
