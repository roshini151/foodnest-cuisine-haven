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
      try {
        const action = JSON.parse(lastAction);
        
        if (action.type === 'cart_add' || action.type === 'cart_remove' || action.type === 'cart_clear') {
          // Restore previous cart state
          if (action.previousState) {
            localStorage.setItem('foodnest-cart', JSON.stringify(action.previousState));
            toast({
              title: "Action undone",
              description: "Cart restored to previous state.",
            });
          }
        } else if (action.type === 'search') {
          // Clear last search
          localStorage.removeItem('foodnest-last-search');
          toast({
            title: "Search cleared",
            description: "Last search has been cleared.",
          });
        } else if (action.type === 'reservation') {
          // Remove last reservation
          const reservations = JSON.parse(localStorage.getItem('foodnest-reservations') || '[]');
          if (reservations.length > 0) {
            reservations.pop(); // Remove last reservation
            localStorage.setItem('foodnest-reservations', JSON.stringify(reservations));
            toast({
              title: "Reservation cancelled",
              description: "Last reservation has been cancelled.",
            });
          }
        }
        
        localStorage.removeItem('foodnest-last-action');
        window.location.reload(); // Refresh to show changes
      } catch (error) {
        toast({
          title: "Error",
          description: "Could not undo last action.",
          variant: "destructive"
        });
      }
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