import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";

const FavoritesWarapper = styled.View`
  padding: 10px;
`;

const FavoritesBar = ({ favorites, onNavigate }) => {
  const navigateToDetails = (restaurant) => {
    onNavigate("RestaurantDetail", {
      restaurant,
    });
  };

  if (!favorites.length) {
    return null;
  }

  return (
    <FavoritesWarapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity onPress={() => navigateToDetails(restaurant)}>
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWarapper>
  );
};

export default FavoritesBar;
