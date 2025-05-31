// src/screens/Auth/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import COLORS from "../../constant/color";
import SIZES from "../../constant/dimensions";
import { simulateLogin } from "../../navigation/MainNavigator"; // For testing

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    // Simulate login
    console.log("Login attempt:", email, password);
    // In a real app, call your backend API here
    // If successful:
    simulateLogin(); // This will set a flag, app needs reload or state management to react
    // To properly navigate without full reload, you'd use context/redux to update userToken in MainNavigator
    Alert.alert(
      "Logged In (Simulated)",
      "Please reload the app to see the main content if it doesn't refresh automatically."
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to book your cleaning.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: SIZES.h1,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: SIZES.paddingSmall,
  },
  subtitle: {
    fontSize: SIZES.h3,
    color: COLORS.secondary,
    textAlign: "center",
    marginBottom: SIZES.padding * 2,
  },
  input: {
    height: 50,
    borderColor: COLORS.mediumGray,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.paddingSmall,
    paddingHorizontal: SIZES.paddingSmall,
    fontSize: SIZES.body3,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: SIZES.radius,
    alignItems: "center",
    marginBottom: SIZES.padding,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: "bold",
  },
  linkText: {
    color: COLORS.primary,
    textAlign: "center",
    fontSize: SIZES.body4,
  },
});

export default LoginScreen;
