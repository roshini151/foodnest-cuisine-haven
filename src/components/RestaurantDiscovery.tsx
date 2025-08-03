import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Star, Clock, Phone, BookOpen } from 'lucide-react';
import { restaurants, cities, cuisineTypes, filterOptions, Restaurant } from '@/data/restaurantData';

const RestaurantDiscovery = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("dining");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      // City filter
      if (restaurant.city !== selectedCity) return false;
      
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !restaurant.name.toLowerCase().includes(query) &&
          !restaurant.cuisine.some(c => c.toLowerCase().includes(query)) &&
          !restaurant.speciality.toLowerCase().includes(query)
        ) return false;
      }
      
      // Cuisine filter
      if (selectedCuisine !== "All" && !restaurant.cuisine.includes(selectedCuisine)) {
        return false;
      }
      
      // Active filters
      if (activeFilters.includes("rating") && restaurant.rating < 4.0) return false;
      if (activeFilters.includes("open") && !restaurant.isOpen) return false;
      
      return true;
    });
  }, [selectedCity, searchQuery, selectedCuisine, activeFilters]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const handleBookTable = (restaurant: Restaurant) => {
    alert(`Booking table at ${restaurant.name}. You will be redirected to reservation page.`);
  };

  const handleCallNow = (restaurant: Restaurant) => {
    alert(`Calling ${restaurant.name} at ${restaurant.phone}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navbar */}
      <div className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-food-primary">FoodNest</h1>
              
              {/* City Dropdown */}
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-36">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border">
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for restaurants, cuisines, or dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Service Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="dining">Dining Out</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
            <TabsTrigger value="nightlife">Nightlife</TabsTrigger>
          </TabsList>


          {/* Filters */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-3 mb-4">
              {/* Cuisine Filter */}
              <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border">
                  {cuisineTypes.map((cuisine) => (
                    <SelectItem key={cuisine} value={cuisine}>{cuisine}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Filter Buttons */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {filterOptions.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilters.includes(filter.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(filter.id)}
                    className="whitespace-nowrap"
                  >
                    <span className="mr-1">{filter.icon}</span>
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Active Filters Display */}
            {activeFilters.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {activeFilters.map((filterId) => {
                  const filter = filterOptions.find(f => f.id === filterId);
                  return (
                    <Badge key={filterId} variant="secondary" className="cursor-pointer" onClick={() => toggleFilter(filterId)}>
                      {filter?.label} ✕
                    </Badge>
                  );
                })}
                <Button variant="ghost" size="sm" onClick={() => setActiveFilters([])}>
                  Clear all
                </Button>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-muted-foreground">
              {filteredRestaurants.length} restaurants found in {selectedCity}
            </p>
          </div>

          {/* Restaurant Grid */}
          <TabsContent value={selectedTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={restaurant.isOpen ? "default" : "destructive"}>
                      {restaurant.isOpen ? "Open" : "Closed"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {restaurant.deliveryTime}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    {/* Restaurant Name & Rating */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-food-primary text-primary-foreground px-2 py-1 rounded text-sm">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                    </div>

                    {/* Cuisine & Price */}
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground text-sm">
                        {restaurant.cuisine.join(", ")}
                      </p>
                      <span className="font-semibold text-food-primary">{restaurant.priceRange}</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="h-3 w-3" />
                      <span className="line-clamp-1">{restaurant.address}</span>
                    </div>

                    {/* Reviews & Distance */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{restaurant.reviews} reviews</span>
                      <span className="text-muted-foreground">{restaurant.distance}</span>
                    </div>

                    {/* Speciality */}
                    <p className="text-xs text-muted-foreground italic line-clamp-1">
                      Famous for: {restaurant.speciality}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      {restaurant.hasTableBooking && (
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleBookTable(restaurant)}
                        >
                          <BookOpen className="h-3 w-3 mr-1" />
                          Book Table
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleCallNow(restaurant)}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No restaurants found matching your criteria</p>
              <Button variant="outline" onClick={() => {
                setSearchQuery("");
                setActiveFilters([]);
                setSelectedCuisine("All");
              }}>
                Clear all filters
              </Button>
            </div>
          )}
        </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RestaurantDiscovery;