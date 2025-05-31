// src/screens/App/HomeScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constant/color";
import SIZES from "../../constant/dimensions";
import {
  SERVICE_OVERVIEW,
  ALL_SERVICE_TYPES,
  WHY_CHOOSE_US,
  PROMOTIONS,
} from "../../data/catalogData";
import ServiceCard from "../../components/Services/ServiceCard"; // We'll create this
import * as Animatable from "react-native-animatable"; // For animations

const HomeScreen = ({ navigation }) => {
  const renderServiceItem = ({ item, index }) => (
    <Animatable.View animation="fadeInUp" duration={500} delay={index * 100}>
      <ServiceCard
        service={item}
        onPress={() =>
          navigation.navigate("ServiceDetail", { serviceId: item.id })
        }
      />
    </Animatable.View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Animatable.View animation="fadeInDown" duration={800}>
          <Text style={styles.headerTitle}>Your Home, Spotless.</Text>
          <Text style={styles.serviceOverview}>{SERVICE_OVERVIEW}</Text>
        </Animatable.View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Cleaning Services</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ServiceList")}
            >
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={ALL_SERVICE_TYPES.slice(0, 2)} // Show first 2, for example
            renderItem={renderServiceItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        <Animatable.View
          style={styles.section}
          animation="fadeInUp"
          duration={500}
          delay={200}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Why Choose Us?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("WhyChooseUs")}
            >
              <Text style={styles.seeAllText}>Learn More</Text>
            </TouchableOpacity>
          </View>
          {WHY_CHOOSE_US.slice(0, 3).map(
            (
              item,
              index // Show a few
            ) => (
              <Animatable.View
                key={index}
                style={styles.whyChooseUsItem}
                animation="fadeInUp"
                duration={500}
                delay={300 + index * 100}
              >
                <Text style={styles.whyChooseUsTitle}>{item.title}</Text>
                <Text style={styles.whyChooseUsDesc}>{item.description}</Text>
              </Animatable.View>
            )
          )}
        </Animatable.View>

        <Animatable.View
          style={styles.section}
          animation="fadeInUp"
          duration={500}
          delay={400}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Current Promotions</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Promotions")}>
              <Text style={styles.seeAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.promoCard}
            onPress={() => navigation.navigate("Promotions")}
          >
            <Text style={styles.promoText}>{PROMOTIONS.firstTimeDiscount}</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: SIZES.padding * 2, // For space at the bottom
  },
  headerTitle: {
    fontSize: SIZES.h1,
    fontWeight: "bold",
    color: COLORS.primary,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.paddingSmall,
  },
  serviceOverview: {
    fontSize: SIZES.body3,
    color: COLORS.secondary,
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
    lineHeight: SIZES.body3 * 1.5,
  },
  section: {
    marginTop: SIZES.padding,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.paddingSmall,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.paddingSmall,
  },
  sectionTitle: {
    fontSize: SIZES.h2,
    fontWeight: "600",
    color: COLORS.black,
  },
  seeAllText: {
    fontSize: SIZES.body4,
    color: COLORS.primary,
    fontWeight: "500",
  },
  horizontalList: {
    paddingHorizontal: SIZES.padding,
    paddingRight: SIZES.padding * 2, // Ensure last card has space
  },
  whyChooseUsItem: {
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.paddingSmall / 2,
  },
  whyChooseUsTitle: {
    fontSize: SIZES.h3,
    fontWeight: "500",
    color: COLORS.black,
  },
  whyChooseUsDesc: {
    fontSize: SIZES.body4,
    color: COLORS.darkGray,
  },
  promoCard: {
    backgroundColor: COLORS.accent,
    padding: SIZES.paddingSmall,
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.padding,
    alignItems: "center",
  },
  promoText: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: "bold",
  },
});

export default HomeScreen;
