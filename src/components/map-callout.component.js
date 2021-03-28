import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import CompactRestaurantInfo from "./compact-restaurant-info.component";

const RestaurantName = styled.Text`
  font-size: 12px;
`;

const MapCallout = ({ restaurant }) => {
  return (
    <View>
      <RestaurantName>{restaurant.name}</RestaurantName>
      <CompactRestaurantInfo isMap restaurant={restaurant} />
    </View>
  );
};

export default MapCallout;
