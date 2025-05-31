// src/components/Services/ServiceCard.js
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import Card from "../common/Card"; // Assuming you have a Card component for consistent styling

const ServiceCard = ({ service, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touchable, style]}>
      <Card style={styles.card}>
        <View>
          {/* You could add an Image here for the service */}
          <Text style={styles.name}>{service.name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {service.description}
          </Text>
          {/* Consider showing a base price or a "From ₦X,XXX" text */}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginRight: SIZES.paddingSmall, // For horizontal lists
    width: SIZES.width * 0.6, // Example width for horizontal scroll
  },
  card: {
    // Specific styles for ServiceCard if needed, else Card's default is used
    // marginBottom: 0, // Override if used in horizontal list and Card has marginBottom
  },
  name: {
    fontSize: SIZES.h3,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: SIZES.base / 2,
  },
  description: {
    fontSize: SIZES.body4,
    color: COLORS.secondary,
    lineHeight: SIZES.body4 * 1.4,
  },
});

export default ServiceCard;
