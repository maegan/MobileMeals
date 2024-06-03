import React, { useContext } from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

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

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfo restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle
      />
    </SafeArea>
  );
};
