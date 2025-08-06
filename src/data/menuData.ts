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
  isAvailable?: boolean;
  specialTag?: string;
}

export const menuCategories = [
  "All",
  "Breakfast",
  "Meals Combo", 
  "Snacks",
  "Drinks",
  "Ice Creams",
  "Sweets"
];

export const menuItems: MenuItem[] = [
  // Breakfast Items
  {
    id: "b1",
    name: "Idli (4 pieces)",
    description: "Soft, fluffy steamed rice cakes served with sambar and coconut chutney",
    price: 60,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
    category: "Breakfast",
    rating: 4.8,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "b2",
    name: "Masala Dosa",
    description: "Crispy golden crepe with spiced potato filling, served with sambar and chutneys",
    price: 90,
    image: "https://images.unsplash.com/photo-1694842536843-e0e3be1a1ab8?w=400&h=300&fit=crop",
    category: "Breakfast",
    rating: 4.9,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "b3",
    name: "Pongal",
    description: "Comforting rice and lentil dish tempered with ghee, curry leaves and pepper",
    price: 70,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    category: "Breakfast",
    rating: 4.7,
    isVeg: true,
    isSpicy: false,
    isAvailable: true,
    specialTag: "Today's Special"
  },
  {
    id: "b4",
    name: "Poori (4 pieces)",
    description: "Crispy deep-fried wheat bread served with potato curry and pickle",
    price: 80,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
    category: "Breakfast",
    rating: 4.6,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },

  // Meals Combo
  {
    id: "m1",
    name: "South Indian Meals Combo",
    description: "Traditional thali with rice, sambar, rasam, poriyal, curd, pickle, appalam and payasam",
    price: 150,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    category: "Meals Combo",
    rating: 4.9,
    isVeg: true,
    isSpicy: false,
    isAvailable: true,
    specialTag: "Complete Meal"
  },
  {
    id: "m2",
    name: "Special Combo with Payasam",
    description: "Rice, sambar, poriyal, rasam, curd, appalam with special sweet payasam",
    price: 180,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    category: "Meals Combo",
    rating: 4.8,
    isVeg: true,
    isSpicy: false,
    isAvailable: true,
    specialTag: "Today's Special Combo"
  },

  // Snacks
  {
    id: "s1",
    name: "Medu Vada (3 pieces)",
    description: "Crispy lentil donuts served hot with sambar and coconut chutney",
    price: 70,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d50a?w=400&h=300&fit=crop",
    category: "Snacks",
    rating: 4.7,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "s2",
    name: "Masala Vada",
    description: "Spiced lentil fritters with onions, green chillies and curry leaves",
    price: 60,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    category: "Snacks",
    rating: 4.5,
    isVeg: true,
    isSpicy: true,
    isAvailable: false
  },
  {
    id: "s3",
    name: "Bonda (4 pieces)",
    description: "Golden potato fritters with a crispy gram flour coating",
    price: 50,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    category: "Snacks",
    rating: 4.4,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "s4",
    name: "Bajji Mix",
    description: "Assorted vegetable fritters - onion, chilli, potato bajjis",
    price: 80,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
    category: "Snacks",
    rating: 4.6,
    isVeg: true,
    isSpicy: true,
    isAvailable: true
  },
  {
    id: "s5",
    name: "Murukku",
    description: "Traditional crispy rice flour spirals seasoned with cumin and sesame",
    price: 40,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    category: "Snacks",
    rating: 4.3,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },

  // Drinks
  {
    id: "d1",
    name: "Filter Coffee",
    description: "Authentic South Indian filter coffee with rich aroma and perfect froth",
    price: 30,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    category: "Drinks",
    rating: 4.9,
    isVeg: true,
    isSpicy: false,
    isAvailable: true,
    specialTag: "House Special"
  },
  {
    id: "d2",
    name: "Masala Tea",
    description: "Hot spiced tea with cardamom, ginger and fresh milk",
    price: 25,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    category: "Drinks",
    rating: 4.6,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "d3",
    name: "Fresh Buttermilk",
    description: "Cooling yogurt drink with curry leaves, ginger and a pinch of salt",
    price: 35,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop",
    category: "Drinks",
    rating: 4.5,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "d4",
    name: "Fresh Fruit Juice",
    description: "Seasonal fresh fruit juices - orange, pomegranate, sweet lime",
    price: 50,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    category: "Drinks",
    rating: 4.4,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "d5",
    name: "Fresh Milk",
    description: "Pure, creamy fresh milk served hot or cold",
    price: 40,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop",
    category: "Drinks",
    rating: 4.3,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },

  // Ice Creams
  {
    id: "i1",
    name: "Kulfi",
    description: "Traditional Indian ice cream with cardamom and pistachios",
    price: 60,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop",
    category: "Ice Creams",
    rating: 4.7,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "i2",
    name: "Mango Ice Cream",
    description: "Creamy mango ice cream made with fresh Alphonso mangoes",
    price: 70,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    category: "Ice Creams",
    rating: 4.8,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "i3",
    name: "Tender Coconut Ice Cream",
    description: "Refreshing ice cream with fresh tender coconut pieces",
    price: 65,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    category: "Ice Creams",
    rating: 4.6,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "i4",
    name: "Ice Cream Scoops (2 scoops)",
    description: "Choose any two flavors - vanilla, strawberry, chocolate, butterscotch",
    price: 80,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
    category: "Ice Creams",
    rating: 4.5,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },

  // Sweets
  {
    id: "sw1",
    name: "Payasam",
    description: "Traditional sweet pudding with rice, milk, jaggery and cardamom",
    price: 50,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
    category: "Sweets",
    rating: 4.8,
    isVeg: true,
    isSpicy: false,
    isAvailable: true,
    specialTag: "Traditional"
  },
  {
    id: "sw2",
    name: "Mysore Pak",
    description: "Rich, melt-in-mouth sweet made with ghee, gram flour and sugar",
    price: 60,
    image: "https://images.unsplash.com/photo-1555507036-ab794f575c1f?w=400&h=300&fit=crop",
    category: "Sweets",
    rating: 4.7,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "sw3",
    name: "Rava Kesari",
    description: "Semolina sweet colored with saffron, garnished with cashews and raisins",
    price: 45,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    category: "Sweets",
    rating: 4.6,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  },
  {
    id: "sw4",
    name: "Jangiri",
    description: "Crispy, spiral-shaped sweet soaked in sugar syrup",
    price: 55,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop",
    category: "Sweets",
    rating: 4.5,
    isVeg: true,
    isSpicy: false,
    isAvailable: true
  }
];