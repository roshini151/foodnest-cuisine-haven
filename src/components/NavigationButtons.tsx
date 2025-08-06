import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Undo2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const NavigationButtons = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if we can go back/forward
    setCanGoBack(window.history.length > 1);
    setCanGoForward(false); // We'll assume forward is not available for simplicity
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      toast({
        title: "Cannot go back",
        description: "No previous page available.",
        variant: "destructive"
      });
    }
  };

  const handleForward = () => {
    window.history.forward();
  };

  const handleUndo = () => {
    // Undo last cart action or clear last search
    const lastAction = localStorage.getItem('foodnest-last-action');
    if (lastAction) {
      const action = JSON.parse(lastAction);
      
      if (action.type === 'cart_add') {
        // Remove last item from cart
        const cart = JSON.parse(localStorage.getItem('foodnest-cart') || '[]');
        const updatedCart = cart.filter((item: any) => item.id !== action.itemId);
        localStorage.setItem('foodnest-cart', JSON.stringify(updatedCart));
        
        toast({
          title: "Action undone",
          description: "Last item removed from cart.",
        });
      } else if (action.type === 'search') {
        // Clear last search
        localStorage.removeItem('foodnest-last-search');
        toast({
          title: "Search cleared",
          description: "Last search has been cleared.",
        });
      }
      
      localStorage.removeItem('foodnest-last-action');
      window.location.reload(); // Refresh to show changes
    } else {
      toast({
        title: "Nothing to undo",
        description: "No recent actions to undo.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 z-40">
      <Button
        variant="outline"
        size="icon"
        onClick={handleBack}
        className="bg-background/90 backdrop-blur-sm border-border shadow-lg hover:bg-muted transition-all"
        title="Go Back"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={handleForward}
        className="bg-background/90 backdrop-blur-sm border-border shadow-lg hover:bg-muted transition-all"
        title="Go Forward"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={handleUndo}
        className="bg-background/90 backdrop-blur-sm border-border shadow-lg hover:bg-muted transition-all"
        title="Undo Last Action"
      >
        <Undo2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default NavigationButtons;