import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${StatusBar.currentHeight}px;
`;
// may need to use this if issues on iOS:
//${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  justify-content: "center";
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
      ]}
      renderItem={() => <RestaurantInfo />}
      keyExtractor={(item) => item.name}
      contentContainerStyle
    />
  </SafeArea>
);
