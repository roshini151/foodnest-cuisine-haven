import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Plus, Leaf, Flame } from 'lucide-react';
import { menuItems, menuCategories } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import NavigationButtons from '@/components/NavigationButtons';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Live Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh South Indian meals, snacks, and sweets made with love daily
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-food-primary text-white text-sm px-4 py-2">
              Today's Special Combo: ₹100–200 meals with Payasam included
            </Badge>
          </div>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2 flex gap-1">
                          {item.isVeg && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              <Leaf className="w-3 h-3 mr-1" />
                              Veg
                            </Badge>
                          )}
                          {item.isSpicy && (
                            <Badge variant="secondary" className="bg-red-100 text-red-800">
                              <Flame className="w-3 h-3 mr-1" />
                              Spicy
                            </Badge>
                          )}
                          {item.specialTag && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              {item.specialTag}
                            </Badge>
                          )}
                          {item.isAvailable === false && (
                            <Badge variant="destructive" className="bg-red-500 text-white">
                              Sold Out ❌
                            </Badge>
                          )}
                          {item.isAvailable !== false && (
                            <Badge variant="secondary" className="bg-green-500 text-white">
                              Available ✅
                            </Badge>
                          )}
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            {item.rating}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-foreground mb-2">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-food-primary">
                            ₹{item.price}
                          </span>
                          <Button 
                            variant="hero" 
                            size="sm"
                            onClick={() => handleAddToCart(item)}
                            className="group-hover:scale-105 transition-transform"
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <NavigationButtons />
    </div>
  );
};

export default Menu;