import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FoodCategories from "@/components/FoodCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FoodCategories />
      <Footer />
    </div>
  );
};

export default Index;
