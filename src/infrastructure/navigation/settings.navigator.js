import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/screens/settings.screen";
import FavoritesScreen from "../../features/screens/favorites.screen";
import CameraScreen from "../../features/screens/camera.screen";

const Stack = createStackNavigator();

export const SettingsNavigator = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      options={{
        header: () => null,
      }}
      name="Settings"
      component={SettingsScreen}
    />
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
    <Stack.Screen name="Camera" component={CameraScreen} />
  </Stack.Navigator>
);
