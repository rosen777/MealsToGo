import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { FadeInView } from "../../components/animations/fade.animation";

import { Spacer } from "../../components/spacer/spacer.component";
import { SafeArea } from "../../components/utils/safe-area.component";
import styled from "styled-components/native";

import { theme } from "../../infrastructure/theme";

// Contexts
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../services/favorites/favorites.context";

// Components
import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import Search from "../../components/restaurant.search.component";
import FavoritesBar from "../../components/favorites/favorites-bar.component";
import { RestaurantList } from "../../components/restaurant-list.styles";

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
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
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
