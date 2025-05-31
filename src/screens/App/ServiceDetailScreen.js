// src/screens/App/ServiceDetailScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constant/color";
import SIZES from "../../constant/dimensions";
import { CLEANING_SERVICES, APARTMENT_SIZES } from "../../data/catalogData";
import * as Animatable from "react-native-animatable";

const ServiceDetailScreen = ({ route, navigation }) => {
  const { serviceId } = route.params;
  const service = Object.values(CLEANING_SERVICES).find(
    (s) => s.id === serviceId
  );

  if (!service) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.errorText}>Service not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animatable.View animation="fadeIn" duration={600}>
          <Text style={styles.serviceName}>{service.name}</Text>
          <Text style={styles.serviceDescription}>{service.description}</Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Tasks Included:</Text>
          {service.tasks.map((task, index) => (
            <Animatable.Text
              key={index}
              style={styles.taskItem}
              animation="fadeInUp"
              delay={300 + index * 50}
            >
              • {task}
            </Animatable.Text>
          ))}
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={400}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Pricing:</Text>
          {Object.keys(service.pricing).map((sizeKey, index) => (
            <Animatable.View
              key={sizeKey}
              style={styles.pricingItem}
              animation="fadeInUp"
              delay={500 + index * 50}
            >
              <Text style={styles.apartmentSize}>{sizeKey}:</Text>
              <Text style={styles.price}>
                {typeof service.pricing[sizeKey] === "number"
                  ? `₦${service.pricing[sizeKey].toLocaleString()}`
                  : service.pricing[sizeKey]}
              </Text>
            </Animatable.View>
          ))}
          {service.recurringDiscount && (
            <Animatable.Text
              style={styles.discountText}
              animation="fadeInUp"
              delay={600}
            >
              {service.recurringDiscount}
            </Animatable.Text>
          )}
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={500}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Estimated Time:</Text>
          {Object.entries(service.estimatedTime).map(([size, time], index) => (
            <Animatable.View
              key={size}
              style={styles.pricingItem}
              animation="fadeInUp"
              delay={700 + index * 50}
            >
              <Text style={styles.apartmentSize}>{size}:</Text>
              <Text style={styles.price}>{time}</Text>
            </Animatable.View>
          ))}
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={600}>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() =>
              navigation.navigate("Booking", {
                serviceId: service.id,
                serviceName: service.name,
              })
            }
          >
            <Text style={styles.bookButtonText}>Book This Service</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 3, // Ensure space for button
  },
  serviceName: {
    fontSize: SIZES.h1,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: SIZES.paddingSmall,
  },
  serviceDescription: {
    fontSize: SIZES.body3,
    color: COLORS.secondary,
    marginBottom: SIZES.padding,
    lineHeight: SIZES.body3 * 1.5,
  },
  section: {
    marginBottom: SIZES.padding,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    paddingTop: SIZES.paddingSmall,
  },
  sectionTitle: {
    fontSize: SIZES.h2,
    fontWeight: "600",
    color: COLORS.black,
    marginBottom: SIZES.paddingSmall,
  },
  taskItem: {
    fontSize: SIZES.body3,
    color: COLORS.darkGray,
    marginBottom: SIZES.base / 2,
    marginLeft: SIZES.base,
  },
  pricingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.base / 2,
    paddingVertical: SIZES.base / 2,
  },
  apartmentSize: {
    fontSize: SIZES.body3,
    color: COLORS.darkGray,
    flex: 1,
  },
  price: {
    fontSize: SIZES.body3,
    fontWeight: "bold",
    color: COLORS.accent,
  },
  discountText: {
    fontSize: SIZES.body4,
    color: COLORS.primary,
    fontStyle: "italic",
    marginTop: SIZES.base,
  },
  bookButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.paddingSmall + SIZES.base / 2,
    borderRadius: SIZES.radius,
    alignItems: "center",
    marginTop: SIZES.padding,
  },
  bookButtonText: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: SIZES.h3,
    color: COLORS.error,
    textAlign: "center",
    marginTop: SIZES.padding * 2,
  },
});

export default ServiceDetailScreen;
