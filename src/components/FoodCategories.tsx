import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const dishes = [
  {
    name: "Dosa",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop",
    description: "Crispy South Indian crepe"
  },
  {
    name: "Idli", 
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop",
    description: "Soft steamed rice cakes"
  },
  {
    name: "Vada",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop", 
    description: "Crispy lentil donuts"
  },
  {
    name: "Pongal",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop",
    description: "Savory rice and lentil dish"
  },
  {
    name: "Sambar Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
    description: "Rice with spicy lentil curry"
  },
  {
    name: "Filter Coffee",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop",
    description: "Traditional South Indian coffee"
  },
  {
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    description: "Rich chocolate dessert"
  },
  {
    name: "Birthday Cakes",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop",
    description: "Special celebration cakes"
  }
];

const FoodCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/menu?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What's on your mind?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of cuisines and find your perfect meal
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {dishes.map((dish, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-food-primary/30"
              onClick={() => handleCategoryClick(dish.name)}
            >
              <CardContent className="p-3 text-center">
                <div className="w-full h-16 mb-2 rounded-lg overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">
                  {dish.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;