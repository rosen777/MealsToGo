import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../components/typography/text.component";

import { SvgXml } from "react-native-svg";
import { Spacer } from "../components/spacer/spacer.component";

import star from "../../assets/star";
import open from "../../assets/open";

import {
  Icon,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Rating,
  SectionEnd,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    vicinity = "100 some random street",
    isOpenNow = true,
    rating = 3.6,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = [...new Array(Math.ceil(rating))];

  return (
    <RestaurantCard elevation={5} style={styles.card}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
        style={styles.cover}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Rating>
          {ratingArray.map((_, index) => (
            <SvgXml
              key={`star-${placeId}-${index}`}
              xml={star}
              width={20}
              height={20}
            />
          ))}
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            {/* Wrap the View in a Spacer in order to see the Spacer in the element inspector */}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Rating>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});

export default RestaurantInfoCard;
