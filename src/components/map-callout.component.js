import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const RestaurantName = styled.Text`
  font-size: 12px;
`;

const MapCallout = ({ restaurant }) => {
  return (
    <View>
      <RestaurantName>{restaurant.name}</RestaurantName>
    </View>
  );
};

export default MapCallout;
