import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const dishes = [
  {
    name: "Breakfast",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop",
    description: "Fresh idli, dosa, pongal"
  },
  {
    name: "Meals Combo", 
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop",
    description: "Traditional thali meals"
  },
  {
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d50a?w=300&h=200&fit=crop", 
    description: "Vada, bonda, bajji"
  },
  {
    name: "Drinks",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop",
    description: "Filter coffee, tea, juices"
  },
  {
    name: "Ice Creams",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&h=200&fit=crop",
    description: "Kulfi, fruit flavors"
  },
  {
    name: "Sweets",
    image: "https://images.unsplash.com/photo-1555507036-ab794f575c1f?w=300&h=200&fit=crop",
    description: "Payasam, mysore pak"
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
            Authentic South Indian meals and treats made with love daily
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
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