import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";
import { useState } from "react";

const featuredItems = [
  {
    name: "Dosa",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop"
  },
  {
    name: "Idli",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop"
  },
  {
    name: "Vada",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop"
  },
  {
    name: "Filter Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop"
  },
  {
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop"
  },
  {
    name: "Birthday Cake",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop"
  }
];

const Hero = () => {
  const [selectedBranch, setSelectedBranch] = useState("Chennai");
  
  const branches = ["Chennai", "Madurai", "Coimbatore", "Hyderabad", "Bangalore"];

  const handleOrderNow = () => {
    alert(`Order Now from ${selectedBranch} branch - Your Favorite Tiffin, Just a Tap Away!`);
  };

  const handleDineIn = () => {
    alert(`Dine-In Info for ${selectedBranch} branch - Meals Made with Love. Memories Served Daily.`);
  };

  return (
    <div>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Delicious food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-food-secondary mb-2">Hot & Homely Across South India</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Authentic South Indian Meals
              <span className="block bg-gradient-to-r from-food-secondary to-food-warm bg-clip-text text-transparent">
                Served Fresh Daily
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-6">Feel at Home, Wherever You Are in South India</p>
          </div>

          {/* Branch Selection */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl mb-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Choose Your Branch</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    selectedBranch === branch
                      ? 'bg-food-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={handleOrderNow}
            >
              <Utensils className="w-5 h-5 mr-2" />
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-food-primary"
              onClick={handleDineIn}
            >
              <Coffee className="w-5 h-5 mr-2" />
              Dine-In Info
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What's Cooking Today?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fresh tea, crispy dosa, hearty pongal, aromatic filter coffee, and sweet treats
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {featuredItems.map((item, index) => (
              <Card 
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-3 text-center">
                  <div className="w-full h-20 mb-3 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {item.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;