import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
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
    <Card style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Content>
        <Text>{name}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
  },
  cover: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
