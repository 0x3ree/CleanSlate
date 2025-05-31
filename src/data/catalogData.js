export const SERVICE_OVERVIEW =
  "We provide professional, reliable, and eco-friendly cleaning services designed for homes in Lagos and Abuja. Whether you need regular upkeep, a thorough deep clean, or a specialized service for moving, we’ve got you covered.";

export const APARTMENT_SIZES = {
  STUDIO: "Studio Apartment",
  ONE_BEDROOM: "1-Bedroom Apartment",
  TWO_BEDROOM: "2-Bedroom Apartment",
  THREE_BEDROOM: "3-Bedroom Apartment",
  LARGER_HOME: "Larger Homes/Duplexes",
};

export const ADDON_SERVICES = [
  { id: "win", name: "Window Cleaning", price: 2000, unit: "per window" },
  { id: "carp", name: "Carpet Cleaning", price: 5000, unit: "per room" },
  {
    id: "app",
    name: "Appliance Cleaning (Fridge, Oven)",
    price: 3000,
    unit: "per appliance",
  },
  {
    id: "uph",
    name: "Upholstery Cleaning",
    priceRange: [3000, 8000],
    unit: "",
  },
  {
    id: "til",
    name: "Tile and Grout Cleaning",
    priceRange: [4000, 8000],
    unit: "",
  },
];

export const CLEANING_SERVICES = {
  STANDARD: {
    id: "standard",
    name: "Standard Cleaning",
    description:
      "Perfect for routine maintenance. Keeps your home fresh and tidy with essential cleaning tasks.",
    tasks: [
      "Dusting all surfaces (furniture, shelves, etc.)",
      "Vacuuming and mopping floors",
      "Cleaning bathrooms (toilet, sink, shower/bathtub)",
      "Cleaning kitchen surfaces, sink, and exterior of appliances",
      "Taking out trash",
      "Making beds",
    ],
    pricing: {
      [APARTMENT_SIZES.STUDIO]: 8000,
      [APARTMENT_SIZES.ONE_BEDROOM]: 10000,
      [APARTMENT_SIZES.TWO_BEDROOM]: 15000,
      [APARTMENT_SIZES.THREE_BEDROOM]: 20000,
      [APARTMENT_SIZES.LARGER_HOME]: "Contact for a custom quote",
    },
    estimatedTime: {
      [APARTMENT_SIZES.STUDIO]: "2-3 hours",
      [APARTMENT_SIZES.ONE_BEDROOM]: "3-4 hours",
      [APARTMENT_SIZES.TWO_BEDROOM]: "4-5 hours",
      [APARTMENT_SIZES.THREE_BEDROOM]: "5-6 hours",
    },
    recurringDiscount: "10% off for weekly or bi-weekly bookings.",
  },
  DEEP: {
    id: "deep",
    name: "Deep Cleaning",
    description:
      "Goes beyond standard cleaning for a detailed, thorough refresh.",
    tasks: [
      "Everything in Standard Cleaning, plus:",
      "Cleaning baseboards and light fixtures",
      "Cleaning inside appliances (fridge, oven, microwave)",
      "Cleaning under furniture",
      "Wiping down cabinets and drawers",
      "Detailed cleaning of bathrooms and kitchens",
    ],
    pricing: {
      [APARTMENT_SIZES.STUDIO]: 12000,
      [APARTMENT_SIZES.ONE_BEDROOM]: 15000,
      [APARTMENT_SIZES.TWO_BEDROOM]: 22500,
      [APARTMENT_SIZES.THREE_BEDROOM]: 30000,
      [APARTMENT_SIZES.LARGER_HOME]: "Contact for a custom quote",
    },
    basePriceMultiplier: 1.5, // 50% more than Standard
    estimatedTime: {
      [APARTMENT_SIZES.STUDIO]: "3-4 hours",
      [APARTMENT_SIZES.ONE_BEDROOM]: "4-6 hours",
      [APARTMENT_SIZES.TWO_BEDROOM]: "6-8 hours",
      [APARTMENT_SIZES.THREE_BEDROOM]: "8-10 hours",
    },
  },
  MOVE_IN_OUT: {
    id: "move",
    name: "Move-In/Move-Out Cleaning",
    description: "Ensures a pristine home for moving in or out.",
    tasks: [
      "Everything in Deep Cleaning, plus:",
      "Cleaning inside cabinets and closets",
      "Cleaning interior windows",
      "Polishing floors (if applicable)",
    ],
    pricing: {
      [APARTMENT_SIZES.STUDIO]: 14000,
      [APARTMENT_SIZES.ONE_BEDROOM]: 17500,
      [APARTMENT_SIZES.TWO_BEDROOM]: 26250,
      [APARTMENT_SIZES.THREE_BEDROOM]: 35000,
      [APARTMENT_SIZES.LARGER_HOME]: "Contact for a custom quote",
    },
    basePriceMultiplier: 1.75, // 75% more than Standard
    estimatedTime: {
      [APARTMENT_SIZES.STUDIO]: "4-5 hours",
      [APARTMENT_SIZES.ONE_BEDROOM]: "5-7 hours",
      [APARTMENT_SIZES.TWO_BEDROOM]: "7-9 hours",
      [APARTMENT_SIZES.THREE_BEDROOM]: "9-12 hours",
    },
  },
};

export const WHY_CHOOSE_US = [
  {
    title: "Professional Staff",
    description: "Trained, background-checked cleaners you can trust.",
  },
  {
    title: "Eco-Friendly Products",
    description: "Safe and effective cleaning solutions.",
  },
  {
    title: "Flexible Scheduling",
    description: "Book at a time that suits you.",
  },
  {
    title: "Satisfaction Guarantee",
    description: "We’ll re-clean if you’re not happy.",
  },
  { title: "Insured and Bonded", description: "Peace of mind for every job." },
];

export const BOOKING_TERMS = {
  howToBook: "Booking should be done in the app.",
  paymentMethods:
    "Cash, bank transfer, or mobile payments accepted and crypto payments.",
  terms:
    "50% deposit for first-time bookings; 24-hour cancellation notice required.",
};

export const PROMOTIONS = {
  firstTimeDiscount: "10% off your first service.",
  referralBonus: "Refer a friend and get 5% off your next cleaning.",
};

export const ALL_SERVICE_TYPES = [
  CLEANING_SERVICES.STANDARD,
  CLEANING_SERVICES.DEEP,
  CLEANING_SERVICES.MOVE_IN_OUT,
];
