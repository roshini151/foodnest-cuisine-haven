import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "North Indian",
    image: "🍛",
    description: "Rich curries & breads"
  },
  {
    name: "Chinese", 
    image: "🥢",
    description: "Stir-fry & noodles"
  },
  {
    name: "South Indian",
    image: "🫓",
    description: "Dosas & traditional"
  },
  {
    name: "Pizza",
    image: "🍕", 
    description: "Italian classics"
  },
  {
    name: "Burger",
    image: "🍔",
    description: "Juicy & delicious"
  },
  {
    name: "Desserts",
    image: "🍰",
    description: "Sweet treats"
  },
  {
    name: "Beverages",
    image: "🥤",
    description: "Fresh drinks"
  },
  {
    name: "Biryani",
    image: "🍚",
    description: "Aromatic rice dishes"
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
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-food-primary/30"
              onClick={() => handleCategoryClick(category.name)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {category.image}
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.description}
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