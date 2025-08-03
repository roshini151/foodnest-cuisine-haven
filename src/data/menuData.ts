export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isVeg: boolean;
  isSpicy: boolean;
}

export const menuCategories = [
  "All",
  "North Indian",
  "Chinese", 
  "South Indian",
  "Pizza",
  "Burger",
  "Desserts",
  "Beverages",
  "Biryani",
  "Bakery"
];

export const menuItems: MenuItem[] = [
  // North Indian
  {
    id: "ni1",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces",
    price: 280,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
    category: "North Indian",
    rating: 4.5,
    isVeg: false,
    isSpicy: true
  },
  {
    id: "ni2", 
    name: "Paneer Makhani",
    description: "Rich and creamy cottage cheese curry",
    price: 240,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
    category: "North Indian",
    rating: 4.3,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "ni3",
    name: "Dal Tadka",
    description: "Yellow lentils tempered with spices",
    price: 180,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
    category: "North Indian", 
    rating: 4.2,
    isVeg: true,
    isSpicy: false
  },

  // Chinese
  {
    id: "ch1",
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables and sauces",
    price: 200,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
    category: "Chinese",
    rating: 4.4,
    isVeg: true,
    isSpicy: true
  },
  {
    id: "ch2",
    name: "Manchurian",
    description: "Crispy vegetable balls in tangy sauce",
    price: 220,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d50a?w=400",
    category: "Chinese",
    rating: 4.1,
    isVeg: true,
    isSpicy: true
  },
  {
    id: "ch3",
    name: "Chilli Chicken",
    description: "Spicy chicken with bell peppers and onions",
    price: 260,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400",
    category: "Chinese",
    rating: 4.6,
    isVeg: false,
    isSpicy: true
  },

  // South Indian
  {
    id: "si1",
    name: "Masala Dosa",
    description: "Crispy crepe with spiced potato filling",
    price: 120,
    image: "https://images.unsplash.com/photo-1694842536843-e0e3be1a1ab8?w=400",
    category: "South Indian",
    rating: 4.7,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "si2",
    name: "Idli Sambar",
    description: "Steamed rice cakes with lentil curry",
    price: 100,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400",
    category: "South Indian",
    rating: 4.3,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "si3",
    name: "Chicken Chettinad",
    description: "Spicy South Indian chicken curry",
    price: 300,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    category: "South Indian",
    rating: 4.5,
    isVeg: false,
    isSpicy: true
  },

  // Pizza
  {
    id: "p1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella, and basil",
    price: 350,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400",
    category: "Pizza",
    rating: 4.4,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "p2",
    name: "Pepperoni Pizza",
    description: "Pizza topped with spicy pepperoni slices",
    price: 450,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
    category: "Pizza",
    rating: 4.6,
    isVeg: false,
    isSpicy: true
  },
  {
    id: "p3",
    name: "Veggie Supreme",
    description: "Loaded with fresh vegetables and cheese",
    price: 400,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    category: "Pizza",
    rating: 4.2,
    isVeg: true,
    isSpicy: false
  },

  // Burgers
  {
    id: "b1",
    name: "Classic Chicken Burger",
    description: "Juicy chicken patty with lettuce and mayo",
    price: 250,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    category: "Burger",
    rating: 4.3,
    isVeg: false,
    isSpicy: false
  },
  {
    id: "b2",
    name: "Veg Deluxe Burger",
    description: "Crispy vegetable patty with fresh veggies",
    price: 200,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400",
    category: "Burger",
    rating: 4.1,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "b3",
    name: "Spicy Chicken Burger",
    description: "Fiery chicken burger with jalapeños",
    price: 280,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    category: "Burger",
    rating: 4.5,
    isVeg: false,
    isSpicy: true
  },

  // Biryani
  {
    id: "br1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with tender chicken",
    price: 320,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d50a?w=400",
    category: "Biryani",
    rating: 4.8,
    isVeg: false,
    isSpicy: true
  },
  {
    id: "br2",
    name: "Mutton Biryani",
    description: "Rich and flavorful mutton biryani",
    price: 400,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
    category: "Biryani",
    rating: 4.7,
    isVeg: false,
    isSpicy: true
  },
  {
    id: "br3",
    name: "Veg Biryani",
    description: "Fragrant rice with mixed vegetables",
    price: 250,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
    category: "Biryani",
    rating: 4.2,
    isVeg: true,
    isSpicy: false
  },

  // Desserts
  {
    id: "d1",
    name: "Gulab Jamun",
    description: "Sweet milk dumplings in sugar syrup",
    price: 80,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
    category: "Desserts",
    rating: 4.6,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "d2",
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake slice",
    price: 150,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    category: "Desserts",
    rating: 4.4,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "d3",
    name: "Ice Cream Kulfi",
    description: "Traditional Indian ice cream",
    price: 60,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400",
    category: "Desserts",
    rating: 4.3,
    isVeg: true,
    isSpicy: false
  },

  // Beverages
  {
    id: "bv1",
    name: "Masala Chai",
    description: "Spiced Indian tea with milk",
    price: 40,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
    category: "Beverages",
    rating: 4.5,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "bv2",
    name: "Fresh Lime Soda",
    description: "Refreshing lime drink with soda",
    price: 60,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
    category: "Beverages",
    rating: 4.2,
    isVeg: true,
    isSpicy: false
  },
  {
    id: "bv3",
    name: "Mango Lassi",
    description: "Creamy yogurt drink with mango",
    price: 80,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400",
    category: "Beverages",
    rating: 4.7,
    isVeg: true,
    isSpicy: false
  },

  // Bakery Items
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