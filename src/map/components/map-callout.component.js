import { Text, View } from "react-native";

import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
