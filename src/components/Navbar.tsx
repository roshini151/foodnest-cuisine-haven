import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-food-primary to-food-secondary bg-clip-text text-transparent">
              FoodNest
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-foreground hover:text-food-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/menu" className="text-muted-foreground hover:text-food-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Menu
              </a>
              <a href="/reservations" className="text-muted-foreground hover:text-food-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Reservations
              </a>
              <a href="/about" className="text-muted-foreground hover:text-food-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-food-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="hero">Order Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <a href="/" className="text-foreground hover:text-food-primary block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/menu" className="text-muted-foreground hover:text-food-primary block px-3 py-2 rounded-md text-base font-medium">
              Menu
            </a>
            <a href="/reservations" className="text-muted-foreground hover:text-food-primary block px-3 py-2 rounded-md text-base font-medium">
              Reservations
            </a>
            <a href="/about" className="text-muted-foreground hover:text-food-primary block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-food-primary block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="hero">Order Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;