import React from "react";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Rating,
  Status,
  StatusEnd,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://img.freepik.com/premium-photo/pizza_100342-33.jpg?w=740",
    ],
    address = "515 Loudon Rd, Loudonville, NY",
    isOpenNow = true,
    rating = 3.7,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="label">{name}</Text>
        <Status>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <StatusEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </StatusEnd>
        </Status>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
