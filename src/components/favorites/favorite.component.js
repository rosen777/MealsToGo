import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 0px;
  width: 64px;
  z-index: 9;
`;

const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoritesContext
  );

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};

export default Favorite;
