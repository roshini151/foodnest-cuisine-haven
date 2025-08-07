import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, MapPin, Clock, Users } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import NavigationButtons from '@/components/NavigationButtons';

const branches = [
  { id: 'chennai', name: 'Chennai Branch', address: 'T. Nagar, Chennai, Tamil Nadu' },
  { id: 'madurai', name: 'Madurai Branch', address: 'Anna Nagar, Madurai, Tamil Nadu' },
  { id: 'coimbatore', name: 'Coimbatore Branch', address: 'RS Puram, Coimbatore, Tamil Nadu' },
  { id: 'hyderabad', name: 'Hyderabad Branch', address: 'Banjara Hills, Hyderabad, Telangana' },
  { id: 'bangalore', name: 'Bangalore Branch', address: 'Koramangala, Bangalore, Karnataka' }
];

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
];

const Reservations = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to make a reservation.",
        variant: "destructive"
      });
      navigate('/auth');
      return;
    }

    if (!selectedBranch || !selectedDate || !selectedTime || !guestCount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate reservation booking
    const reservationData = {
      id: Date.now().toString(),
      userId: user?.id,
      branch: selectedBranch,
      date: selectedDate,
      time: selectedTime,
      guests: guestCount,
      specialRequests
    };

    // Save to localStorage
    const reservations = JSON.parse(localStorage.getItem('foodnest-reservations') || '[]');
    reservations.push(reservationData);
    localStorage.setItem('foodnest-reservations', JSON.stringify(reservations));

    // Save last action for undo functionality
    localStorage.setItem('foodnest-last-action', JSON.stringify({
      type: 'reservation',
      timestamp: Date.now(),
      reservationId: reservationData.id
    }));

    toast({
      title: "Reservation Confirmed!",
      description: `Your table for ${guestCount} guests has been booked for ${format(selectedDate, 'PPP')} at ${selectedTime}.`,
    });

    // Reset form
    setSelectedBranch('');
    setSelectedDate(undefined);
    setSelectedTime('');
    setGuestCount('');
    setSpecialRequests('');
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Table Reservation - FoodNest</h1>
          <p className="text-lg text-muted-foreground">
            Book a table at your preferred FoodNest location across South India
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-food-primary text-white text-sm px-4 py-2">
              🪑 Book Your Table • Available Across 5 Branches
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Make Reservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReservation} className="space-y-6">
                {/* Branch Selection */}
                <div className="space-y-2">
                  <Label htmlFor="branch">Select Branch</Label>
                  <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch.id} value={branch.id}>
                          {branch.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label>Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          <div>
                            <span>{format(selectedDate, "PPP")}</span>
                            <span className="text-xs text-muted-foreground ml-2">
                              ({format(selectedDate, "EEEE")})
                            </span>
                          </div>
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <Label htmlFor="time">Select Time</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Guest Count */}
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select value={guestCount} onValueChange={setGuestCount}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select guest count" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests (Optional)</Label>
                  <Input
                    id="requests"
                    placeholder="Any special requirements..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Confirm Reservation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Branch Locations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Locations</h2>
            {branches.map((branch) => (
              <Card key={branch.id} className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg",
                selectedBranch === branch.id && "ring-2 ring-food-primary"
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-food-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">{branch.name}</h3>
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>11 AM - 11 PM</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>Max 10 guests</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <NavigationButtons />
    </div>
  );
};

export default Reservations;