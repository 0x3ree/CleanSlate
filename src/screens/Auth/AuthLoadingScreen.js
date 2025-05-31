// src/screens/Auth/AuthLoadingScreen.js
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import COLORS from "../../constant/color";
import SIZES from "../../constant/dimensions";

const AuthLoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={styles.text}>Loading your clean space...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  text: {
    marginTop: SIZES.paddingSmall,
    fontSize: SIZES.h3,
    color: COLORS.secondary,
  },
});

export default AuthLoadingScreen;
