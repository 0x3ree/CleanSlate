// src/components/Common/Card.js
import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../../constant/color";
import SIZES from "../../constant/dimensions";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.paddingSmall,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: SIZES.radius / 2,
    elevation: 3, // For Android
    marginBottom: SIZES.paddingSmall,
  },
});

export default Card;
