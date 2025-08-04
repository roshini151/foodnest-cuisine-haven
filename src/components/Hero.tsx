import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (searchQuery || location) {
      alert(`Searching for: ${searchQuery || 'all items'} ${location ? `in ${location}` : ''}`);
    } else {
      alert("Please enter a search term or location");
    }
  };

  const handleOrderNow = () => {
    alert("Ordering feature coming soon!");
  };

  const handleBookTable = () => {
    alert("Booking feature coming soon!");
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Experience authentic flavors
            <span className="block bg-gradient-to-r from-food-secondary to-food-warm bg-clip-text text-transparent">
              and fresh ingredients
            </span>
            delivered right to your doorstep
          </h1>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 mb-8 max-w-2xl mx-auto shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search for dishes or restaurants"
                  className="pl-10 border-0 focus-visible:ring-0 text-gray-700 bg-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 relative sm:border-l sm:pl-2">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Enter your location"
                  className="pl-10 border-0 focus-visible:ring-0 text-gray-700 bg-transparent"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={handleSearch}
            >
              Search
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={handleOrderNow}
            >
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-food-primary"
              onClick={handleBookTable}
            >
              Book a Table
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Items
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular South Indian delicacies and fresh cakes
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