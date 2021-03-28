import React, { useContext } from "react";
import styled from "styled-components/native";

import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Components
import { SafeArea } from "../../components/utils/safe-area.component";
import { Spacer } from "../../components/spacer/spacer.component";
import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import CompactRestaurantInfo from "../../components/compact-restaurant-info.component";
import { RestaurantList } from "../../components/restaurant-list.styles";

// Contexts
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

const FavoritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
});

const FavoritesListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      {favorites.length ? (
        <SafeArea>
          <RestaurantList
            data={favorites}
            renderItem={({ favorite }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: favorite,
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={favorite} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(favorite) => favorite.name}
          />
        </SafeArea>
      ) : (
        <NoFavoritesArea>
          <Text center>No favorites yet</Text>
        </NoFavoritesArea>
      )}
    </SafeArea>
  );
};

export default FavoritesScreen;
