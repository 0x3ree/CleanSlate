// src/screens/App/BookingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker'; // npm install @react-native-picker/picker
// For DateTimePicker: npm install @react-native-community/datetimepicker
// import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, SIZES } from '../../constants';
import { CLEANING_SERVICES, APARTMENT_SIZES, ADDON_SERVICES } from '../../data/catalogData';
import * as Animatable from 'react-native-animatable';

const BookingScreen = ({ route, navigation }) => {
  const { serviceId, serviceName } = route.params;
  const service = Object.values(CLEANING_SERVICES).find(s => s.id === serviceId);

  const [selectedSize, setSelectedSize] = useState(Object.keys(APARTMENT_SIZES)[0]); // Default to Studio
  const [bookingDate, setBookingDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (service && selectedSize) {
      let basePrice = 0;
      const pricingForSize = service.pricing[APARTMENT_SIZES[selectedSize]];
      if (typeof pricingForSize === 'number') {
        basePrice = pricingForSize;
      } else {
        // Handle "Contact for quote" - maybe disable booking or show message
        basePrice = 0; // Or some indicator that it's a custom quote
      }

      let addonsPrice = selectedAddons.reduce((sum, addonId) => {
        const addon = ADDON_SERVICES.find(a => a.id === addonId);
        // Simplified: assumes fixed price. Handle priceRange appropriately.
        return sum + (addon ? (addon.price || (addon.priceRange ? addon.priceRange[0] : 0) ) : 0);
      }, 0);
      setTotalPrice(basePrice + addonsPrice);
    }
  }, [service, selectedSize, selectedAddons]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || bookingDate;
    setShowDatePicker(Platform.OS === 'ios'); // Keep open on iOS, on Android it closes automatically
    setBookingDate(currentDate);
  };

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const handleBooking = () => {
    if (APARTMENT_SIZES[selectedSize] === 'Larger Homes/Duplexes' && typeof service.pricing[APARTMENT_SIZES[selectedSize]] !== 'number') {
        Alert.alert("Custom Quote Required", "For larger homes, please contact us for a custom quote. You can find contact details in the 'Profile' or 'Why Choose Us' section.");
        return;
    }

    const bookingDetails = {
      serviceName: service.name,
      apartmentSize: APARTMENT_SIZES[selectedSize],
      date: bookingDate.toLocaleDateString(),
      time: bookingDate.toLocaleTimeString(), // You might want a separate time picker
      addons: selectedAddons.map(id => ADDON_SERVICES.find(a => a.id === id)?.name),
      totalPrice,
    };
    console.log("Booking Details:", bookingDetails);
    navigation.navigate('BookingConfirmation', { bookingDetails });
  };

  if (!service) return <Text>Loading service details...</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.Text animation="fadeInDown" style={styles.title}>Book: {serviceName}</Animatable.Text>

        <Animatable.View animation="fadeInUp" delay={100} style={styles.section}>
          <Text style={styles.label}>Select Apartment Size:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedSize}
              onValueChange={(itemValue) => setSelectedSize(itemValue)}
              style={styles.picker}
            >
              {Object.keys(APARTMENT_SIZES).map(key => (
                <Picker.Item key={key} label={APARTMENT_SIZES[key]} value={key} />
              ))}
            </Picker>
          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={200} style={styles.section}>
          <Text style={styles.label}>Select Date & Time:</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
            <Text style={styles.dateButtonText}>{bookingDate.toLocaleString()}</Text>
          </TouchableOpacity>
          {/* {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={bookingDate}
              mode="datetime" // or "date" then "time"
              is24Hour={true}
              display="default"
              onChange={onDateChange}
            />
          )} */}
           <Text style={styles.infoText}>Note: DateTimePicker needs specific setup per platform. This is a placeholder for its UI.</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={300} style={styles.section}>
            <Text style={styles.label}>Add-on Services:</Text>
            {ADDON_SERVICES.map(addon => (
                <TouchableOpacity
                    key={addon.id}
                    style={[styles.addonItem, selectedAddons.includes(addon.id) && styles.addonItemSelected]}
                    onPress={() => toggleAddon(addon.id)}
                >
                    <Text style={styles.addonName}>{addon.name}</Text>
                    <Text style={styles.addonPrice}>
                        {addon.price ? `₦${addon.price.toLocaleString()}` : `₦${addon.priceRange[0].toLocaleString()} - ₦${addon.priceRange[1].toLocaleString()}`}
                    </Text>
                </TouchableOpacity>
            ))}
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={400} style={styles.summarySection}>
            <Text style={styles.totalPriceLabel}>Estimated Total:</Text>
            <Text style={styles.totalPriceValue}>
                {APARTMENT_SIZES[selectedSize] === 'Larger Homes/Duplexes' && typeof service.pricing[APARTMENT_SIZES[selectedSize]] !== 'number'
                ? "Contact for Quote"
                : `₦${totalPrice.toLocaleString()}`}
            </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={500}>
            <TouchableOpacity style={styles.confirmButton} onPress={handleBooking}>
                <Text style={styles.confirmButtonText}>Confirm Booking</Text>
            </TouchableOpacity>
        </Animatable.View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.lightGray },
  container: { padding: SIZES.padding, paddingBottom: SIZES.padding * 2 },
  title: { fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.primary, marginBottom: SIZES.padding, textAlign: 'center' },
  section: { marginBottom: SIZES.padding, backgroundColor: COLORS.white, padding: SIZES.paddingSmall, borderRadius: SIZES.radius },
  label: { fontSize: SIZES.h3, color: COLORS.secondary, marginBottom: SIZES.paddingSmall / 2, fontWeight: '600'},
  pickerContainer: { borderWidth: 1, borderColor: COLORS.mediumGray, borderRadius: SIZES.radius },
  picker: { height: 50, width: '100%' },
  dateButton: {
    padding: SIZES.paddingSmall,
    borderWidth: 1,
    borderColor: COLORS.mediumGray,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  dateButtonText: { fontSize: SIZES.body3, color: COLORS.primary },
  infoText: { fontSize: SIZES.body4, color: COLORS.darkGray, marginTop: SIZES.base, fontStyle: 'italic'},
  addonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.paddingSmall,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  addonItemSelected: { backgroundColor: COLORS.primary + '20' }, // Light primary for selection
  addonName: { fontSize: SIZES.body3, color: COLORS.black },
  addonPrice: { fontSize: SIZES.body3, color: COLORS.accent, fontWeight: '500' },
  summarySection: {
    marginTop: SIZES.padding,
    padding: SIZES.paddingSmall,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  totalPriceLabel: { fontSize: SIZES.h3, color: COLORS.secondary, fontWeight: '600' },
  totalPriceValue: { fontSize: SIZES.h2, color: COLORS.primary, fontWeight: 'bold', marginTop: SIZES.base / 2 },
  confirmButton: {
    backgroundColor: COLORS.accent,
    padding: SIZES.paddingSmall + SIZES.base/2,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    marginTop: SIZES.padding * 1.5,
  },
  confirmButtonText: { color: COLORS.white, fontSize: SIZES.h3, fontWeight: 'bold' },
});

export default BookingScreen;