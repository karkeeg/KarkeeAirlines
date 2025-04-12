import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBell, FaPlane, FaClock, FaSuitcase, FaChair, FaHotel, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPlaneDeparture } from 'react-icons/fa';
import { IoNotifications, IoSettingsSharp } from 'react-icons/io5';
import { MdManageAccounts, MdOutlineLogout } from 'react-icons/md';
import bibek from '../assets/bibek.jpg';

const FLIGHTS = [
  {
    id: 'ek-202',
    airline: 'Emirates',
    logo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-1999.jpg',
    depart: '12:00 pm',
    arrive: '06:30 pm',
    duration: '2h 28m',
    durationMinutes: 148,
    price: 104,
    flightNumber: 'EK 202',
    terminal: 'T1',
    baggage: '25kg',
    seatType: 'Economy'
  },
  {
    id: 'fz-158',
    airline: 'flydubai',
    logo: 'https://cdn.freebiesupply.com/logos/thumbs/2x/fly-dubai-1-logo.png',
    depart: '1:00 pm',
    arrive: '07:15 pm',
    duration: '2h 15m',
    durationMinutes: 135,
    price: 99,
    flightNumber: 'FZ 158',
    terminal: 'T2',
    baggage: '20kg',
    seatType: 'Economy'
  },
  {
    id: 'qr-381',
    airline: 'Qatar',
    logo: 'https://e7.pngegg.com/pngimages/934/218/png-clipart-logo-qatar-airways-airline-doha-brand-katar-company-text.png',
    depart: '2:00 pm',
    arrive: '08:30 pm',
    duration: '2h 30m',
    durationMinutes: 150,
    price: 110,
    flightNumber: 'QR 381',
    terminal: 'T1',
    baggage: '30kg',
    seatType: 'Business'
  },
  {
    id: 'ey-402',
    airline: 'Etihad',
    logo: 'https://www.tamratravel.ae/theme/assets/img/clients/Ethihadlogo-01.png',
    depart: '3:00 pm',
    arrive: '09:00 pm',
    duration: '2h 0m',
    durationMinutes: 120,
    price: 120,
    flightNumber: 'EY 402',
    terminal: 'T3',
    baggage: '25kg',
    seatType: 'Economy'
  },
  {
    id: 'ek-306',
    airline: 'Emirates',
    logo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-1999.jpg',
    depart: '4:30 pm',
    arrive: '10:45 pm',
    duration: '2h 15m',
    durationMinutes: 135,
    price: 115,
    flightNumber: 'EK 306',
    terminal: 'T1',
    baggage: '30kg',
    seatType: 'Economy'
  }
];

// Mock data for hotels/stays
const STAYS = [
  {
    id: 'h-001',
    name: 'Grand Hyatt',
    logo: 'https://images.unsplash.com/photo-1606111669778-8da21aac3aba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Downtown',
    rating: 4.8,
    reviews: 342,
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym'],
    price: 210,
    priceUnit: 'night',
    image: "https://images.unsplash.com/photo-1606111669778-8da21aac3aba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
  {
    id: 'h-002',
    name: 'Marina Bay Resort',
    logo: 'https://images.unsplash.com/photo-1698099843370-990862ece606?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Marina District',
    rating: 4.6,
    reviews: 289,
    amenities: ['Free WiFi', 'Beach Access', 'Breakfast Included'],
    price: 175,
    priceUnit: 'night',
    image: "https://images.unsplash.com/photo-1698099843370-990862ece606?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
  {
    id: 'h-003',
    name: 'City Comfort Inn',
    logo: 'https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Business District',
    rating: 4.2,
    reviews: 176,
    amenities: ['Free WiFi', 'Breakfast Available', 'Parking'],
    price: 95,
    priceUnit: 'night',
    image:'https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'h-004',
    name: 'Palm Oasis Hotel',
    logo: 'https://images.unsplash.com/photo-1724681435399-972d668fade0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Palm Islands',
    rating: 4.9,
    reviews: 412,
    amenities: ['Free WiFi', 'Private Beach', 'Pool', 'Spa'],
    price: 320,
    priceUnit: 'night',
    image:'https://images.unsplash.com/photo-1724681435399-972d668fade0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     }
];

// Filter and sort options
const SORT_OPTIONS = {
  CHEAPEST: 'Cheapest',
  BEST: 'Best',
  QUICKEST: 'Quickest'
};

const TRIP_TYPES = ['One way', 'Two way', 'Multi-city'];
const AIRLINES = [...new Set(FLIGHTS.map(flight => flight.airline))];

// Tab options
const TABS = {
  FLIGHTS: 'flights',
  STAYS: 'stays'
};

const FlightCard = ({ flight, onSelect }) => {
  return (
    <div className="card mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="card-body p-4">
        <div className="row align-items-center">
          {/* Airline Info */}
          <div className="col-md-3 d-flex align-items-center gap-3 mb-3 mb-md-0">
            <img 
              src={flight.logo} 
              alt={flight.airline} 
              height={40} 
              className="img-fluid" 
              style={{ maxWidth: '60px', objectFit: 'contain' }}
            />
            <div>
              <h6 className="mb-0 fw-bold">{flight.airline}</h6>
              <small className="text-muted d-flex align-items-center gap-1">
                <span>{flight.flightNumber}</span> • <span>{flight.terminal}</span>
              </small>
            </div>
          </div>

          {/* Time & Duration */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center">
              <span className="fw-semibold fs-5">{flight.depart}</span>
              <div className="mx-2 border-top flex-grow-1" style={{ height: 1 }}></div>
              <FaPlane className="text-primary" />
              <div className="mx-2 border-top flex-grow-1" style={{ height: 1 }}></div>
              <span className="fw-semibold fs-5">{flight.arrive}</span>
            </div>
            <small className="text-muted d-flex align-items-center justify-content-center gap-1 mt-1">
              <span>Non stop</span> • <FaClock size={12} /> <span>{flight.duration}</span>
            </small>
          </div>

          {/* Extra Info */}
          <div className="col-md-2 text-center text-muted small">
            <div className="d-flex align-items-center justify-content-center gap-1 mb-1">
              <FaSuitcase size={12} /> <span>{flight.baggage}</span>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-1">
              <FaChair size={12} /> <span>{flight.seatType}</span>
            </div>
          </div>

          {/* Price & Button */}
          <div className="col-md-3 text-center">
            <h5 className="text-primary mb-2 fw-bold">${flight.price}</h5>
            <button 
              className="btn btn-primary btn-sm w-100" 
              onClick={() => onSelect(flight)}
            >
              Select Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StayCard = ({ stay, onSelect }) => {
  return (
    <div className="card mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="row g-0">
        <div className="col-md-4">
          <img 
            src={stay.image} 
            alt={stay.name} 
            className="img-fluid rounded-start h-80" 
            style={{ objectFit: 'cover' , height : "250px",width:"300px"}}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="card-title fw-bold mb-0">{stay.name}</h5>
              <div className="d-flex align-items-center">
                <span className="badge bg-primary me-2">{stay.rating}</span>
                <small className="text-muted">({stay.reviews} reviews)</small>
              </div>
            </div>
            
            <p className="card-text text-muted mb-3">
              <FaMapMarkerAlt className="me-1" size={14} />
              {stay.location}
            </p>
            
            <div className="mb-3">
              <div className="d-flex flex-wrap gap-2">
                {stay.amenities.map((amenity, index) => (
                  <span key={index} className="badge bg-light text-dark">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <div>
                <h5 className="text-primary fw-bold mb-0">${stay.price}</h5>
                <small className="text-muted">per {stay.priceUnit}</small>
              </div>
              <button 
                className="btn btn-primary" 
                onClick={() => onSelect(stay)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlightSearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    route: '',
    tripType: 'Two way',
    dates: '',
    passengers: '1 Passenger, Economy'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-3 rounded shadow-sm">
      <div className="row g-2 justify-content-center align-items-end">
        <div className="col-md-2">
          <label htmlFor="route" className="form-label small mb-1">Route</label>
          <input 
            type="text" 
            id="route"
            name="route"
            className="form-control" 
            placeholder="From - To" 
            value={searchParams.route}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="tripType" className="form-label small mb-1">Trip Type</label>
          <select 
            className="form-select"
            id="tripType"
            name="tripType"
            value={searchParams.tripType}
            onChange={handleChange}
          >
            {TRIP_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="dates" className="form-label small mb-1">Travel Dates</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaCalendarAlt size={14} />
            </span>
            <input 
              type="text" 
              id="dates"
              name="dates"
              className="form-control" 
              placeholder="07 March - 13 March" 
              value={searchParams.dates}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="passengers" className="form-label small mb-1">Passengers</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaUser size={14} />
            </span>
            <select 
              className="form-select"
              id="passengers"
              name="passengers"
              value={searchParams.passengers}
              onChange={handleChange}
            >
              <option value="1 Passenger, Economy">1 Passenger, Economy</option>
              <option value="2 Passengers, Economy">2 Passengers, Economy</option>
              <option value="1 Passenger, Business">1 Passenger, Business</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
};

const StaySearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults, 0 Children'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-3 rounded shadow-sm">
      <div className="row g-2 justify-content-center align-items-end">
        <div className="col-md-3">
          <label htmlFor="location" className="form-label small mb-1">Destination</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaMapMarkerAlt size={14} />
            </span>
            <input 
              type="text" 
              id="location"
              name="location"
              className="form-control" 
              placeholder="City, Area or Hotel" 
              value={searchParams.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="checkIn" className="form-label small mb-1">Check-in</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaCalendarAlt size={14} />
            </span>
            <input 
              type="text" 
              id="checkIn"
              name="checkIn"
              className="form-control" 
              placeholder="10 Apr 2025" 
              value={searchParams.checkIn}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="checkOut" className="form-label small mb-1">Check-out</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaCalendarAlt size={14} />
            </span>
            <input 
              type="text" 
              id="checkOut"
              name="checkOut"
              className="form-control" 
              placeholder="15 Apr 2025" 
              value={searchParams.checkOut}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="guests" className="form-label small mb-1">Guests</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaUser size={14} />
            </span>
            <select 
              className="form-select"
              id="guests"
              name="guests"
              value={searchParams.guests}
              onChange={handleChange}
            >
              <option value="1 Adult, 0 Children">1 Adult, 0 Children</option>
              <option value="2 Adults, 0 Children">2 Adults, 0 Children</option>
              <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
              <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Search Stays
          </button>
        </div>
      </div>
    </form>
  );
};

const FilterSidebar = ({ activeTab, flightFilters, stayFilters, onToggleAirline, onToggleTripType }) => {
  const { selectedAirlines, selectedTripTypes } = flightFilters;
  const { priceRange, starRating, amenities } = stayFilters;
  
  const resetFlightFilters = () => {
    onToggleAirline('reset');
    onToggleTripType('reset');
  };
  
  if (activeTab === TABS.FLIGHTS) {
    return (
      <aside className="border rounded p-3 shadow-sm bg-white">
        <h5 className="mb-3 fw-bold">Filters</h5>
        
        <div className="mb-4">
          <h6 className="mb-2">Airlines</h6>
          {AIRLINES.map((airline, idx) => (
            <div className="form-check mb-1" key={idx}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`airline-${idx}`}
                checked={selectedAirlines.includes(airline)}
                onChange={() => onToggleAirline(airline)}
              />
              <label className="form-check-label d-flex justify-content-between" htmlFor={`airline-${idx}`}>
                {airline}
                <span className="badge bg-light text-dark">
                  {FLIGHTS.filter(f => f.airline === airline).length}
                </span>
              </label>
            </div>
          ))}
        </div>
        
        <div className="mb-4">
          <h6 className="mb-2">Trip Type</h6>
          {TRIP_TYPES.map((trip, idx) => (
            <div className="form-check mb-1" key={idx}>
              <input 
                className="form-check-input" 
                type="checkbox" 
                id={`trip-${idx}`}
                checked={selectedTripTypes.includes(trip)}
                onChange={() => onToggleTripType(trip)}
              />
              <label className="form-check-label" htmlFor={`trip-${idx}`}>
                {trip}
              </label>
            </div>
          ))}
        </div>
        
        <div className="mb-3">
          <h6 className="mb-2">Price Range</h6>
          <div className="d-flex gap-2 align-items-center mb-2">
            <input type="range" className="form-range" min="50" max="300" step="10" />
          </div>
          <div className="d-flex justify-content-between">
            <span>$50</span>
            <span>$300</span>
          </div>
        </div>
        
        <button 
          className="btn btn-outline-secondary btn-sm w-100 mt-2"
          onClick={resetFlightFilters}
        >
          Reset Filters
        </button>
      </aside>
    );
  } else {
    return (
      <aside className="border rounded p-3 shadow-sm bg-white">
        <h5 className="mb-3 fw-bold">Hotel Filters</h5>
        
        <div className="mb-4">
          <h6 className="mb-2">Price Range</h6>
          <div className="d-flex gap-2 align-items-center mb-2">
            <input 
              type="range" 
              className="form-range" 
              min="50" 
              max="500" 
              step="10" 
              value={priceRange} 
            />
          </div>
          <div className="d-flex justify-content-between">
            <span>$50</span>
            <span>$500</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h6 className="mb-2">Star Rating</h6>
          {[5, 4, 3, 2, 1].map((star) => (
            <div className="form-check mb-1" key={star}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`star-${star}`}
                checked={starRating.includes(star)}
              />
              <label className="form-check-label d-flex justify-content-between" htmlFor={`star-${star}`}>
                {star} Stars
                <span className="badge bg-light text-dark">
                  {STAYS.filter(s => Math.floor(s.rating) === star).length}
                </span>
              </label>
            </div>
          ))}
        </div>
        
        <div className="mb-4">
          <h6 className="mb-2">Amenities</h6>
          {['Free WiFi', 'Pool', 'Breakfast Included', 'Parking', 'Spa'].map((amenity, idx) => (
            <div className="form-check mb-1" key={idx}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`amenity-${idx}`}
                checked={amenities.includes(amenity)}
              />
              <label className="form-check-label" htmlFor={`amenity-${idx}`}>
                {amenity}
              </label>
            </div>
          ))}
        </div>
        
        <button className="btn btn-outline-secondary btn-sm w-100 mt-2">
          Reset Filters
        </button>
      </aside>
    );
  }
};

const NavTabs = ({ activeTab, onTabChange, flightCount, stayCount }) => {
  return (
    <div className="container border-bottom">
      <ul className="nav nav-tabs border-0">
        <li className="nav-item">
          <button 
            className={`nav-link border-0 px-4 py-3 ${activeTab === TABS.FLIGHTS ? 'active text-primary fw-bold border-bottom border-3 border-primary' : 'text-dark'}`} 
            onClick={() => onTabChange(TABS.FLIGHTS)}
          >
            <div className="d-flex align-items-center gap-2">
              <FaPlane />
              <span>Flights</span>
              {flightCount > 0 && <span className="badge bg-primary rounded-pill">{flightCount}</span>}
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link border-0 px-4 py-3 ${activeTab === TABS.STAYS ? 'active text-primary fw-bold border-bottom border-3 border-primary' : 'text-dark'}`} 
            onClick={() => onTabChange(TABS.STAYS)}
          >
            <div className="d-flex align-items-center gap-2">
              <FaHotel />
              <span>Stays</span>
              {stayCount > 0 && <span className="badge bg-primary rounded-pill">{stayCount}</span>}
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

const FlightResults = () => {
  // Current active tab
  const [activeTab, setActiveTab] = useState(TABS.FLIGHTS);
  
  // Flight state
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedTripTypes, setSelectedTripTypes] = useState(['Two way']);
  const [activeSort, setActiveSort] = useState(SORT_OPTIONS.CHEAPEST);
  const [flightSearchCriteria, setFlightSearchCriteria] = useState({});
  const [selectedFlight, setSelectedFlight] = useState(null);
  
  // Stay state
  const [priceRange, setPriceRange] = useState(300);
  const [starRating, setStarRating] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [staySearchCriteria, setStaySearchCriteria] = useState({});
  const [selectedStay, setSelectedStay] = useState(null);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Flight handlers
  const toggleAirline = (airline) => {
    if (airline === 'reset') {
      setSelectedAirlines([]);
      return;
    }
    
    setSelectedAirlines((prev) =>
      prev.includes(airline) ? prev.filter((a) => a !== airline) : [...prev, airline]
    );
  };
    
  const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
      const closeDropdown = (e) => {
        if (!e.target.closest(".profile-container")) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", closeDropdown);
      return () => document.removeEventListener("click", closeDropdown);
    }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleTripType = (tripType) => {
    if (tripType === 'reset') {
      setSelectedTripTypes(['Two way']);
      return;
    }
    
    setSelectedTripTypes((prev) =>
      prev.includes(tripType) ? prev.filter((t) => t !== tripType) : [...prev, tripType]
    );
  };

  const handleFlightSearch = (params) => {
    setFlightSearchCriteria(params);
    console.log("Flight search with params:", params);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    console.log("Selected flight:", flight);
  };

  // Stay handlers
  const handleStaySearch = (params) => {
    setStaySearchCriteria(params);
    console.log("Stay search with params:", params);
  };

  const handleSelectStay = (stay) => {
    setSelectedStay(stay);
    console.log("Selected stay:", stay);
  };

  // Filtered and sorted flights
  const filteredFlights = useMemo(() => {
    return FLIGHTS.filter((flight) => {
      const airlineMatch = selectedAirlines.length === 0 || selectedAirlines.includes(flight.airline);
      return airlineMatch;
    });
  }, [selectedAirlines, flightSearchCriteria]);

  const sortedFlights = useMemo(() => {
    switch (activeSort) {
      case SORT_OPTIONS.CHEAPEST:
        return [...filteredFlights].sort((a, b) => a.price - b.price);
      case SORT_OPTIONS.QUICKEST:
        return [...filteredFlights].sort((a, b) => a.durationMinutes - b.durationMinutes);
      case SORT_OPTIONS.BEST:
      default:
        return [...filteredFlights].sort((a, b) => (a.price * 0.7 + a.durationMinutes * 0.3) - (b.price * 0.7 + b.durationMinutes * 0.3));
    }
  }, [filteredFlights, activeSort]);

  // Filtered stays
  const filteredStays = useMemo(() => {
    return STAYS.filter(stay => {
      // In a real app, would apply more filtering based on staySearchCriteria, priceRange, starRating, etc.
      return true;
    });
  }, [staySearchCriteria, priceRange, starRating, amenities]);

  return (
    <div className="container-fluid">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center py-3 px-4 border-bottom bg-white shadow-sm sticky-top">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src="https://th.bing.com/th/id/R.c580bd2877328e8ec44ddc452ec421ec?rik=yVRPUxk1wKJrSg&pid=ImgRaw&r=0"
            alt="KarkeeAirway Logo"
            height="40"
            className="me-2"
          />
          <span className="fs-4 fw-bold text-primary">KarkeeAirway</span>
        </Link>
       <div className="d-flex align-items-center">
              {/* Notification Button */}
              <button className="btn notification-btn position-relative me-3">
                <IoNotifications className="fs-3" />
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                  3 {/* Example: Number of notifications */}
                </span>
              </button>

              {/* Profile Dropdown */}
              <div className="profile-container position-relative">
                {/* Profile Image (Clickable) */}
                <img
                  src={bibek}
                  alt="Profile"
                  className="profile-img rounded-circle"
                  onClick={toggleDropdown} // Toggle dropdown on click
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                />

                Dropdown Menu
                {isOpen && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2 " style={{width:"10px"}}>
                    <Link to="/profile" className="dropdown-item flex align-items-center"><MdManageAccounts className='fs-5'/> Profile</Link>
                    <Link to="/settings" className="dropdown-item flex align-items-center"><FaPlaneDeparture className='fs-5'/> My Trips</Link>
                    <Link to="/settings" className="dropdown-item flex align-items-center"> <IoSettingsSharp className='fs-5'/>  Settings</Link>
                    <button className="dropdown-item text-danger flex align-items-center" onClick={handleLogout}><MdOutlineLogout className='fs-5'/> Logout</button>
                  </div>
                )}
              </div>
            </div>
      </header>

      {/* Nav Tabs */}
      <NavTabs 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        flightCount={filteredFlights.length}
        stayCount={filteredStays.length}
      />

      {/* Search Panel */}
      <div className="container my-4">
        {activeTab === TABS.FLIGHTS ? (
          <FlightSearchBar onSearch={handleFlightSearch} />
        ) : (
          <StaySearchBar onSearch={handleStaySearch} />
        )}
      </div>

      {/* Main Section */}
      <div className="container mb-5">
        <div className="row g-4">
          {/* Filters Sidebar */}
          <div className="col-lg-3 col-md-4">
            <FilterSidebar 
              activeTab={activeTab}
              flightFilters={{ selectedAirlines, selectedTripTypes }}
              stayFilters={{ priceRange, starRating, amenities }}
              onToggleAirline={toggleAirline}
              onToggleTripType={toggleTripType}
            />
          </div>

          {/* Results Area */}
          <div className="col-lg-9 col-md-8">
            {activeTab === TABS.FLIGHTS ? (
              <>
                {/* Flight Results Summary */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                
                  <h5 className="mb-0">
                  {sortedFlights.length} {sortedFlights.length === 1 ? 'flight' : 'flights'} found
                </h5>
                <div className="text-muted small">Updated just now</div>
              </div>
              
              {/* Flight Sorting Tabs */}
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
                <div className="btn-group">
                  {Object.values(SORT_OPTIONS).map((sort) => (
                    <button
                      key={sort}
                      className={`btn ${activeSort === sort ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setActiveSort(sort)}
                    >
                      {sort}
                    </button>
                  ))}
                </div>
                
                <select className="form-select" style={{ width: '180px' }}>
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Duration: Shortest</option>
                  <option>Airlines A-Z</option>
                </select>
              </div>

              {/* Flight Cards */}
              {sortedFlights.length > 0 ? (
                <>
                  {sortedFlights.map((flight) => (
                    <FlightCard 
                      key={flight.id} 
                      flight={flight} 
                      onSelect={handleSelectFlight}
                    />
                  ))}

                  {sortedFlights.length > 3 && (
                    <div className="text-center mt-4">
                      <button className="btn btn-outline-primary px-4">
                        Show more flights
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center p-5 bg-light rounded">
                  <div className="text-muted mb-3">No flights match your current filters</div>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => setSelectedAirlines([])}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Stay Results Summary */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">
                  {filteredStays.length} {filteredStays.length === 1 ? 'property' : 'properties'} found
                </h5>
                <div className="text-muted small">Updated just now</div>
              </div>
              
              {/* Stay Sorting Options */}
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
                <div className="btn-group">
                  <button className="btn btn-primary">Recommended</button>
                  <button className="btn btn-outline-primary">Price</button>
                  <button className="btn btn-outline-primary">Rating</button>
                </div>
                
                <select className="form-select" style={{ width: '180px' }}>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>

              {/* Stay Cards */}
              {filteredStays.length > 0 ? (
                <>
                  {filteredStays.map((stay) => (
                    <StayCard
                      key={stay.id}
                      stay={stay}
                      onSelect={handleSelectStay}
                    />
                  ))}

                  {filteredStays.length > 3 && (
                    <div className="text-center mt-4">
                      <button className="btn btn-outline-primary px-4">
                        Show more properties
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center p-5 bg-light rounded">
                  <div className="text-muted mb-3">No properties match your current filters</div>
                  <button className="btn btn-outline-primary">
                    Reset Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
    
    {/* Selected Item Alert */}
    {selectedFlight && (
      <div className="alert alert-success alert-dismissible fade show position-fixed bottom-0 end-0 m-3" role="alert">
        <strong>Flight selected!</strong> You chose {selectedFlight.airline} flight {selectedFlight.flightNumber}.
        <button 
          type="button" 
          className="btn-close" 
          onClick={() => setSelectedFlight(null)}
          aria-label="Close"
        ></button>
      </div>
    )}
    
    {selectedStay && (
      <div className="alert alert-success alert-dismissible fade show position-fixed bottom-0 end-0 m-3" role="alert">
        <strong>Property selected!</strong> You chose {selectedStay.name} in {selectedStay.location}.
        <button 
          type="button" 
          className="btn-close" 
          onClick={() => setSelectedStay(null)}
          aria-label="Close"
        ></button>
      </div>
    )}
  </div>
);
};

export default FlightResults;