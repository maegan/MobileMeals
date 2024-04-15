import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const SearchContainer = styled(View)`
  flex: 0.06;
  padding: ${(props) => props.theme.space[3]};
  justify-content: "center";
`;

const RestaurantListContainer = styled(View)`
  flex: 0.95;
  padding: ${(props) => props.theme.space[2]};
  justify-content: "top";
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
