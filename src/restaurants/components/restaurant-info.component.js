import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.sizes[1]};
  font-family: ${(props) => props.theme.fonts.body};
`;
const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const Rating = styled(View)`
  flex-direction: row;
`;

const Status = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://img.freepik.com/premium-photo/pizza_100342-33.jpg?w=740",
    ],
    address = "515 Loudon Rd, Loudonville, NY",
    isOpenNow = true,
    rating = 3.2,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);
  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Status>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>
          <SvgXml xml={open} height={20} width={20} />
        </Status>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
