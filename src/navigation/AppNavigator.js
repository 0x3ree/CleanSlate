// src/navigation/AppNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/App/HomeScreen";
import ServiceListScreen from "../screens/App/ServiceListScreen";
import ServiceDetailScreen from "../screens/App/ServiceDetailScreen";
import BookingScreen from "../screens/App/BookingScreen";
import BookingConfirmationScreen from "../screens/App/BookingConfirmationScreen";
import MyBookingsScreen from "../screens/App/MyBookingsScreen";
import ProfileScreen from "../screens/App/ProfileScreen";
import PromotionsScreen from "../screens/App/PromotionsScreen";
import WhyChooseUsScreen from "../screens/App/WhyChooseUsScreen";
import { COLORS } from "../constants/colors";
// import Icon from 'react-native-vector-icons/Ionicons'; // Example, install if you want icons

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack for Home flow
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="ServiceList" component={ServiceListScreen} />
    <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
    <Stack.Screen name="Booking" component={BookingScreen} />
    <Stack.Screen
      name="BookingConfirmation"
      component={BookingConfirmationScreen}
    />
    <Stack.Screen name="Promotions" component={PromotionsScreen} />
    <Stack.Screen name="WhyChooseUs" component={WhyChooseUsScreen} />
  </Stack.Navigator>
);

// Stack for Profile flow
const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileMain" component={ProfileScreen} />
    {/* Add other profile related screens here e.g. EditProfile, PaymentMethods */}
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.darkGray,
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   if (route.name === 'Home') {
        //     iconName = focused ? 'home' : 'home-outline';
        //   } else if (route.name === 'MyBookings') {
        //     iconName = focused ? 'list' : 'list-outline';
        //   } else if (route.name === 'Profile') {
        //     iconName = focused ? 'person' : 'person-outline';
        //   }
        //   // return <Icon name={iconName} size={size} color={color} />;
        // },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="MyBookings" component={MyBookingsScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
