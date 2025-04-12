export const stays = [
    {
      id: 1,
      hotel: 'Grand Hyatt Hotel',
      image: '/api/placeholder/400/200',
      location: 'Downtown',
      price: 155,
      rating: 4.8,
      reviews: [
        { rating: 5.0, comment: "Luxurious experience with amazing staff", user: "LuxurySeeker" },
        { rating: 4.7, comment: "Beautiful views and excellent service", user: "CityExplorer" },
        { rating: 4.8, comment: "Perfect location for business and leisure", user: "FrequentTraveler" }
      ],
      totalReviews: 245,
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Fitness Center'],
      roomType: 'Deluxe King Room',
      availableRooms: [
        { type: "Deluxe King Room", available: 5, price: 155 },
        { type: "Executive Suite", available: 2, price: 250 },
        { type: "Standard Twin", available: 8, price: 130 }
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      distanceFromCenter: "1.2 km",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in"
    },
    {
      id: 2,
      hotel: 'Hilton Garden',
      image: '/api/placeholder/400/200',
      location: 'Marina Bay',
      price: 120,
      rating: 4.5,
      reviews: [
        { rating: 4.5, comment: "Great value for money and comfortable rooms", user: "SmartTraveler" },
        { rating: 4.6, comment: "Convenient location and friendly staff", user: "BusinessTripper" },
        { rating: 4.3, comment: "Clean rooms and good breakfast", user: "FamilyVacation" }
      ],
      totalReviews: 186,
      amenities: ['Breakfast', 'Gym', 'Free Parking', 'Business Center', 'WiFi'],
      roomType: 'Twin Room',
      availableRooms: [
        { type: "Standard Queen", available: 12, price: 110 },
        { type: "Twin Room", available: 7, price: 120 },
        { type: "King Suite", available: 3, price: 175 }
      ],
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      distanceFromCenter: "2.5 km",
      cancellationPolicy: "Free cancellation up to 48 hours before check-in"
    },
    {
      id: 3,
      hotel: 'Four Seasons Resort',
      image: '/api/placeholder/400/200',
      location: 'Beachfront',
      price: 310,
      rating: 4.9,
      reviews: [
        { rating: 5.0, comment: "Paradise on earth with impeccable service", user: "LuxuryLifestyle" },
        { rating: 4.9, comment: "Worth every penny - best beachfront resort", user: "BeachLover" },
        { rating: 4.8, comment: "Exceptional dining and amenities", user: "FoodieExplorer" }
      ],
      totalReviews: 324,
      amenities: ['Ocean View', 'Restaurant', 'Spa', 'Private Beach', 'Butler Service', 'Multiple Pools'],
      roomType: 'Executive Suite',
      availableRooms: [
        { type: "Ocean View Room", available: 4, price: 275 },
        { type: "Executive Suite", available: 2, price: 310 },
        { type: "Beach Villa", available: 1, price: 450 }
      ],
      checkIn: "4:00 PM",
      checkOut: "12:00 PM",
      distanceFromCenter: "5.7 km",
      cancellationPolicy: "Free cancellation up to 7 days before check-in"
    },
    {
      id: 4,
      hotel: 'Mandarin Oriental',
      image: '/api/placeholder/400/200',
      location: 'City Center',
      price: 189,
      rating: 4.7,
      reviews: [
        { rating: 4.7, comment: "Elegant interiors and attentive staff", user: "StyleConscious" },
        { rating: 4.8, comment: "Excellent city views and prime location", user: "UrbanExplorer" },
        { rating: 4.6, comment: "A perfect blend of luxury and convenience", user: "GlobalTraveler" }
      ],
      totalReviews: 203,
      amenities: ['Rooftop Bar', 'Butler Service', 'WiFi', 'Fine Dining', 'Spa', 'City Views'],
      roomType: 'Premium Room',
      availableRooms: [
        { type: "Deluxe City View", available: 6, price: 189 },
        { type: "Premium Room", available: 8, price: 215 },
        { type: "Oriental Suite", available: 2, price: 380 }
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      distanceFromCenter: "0.5 km",
      cancellationPolicy: "Free cancellation up to 3 days before check-in"
    }
  ];