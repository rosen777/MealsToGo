import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState(null);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error saving", e);
    }
  };

  const loadFavorites = async (uid) => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        setIsLoading(false);
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      setIsLoading(false);
      setError(e);
      console.log("error loading", e);
    }
  };

  const addToFavorites = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFromFavorites = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavorites(newFavorites);
  };

  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    console.log(user);
    if (user && user.uid && favorites.length) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isLoading,
        error,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
