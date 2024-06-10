import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${StatusBar.currentHeight}px;
`;
// may need to use this if issues on iOS:
//${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  padding: ${(props) => props.theme.space[2]};
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color={MD2Colors.red800} size={50} />
        </LoadingContainer>
      )}
      <Search />

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle
      />
    </SafeArea>
  );
};
