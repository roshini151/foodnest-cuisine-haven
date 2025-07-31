import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-food-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-food-secondary to-food-warm bg-clip-text text-transparent">
              FoodNest
            </h3>
            <p className="text-gray-300">
              Discover the best food & drinks in your city. Fresh ingredients, authentic flavors, delivered with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-food-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-food-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-food-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-food-secondary transition-colors">Home</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-food-secondary transition-colors">Menu</a></li>
              <li><a href="/reservations" className="text-gray-300 hover:text-food-secondary transition-colors">Reservations</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-food-secondary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-food-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-food-secondary transition-colors">Online Ordering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-food-secondary transition-colors">Table Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-food-secondary transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-food-secondary transition-colors">Private Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-food-secondary transition-colors">Corporate Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-food-secondary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-food-secondary" />
                <span className="text-gray-300">info@foodnest.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-food-secondary" />
                <span className="text-gray-300">123 Food Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 FoodNest. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;