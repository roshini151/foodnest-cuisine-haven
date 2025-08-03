export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  cuisine: string[];
  address: string;
  city: string;
  priceRange: string;
  distance: string;
  isOpen: boolean;
  deliveryTime: string;
  hasTableBooking: boolean;
  phone: string;
  speciality: string;
}

export const cities = [
  "Mumbai",
  "Delhi", 
  "Bangalore",
  "Chennai",
  "Kolkata"
];

export const cuisineTypes = [
  "All",
  "North Indian",
  "South Indian", 
  "Chinese",
  "Continental",
  "Bakery",
  "Pizza",
  "Burger",
  "Biryani",
  "Street Food"
];

export const filterOptions = [
  { id: "distance", label: "Distance", icon: "📍" },
  { id: "rating", label: "Rating 4.0+", icon: "⭐" },
  { id: "open", label: "Open Now", icon: "🕐" },
  { id: "cuisine", label: "Cuisine", icon: "🍽️" }
];

export const restaurants: Restaurant[] = [
  // Mumbai Restaurants
  {
    id: "r1",
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
    rating: 4.5,
    reviews: 1254,
    cuisine: ["North Indian", "Chinese"],
    address: "Shop 12, Linking Road, Bandra West",
    city: "Mumbai",
    priceRange: "₹₹",
    distance: "2.1 km",
    isOpen: true,
    deliveryTime: "45-60 mins",
    hasTableBooking: true,
    phone: "+91 98765 43210",
    speciality: "Butter Chicken & Hakka Noodles"
  },
  {
    id: "r2", 
    name: "South Delights",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
    rating: 4.3,
    reviews: 892,
    cuisine: ["South Indian"],
    address: "15, MG Road, Fort",
    city: "Mumbai", 
    priceRange: "₹",
    distance: "3.5 km",
    isOpen: true,
    deliveryTime: "30-45 mins",
    hasTableBooking: true,
    phone: "+91 98765 43211",
    speciality: "Masala Dosa & Filter Coffee"
  },
  {
    id: "r3",
    name: "Sweet Dreams Bakery",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    rating: 4.7,
    reviews: 2156,
    cuisine: ["Bakery", "Continental"],
    address: "Lane 3, Koregaon Park",
    city: "Mumbai",
    priceRange: "₹₹",
    distance: "1.8 km", 
    isOpen: true,
    deliveryTime: "25-40 mins",
    hasTableBooking: false,
    phone: "+91 98765 43212",
    speciality: "Chocolate Cakes & Fresh Pastries"
  },
  
  // Delhi Restaurants
  {
    id: "r4",
    name: "Royal Punjab",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    rating: 4.6,
    reviews: 3421,
    cuisine: ["North Indian", "Biryani"],
    address: "Block M, Connaught Place",
    city: "Delhi",
    priceRange: "₹₹₹",
    distance: "5.2 km",
    isOpen: true,
    deliveryTime: "40-55 mins",
    hasTableBooking: true,
    phone: "+91 98765 43213",
    speciality: "Dal Makhani & Chicken Biryani"
  },
  {
    id: "r5",
    name: "Golden Bakehouse",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400",
    rating: 4.4,
    reviews: 1876,
    cuisine: ["Bakery"],
    address: "Khan Market, Block 15",
    city: "Delhi",
    priceRange: "₹",
    distance: "3.7 km",
    isOpen: true,
    deliveryTime: "20-35 mins",
    hasTableBooking: false,
    phone: "+91 98765 43214",
    speciality: "Fresh Bread & Cookies"
  },

  // Bangalore Restaurants  
  {
    id: "r6",
    name: "Dosa Corner",
    image: "https://images.unsplash.com/photo-1694842536843-e0e3be1a1ab8?w=400",
    rating: 4.8,
    reviews: 4521,
    cuisine: ["South Indian"],
    address: "18th Main, Jayanagar",
    city: "Bangalore",
    priceRange: "₹",
    distance: "2.3 km",
    isOpen: true,
    deliveryTime: "25-40 mins",
    hasTableBooking: true,
    phone: "+91 98765 43215",
    speciality: "Crispy Dosas & Coconut Chutney"
  },
  {
    id: "r7",
    name: "Chai & Chat",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    rating: 4.2,
    reviews: 1345,
    cuisine: ["Street Food", "Chinese"],
    address: "Commercial Street, Bengaluru",
    city: "Bangalore",
    priceRange: "₹",
    distance: "4.1 km",
    isOpen: false,
    deliveryTime: "35-50 mins",
    hasTableBooking: false,
    phone: "+91 98765 43216",
    speciality: "Masala Chai & Momos"
  },

  // Chennai Restaurants
  {
    id: "r8",
    name: "Chettinad Spice",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    rating: 4.5,
    reviews: 2134,
    cuisine: ["South Indian"],
    address: "T Nagar, 4th Street",
    city: "Chennai",
    priceRange: "₹₹",
    distance: "3.8 km",
    isOpen: true,
    deliveryTime: "45-60 mins",
    hasTableBooking: true,
    phone: "+91 98765 43217",
    speciality: "Chettinad Chicken & Fish Curry"
  },
  {
    id: "r9",
    name: "Sunrise Bakery",
    image: "https://images.unsplash.com/photo-1555507036-ab794f575c1f?w=400",
    rating: 4.1,
    reviews: 987,
    cuisine: ["Bakery"],
    address: "Besant Nagar Beach Road",
    city: "Chennai",
    priceRange: "₹",
    distance: "6.2 km",
    isOpen: true,
    deliveryTime: "30-45 mins",
    hasTableBooking: false,
    phone: "+91 98765 43218",
    speciality: "Egg Puffs & Butter Biscuits"
  },

  // Kolkata Restaurants
  {
    id: "r10",
    name: "Bengal Biryani House",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d50a?w=400",
    rating: 4.6,
    reviews: 3256,
    cuisine: ["Biryani", "North Indian"],
    address: "Park Street, Near Metro",
    city: "Kolkata",
    priceRange: "₹₹",
    distance: "2.7 km",
    isOpen: true,
    deliveryTime: "50-65 mins",
    hasTableBooking: true,
    phone: "+91 98765 43219",
    speciality: "Kolkata Biryani & Mutton Curry"
  }
];

// Enhanced menu items with bakery items
export const enhancedMenuItems = [
  // Existing items remain the same...
  // Adding bakery items
  {
    id: "bk1",
    name: "Chocolate Croissant",
    description: "Buttery croissant filled with rich chocolate",
    price: 80,
    image: "https://images.unsplash.com/photo-1555507036-ab794f575c1f?w=400",
    category: "Bakery",
    rating: 4.5,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "bk2", 
    name: "Red Velvet Cake",
    description: "Moist red velvet cake with cream cheese frosting",
    price: 180,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400",
    category: "Bakery",
    rating: 4.7,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "bk3",
    name: "Butter Cookies",
    description: "Crispy homemade butter cookies",
    price: 120,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400",
    category: "Bakery", 
    rating: 4.3,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "bk4",
    name: "Rasmalai Cake",
    description: "Fusion dessert combining rasmalai with sponge cake",
    price: 220,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    category: "Bakery",
    rating: 4.8,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "bk5",
    name: "Fruit Tart",
    description: "Fresh seasonal fruits on vanilla custard tart",
    price: 150,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400", 
    category: "Bakery",
    rating: 4.4,
    isVeg: true,
    isSpicy: false
  }
];
