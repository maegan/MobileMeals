import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  backgroundcolor: "#fff";
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: "#fff";
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
  font-size: 15px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://img.freepik.com/premium-photo/pizza_100342-33.jpg?w=740",
    ],
    address = "515 Loudon Rd, Loudonville, NY",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};
