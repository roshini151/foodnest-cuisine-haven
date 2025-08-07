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
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [notifyItem, setNotifyItem] = useState<string>('');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const branches = ['All', 'Chennai', 'Madurai', 'Coimbatore', 'Hyderabad', 'Bangalore'];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const branchMatch = selectedBranch === 'All' || true; // All items available in all branches for demo
    return categoryMatch && branchMatch;
  });

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

  const handleNotifyMe = (itemName: string) => {
    setNotifyItem(itemName);
    setShowNotifyModal(true);
    setTimeout(() => {
      setShowNotifyModal(false);
      toast({
        title: "Thanks! We'll notify you",
        description: `You'll be notified when ${itemName} is available again.`,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Live Menu - FoodNest</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh South Indian meals, snacks, and sweets made with love daily
          </p>
          <div className="mt-4 space-y-2">
            <Badge variant="secondary" className="bg-food-primary text-white text-sm px-4 py-2 mr-2">
              Today's Special Combo: ₹100–200 meals with Payasam included
            </Badge>
            <Badge variant="secondary" className="bg-food-secondary text-white text-sm px-4 py-2">
              👨‍🍳 Festival Special Available
            </Badge>
          </div>
          
          {/* Branch Filter */}
          <div className="mt-6 flex justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2">Select Branch:</span>
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    selectedBranch === branch
                      ? 'bg-food-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-food-primary/20'
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>
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
                              🌱 Veg
                            </Badge>
                          )}
                          {!item.isVeg && (
                            <Badge variant="secondary" className="bg-red-100 text-red-800">
                              🍗 Non-Veg
                            </Badge>
                          )}
                          {item.isSpicy && (
                            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                              🌶️ Spicy Pick
                            </Badge>
                          )}
                          {item.specialTag && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              👨‍🍳 {item.specialTag}
                            </Badge>
                          )}
                          {Math.random() > 0.7 && (
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                              🔥 Most Ordered Today
                            </Badge>
                          )}
                          {item.isAvailable === false && (
                            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                              😴 Resting Today
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
                          <div>
                            <span className="text-xl font-bold text-food-primary">
                              ₹{item.price}
                            </span>
                            <div className="text-xs text-muted-foreground mt-1">
                              ⭐ {item.rating}/5 • 🔥 {Math.floor(Math.random() * 200) + 50} cal
                            </div>
                          </div>
                          {item.isAvailable === false ? (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleNotifyMe(item.name)}
                              className="text-orange-600 border-orange-300 hover:bg-orange-50"
                            >
                              🔔 Notify Me
                            </Button>
                          ) : (
                            <Button 
                              variant="hero" 
                              size="sm"
                              onClick={() => handleAddToCart(item)}
                              className="group-hover:scale-105 transition-transform"
                            >
                              <Plus className="w-4 h-4 mr-1" />
                              Add to Cart
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Weekly Meal Planner */}
        <div className="mt-12 bg-muted/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">📅 Weekly Meal Planner</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="bg-background rounded-lg p-3 text-center border border-border hover:border-food-primary transition-colors cursor-pointer">
                <div className="font-semibold text-foreground">{day}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {index % 2 === 0 ? '🍛 Combo Special' : '🥘 Meal Plan'}
                </div>
                <div className="text-sm text-food-primary mt-1">₹{150 + index * 10}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Notify Modal */}
        {showNotifyModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background rounded-lg p-6 max-w-sm mx-4 text-center">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We'll notify you when <strong>{notifyItem}</strong> is available again.
              </p>
            </div>
          </div>
        )}
      </div>
      <NavigationButtons />
    </div>
  );
};

export default Menu;