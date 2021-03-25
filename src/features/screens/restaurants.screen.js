import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";

import { Spacer } from "../../components/spacer/spacer.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import styled from "styled-components/native";
import FavoritesBar from "../../components/favorites/favorites-bar.component";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { theme } from "../../infrastructure/theme";

import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import Search from "../../components/restaurant.search.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const IndicatorView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

// .attrs - gives specific props to our default FlatList

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = ({ navigation }) => {
  // Contexts
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <IndicatorView>
          <ActivityIndicator
            animating={true}
            color={theme.colors.loadingIndicator.primary}
            size={50}
          />
        </IndicatorView>
      )}
      <SearchContainer>
        <Search
          isFavoritesToggled={isToggled}
          onFavoritesToggle={() => setIsToggled(!isToggled)}
        />
      </SearchContainer>
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
