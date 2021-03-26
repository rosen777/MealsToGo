import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Navigation } from "./src/infrastructure/navigation";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNmkSprI2qEQB9Loy6Gejx5Go7C4M4CW4",
  authDomain: "meals-to-go-14953.firebaseapp.com",
  projectId: "meals-to-go-14953",
  storageBucket: "meals-to-go-14953.appspot.com",
  messagingSenderId: "782473645971",
  appId: "1:782473645971:web:84ac3dc95a9cc4cf18a266",
  measurementId: "G-EJ3S57L9BX",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("mo@binni.io", "test123")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  if (!isAuthenticated) return null;

  console.log("isAuthenticated", isAuthenticated);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
});
