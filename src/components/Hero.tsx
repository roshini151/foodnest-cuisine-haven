import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
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
          Discover the best
          <span className="block bg-gradient-to-r from-food-secondary to-food-warm bg-clip-text text-transparent">
            food & drinks
          </span>
          in your city
        </h1>
        
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Experience authentic flavors and fresh ingredients delivered right to your doorstep
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-lg p-2 mb-8 max-w-2xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search for restaurants, cuisine, or dishes"
                className="pl-10 border-0 focus-visible:ring-0 text-gray-700 bg-transparent"
              />
            </div>
            <div className="flex-1 relative sm:border-l sm:pl-2">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Enter your location"
                className="pl-10 border-0 focus-visible:ring-0 text-gray-700 bg-transparent"
              />
            </div>
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Search
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-3"
            onClick={() => window.location.href = '/menu'}
          >
            Order Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-food-primary"
            onClick={() => window.location.href = '/reservations'}
          >
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;