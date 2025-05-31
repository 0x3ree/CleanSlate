// src/navigation/MainNavigator.js
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthLoadingScreen from "../screens/Auth/AuthLoadingScreen";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

// This is a simplified auth check. In a real app, you'd use AsyncStorage, Context API, or Redux.
let isAuthenticated = false; // Simulate auth state

const MainNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null); // null means not logged in

  useEffect(() => {
    // Simulate checking for a token
    const bootstrapAsync = async () => {
      // let token;
      // try {
      //   token = await AsyncStorage.getItem('userToken');
      // } catch (e) {
      //   // Restoring token failed
      // }
      // setUserToken(token);
      // For now, let's simulate a delay and then decide
      setTimeout(() => {
        setUserToken(isAuthenticated ? "dummy-token" : null); // Change 'isAuthenticated' to test flows
        setIsLoading(false);
      }, 1500);
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return <AuthLoadingScreen />;
  }

  return (
    <NavigationContainer>
      {userToken == null ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

// Function to simulate login/logout for testing navigation
export const simulateLogin = () => {
  isAuthenticated = true;
  // In a real app, you'd call a function here to re-trigger MainNavigator's useEffect or update state
  alert(
    "Simulated Login. Please reload the app (Ctrl+R or Cmd+R in simulator) to see the change if MainNavigator doesn't auto-update."
  );
};

export const simulateLogout = () => {
  isAuthenticated = false;
  alert(
    "Simulated Logout. Please reload the app (Ctrl+R or Cmd+R in simulator) to see the change if MainNavigator doesn't auto-update."
  );
};

export default MainNavigator;
