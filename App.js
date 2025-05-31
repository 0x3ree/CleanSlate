import "react-native-gesture-handler"; // Must be at the top
import React from "react";
import MainNavigator from "./src/navigation/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </>
  );
};

export default App;
