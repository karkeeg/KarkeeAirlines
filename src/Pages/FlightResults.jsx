import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBell, FaPlane, FaHotel, FaCar, FaRegCalendarAlt, FaMapMarkerAlt, FaUser, FaStar, FaChevronDown, FaChevronRight, FaPlaneDeparture } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { flights } from '../Datas/FlightData';
import { stays } from '../Datas/hotelData';
import { IoNotifications, IoSettingsSharp } from 'react-icons/io5';
import { MdManageAccounts, MdOutlineLogout } from 'react-icons/md';
import bibek from '../assets/bibek.jpg';
import Header from '../Components/Header';

const FlightResults = () => {
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [activeSort, setActiveSort] = useState('Cheapest');
  const [activeTab, setActiveTab] = useState('flights'); // 'flights' or 'stays'
  const [selectedHotelAmenities, setSelectedHotelAmenities] = useState([]);
  const [expandedFlightId, setExpandedFlightId] = useState(null);
  const [expandedHotelId, setExpandedHotelId] = useState(null);
  
  const toggleAirline = (airline) => {
    setSelectedAirlines((prev) =>
      prev.includes(airline) ? prev.filter((a) => a !== airline) : [...prev, airline]
    );
  };

  const toggleAmenity = (amenity) => {
    setSelectedHotelAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const toggleFlightDetails = (id) => {
    setExpandedFlightId(expandedFlightId === id ? null : id);
  };

  const toggleHotelDetails = (id) => {
    setExpandedHotelId(expandedHotelId === id ? null : id);
  };

  const sortFlights = (flights) => {
    switch (activeSort) {
      case 'Cheapest':
        return [...flights].sort((a, b) => a.price - b.price);
      case 'Quickest':
        return [...flights].sort((a, b) => {
          // Convert duration strings like "2h 30m" to minutes for comparison
          const getDurationMinutes = (dur) => {
            const match = dur.match(/(\d+)h\s*(\d+)m/);
            if (match) {
              return parseInt(match[1]) * 60 + parseInt(match[2]);
            }
            return 0;
          };
          return getDurationMinutes(a.duration) - getDurationMinutes(b.duration);
        });
      case 'Best':
      default:
        // Sort by average rating
        return [...flights].sort((a, b) => {
          const aRating = a.reviews.reduce((sum, r) => sum + r.rating, 0) / a.reviews.length;
          const bRating = b.reviews.reduce((sum, r) => sum + r.rating, 0) / b.reviews.length;
          return bRating - aRating;
        });
    }
  };

  const filteredFlights = flights.filter((flight) =>
    selectedAirlines.length ? selectedAirlines.includes(flight.airline) : true
  );

  const filteredStays = stays.filter((stay) =>
    selectedHotelAmenities.length 
      ? selectedHotelAmenities.some(amenity => stay.amenities.includes(amenity))
      : true
  );

  const sortedFlights = sortFlights(filteredFlights);

  // Helper function to render star ratings
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i < Math.floor(rating) ? "text-warning" : "text-muted"} 
          size={14} 
        />
      );
    }
    return stars;
  };

  // Get all unique amenities
  const allAmenities = [...new Set(stays.flatMap(stay => stay.amenities))];

  return (
    <div className="container-fluid">
  <Header/>

      {/* Tabs */}
      <div className="container mt-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'flights' ? 'active' : ''}`}
              onClick={() => setActiveTab('flights')}
            >
              <FaPlane className="me-2" /> Flights
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'stays' ? 'active' : ''}`}
              onClick={() => setActiveTab('stays')}
            >
              <FaHotel className="me-2" /> Stays
            </button>
          </li>
        </ul>
      </div>

      {/* Search Panel */}
      <div className="container my-4">
        {activeTab === 'flights' && (
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="row g-2 justify-content-center">
                <div className="col-md-3">
                  <div className="input-group">
                    <span className="input-group-text"><FaMapMarkerAlt /></span>
                    <input type="text" className="form-control" placeholder="From - To" defaultValue="Dubai - London" />
                  </div>
                </div>
                <div className="col-md-2">
                  <select className="form-select">
                    <option>Two way</option>
                    <option>One way</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <div className="input-group">
                    <span className="input-group-text"><FaRegCalendarAlt /></span>
                    <input type="text" className="form-control" placeholder="15 Apr - 22 Apr" defaultValue="15 Apr - 22 Apr" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="input-group">
                    <span className="input-group-text"><FaUser /></span>
                    <select className="form-select">
                      <option>1 Passenger, Economy</option>
                      <option>2 Passengers, Economy</option>
                      <option>1 Passenger, Business</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary w-100">Search Flights</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stays' && (
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="row g-2 justify-content-center">
                <div className="col-md-3">
                  <div className="input-group">
                    <span className="input-group-text"><FaMapMarkerAlt /></span>
                    <input type="text" className="form-control" placeholder="Destination or hotel name" defaultValue="Dubai" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-group">
                    <span className="input-group-text"><FaRegCalendarAlt /></span>
                    <input type="text" className="form-control" placeholder="15 Apr - 22 Apr" defaultValue="15 Apr - 22 Apr" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="input-group">
                    <span className="input-group-text"><FaUser /></span>
                    <select className="form-select">
                      <option>2 Adults, 0 Children</option>
                      <option>2 Adults, 1 Child</option>
                      <option>1 Adult, 0 Children</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary w-100">Search Hotels</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Section */}
      <div className="row px-4">
        {/* Filters Sidebar */}
        <aside className="col-lg-3 col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Filters</h5>
              
              {activeTab === 'flights' && (
                <>
                  <div className="mb-3">
                    <strong>Airlines</strong>
                    {['Emirates', 'flydubai', 'Qatar', 'Etihad'].map((airline, idx) => (
                      <div className="form-check" key={idx}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`airline-${idx}`}
                          checked={selectedAirlines.includes(airline)}
                          onChange={() => toggleAirline(airline)}
                        />
                        <label className="form-check-label" htmlFor={`airline-${idx}`}>
                          {airline}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mb-3">
                    <strong>Price Range</strong>
                    <input type="range" className="form-range" min="0" max="500" id="priceRange" />
                    <div className="d-flex justify-content-between">
                      <span>$0</span>
                      <span>$500</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <strong>Departure Time</strong>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="morning" />
                      <label className="form-check-label" htmlFor="morning">
                        Morning (6am - 12pm)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="afternoon" />
                      <label className="form-check-label" htmlFor="afternoon">
                        Afternoon (12pm - 6pm)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="evening" />
                      <label className="form-check-label" htmlFor="evening">
                        Evening (After 6pm)
                      </label>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'stays' && (
                <>
                  <div className="mb-3">
                    <strong>Price Range</strong>
                    <input type="range" className="form-range" min="0" max="500" id="priceRange" />
                    <div className="d-flex justify-content-between">
                      <span>$0</span>
                      <span>$500</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <strong>Star Rating</strong>
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div className="form-check" key={star}>
                        <input className="form-check-input" type="checkbox" id={`star-${star}`} />
                        <label className="form-check-label" htmlFor={`star-${star}`}>
                          {star} Stars
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mb-3">
                    <strong>Amenities</strong>
                    {allAmenities.slice(0, 8).map((amenity, idx) => (
                      <div className="form-check" key={idx}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`amenity-${idx}`}
                          checked={selectedHotelAmenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                        />
                        <label className="form-check-label" htmlFor={`amenity-${idx}`}>
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </aside>

        {/* Results */}
        <main className="col-lg-9 col-md-8">
          {/* Sorting for Flights */}
          {activeTab === 'flights' && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="btn-group mb-2">
                  {['Cheapest', 'Best', 'Quickest'].map((sort) => (
                    <button
                      key={sort}
                      className={`btn ${activeSort === sort ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setActiveSort(sort)}
                    >
                      {sort}
                    </button>
                  ))}
                </div>
                <span className="text-muted">
                  {sortedFlights.length} flights found • {sortedFlights[0]?.from} to {sortedFlights[0]?.to}
                </span>
              </div>

              {/* Flight Cards */}
              {sortedFlights.map((flight) => (
                <div className="card mb-4 shadow-sm" key={flight.id}>
                  <div className="card-body">
                    <div className="row align-items-center">
                      {/* Airline Info */}
                      <div className="col-md-3 d-flex align-items-center gap-3 mb-3 mb-md-0">
                        <img src={flight.logo} alt={flight.airline} height={40} />
                        <div>
                          <h6 className="mb-0">{flight.airline}</h6>
                          <small className="text-muted">Flight {flight.flightNumber} • Terminal {flight.terminal}</small>
                        </div>
                      </div>

                      {/* Time & Duration */}
                      <div className="col-md-4 text-center mb-3 mb-md-0">
                        <div className="fw-semibold">{flight.depart} → {flight.arrive}</div>
                        <small className="text-muted">Non stop • {flight.duration}</small>
                        <div className="text-success mt-1 small">
                          {flight.availableSeats} seats available
                        </div>
                      </div>

                      {/* Extra Info */}
                      <div className="col-md-2 text-center text-muted small">
                        <div>Baggage: {flight.baggage}</div>
                        <div>Seat: {flight.seatType}</div>
                        <div className="d-flex justify-content-center mt-1">
                          {renderStarRating(flight.reviews.reduce((sum, r) => sum + r.rating, 0) / flight.reviews.length)}
                        </div>
                      </div>

                      {/* Price & Button */}
                      <div className="col-md-3 text-center">
                        <h5 className="text-primary mb-1">${flight.price}</h5>
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => toggleFlightDetails(flight.id)}
                        >
                          {expandedFlightId === flight.id ? 'Hide Details' : 'View Details'}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Flight Details */}
                    {expandedFlightId === flight.id && (
                      <div className="mt-4 border-top pt-3">
                        <div className="row">
                          <div className="col-md-4">
                            <h6>Flight Details</h6>
                            <p className="mb-1 small">
                              <strong>From:</strong> {flight.from}
                            </p>
                            <p className="mb-1 small">
                              <strong>To:</strong> {flight.to}
                            </p>
                            <p className="mb-1 small">
                              <strong>Departure:</strong> {flight.departureDate}, {flight.depart}
                            </p>
                            <p className="mb-1 small">
                              <strong>Arrival:</strong> {flight.departureDate}, {flight.arrive}
                            </p>
                            <p className="mb-1 small">
                              <strong>Aircraft:</strong> Boeing 777-300ER
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h6>Amenities</h6>
                            <ul className="list-unstyled">
                              {flight.amenities.map((amenity, idx) => (
                                <li key={idx} className="small">
                                  <FaChevronRight size={10} className="me-1" /> {amenity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h6>Reviews</h6>
                            <div className="small" style={{ maxHeight: '120px', overflowY: 'auto' }}>
                              {flight.reviews.map((review, idx) => (
                                <div key={idx} className="mb-2">
                                  <div className="d-flex align-items-center">
                                    <span className="me-1">{review.rating}</span>
                                    <FaStar className="text-warning" size={12} />
                                    <span className="ms-1 fw-bold">{review.user}</span>
                                  </div>
                                  <p className="mb-0">{review.comment}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          <button className="btn btn-sm btn-outline-primary me-2">Select Seats</button>
                          <button className="btn btn-sm btn-success">Book Now</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Stays */}
          {activeTab === 'stays' && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Available Hotels ({filteredStays.length})</h5>
                <select className="form-select" style={{ width: '200px' }}>
                  <option>Sort by Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>

              {/* Hotel Cards */}
              {filteredStays.map((stay) => (
                <div className="card mb-4 shadow-sm" key={stay.id}>
                  <div className="card-body">
                    <div className="row">
                      {/* Hotel Image */}
                     {/* Hotel Image */}
                     <div className="col-md-3 mb-3 mb-md-0">
                        <img src={stay.image} alt={stay.hotel} className="img-fluid rounded" />
                      </div>

                      {/* Hotel Details */}
                      <div className="col-md-6">
                        <h5 className="mb-1">{stay.hotel}</h5>
                        <div className="mb-2 d-flex align-items-center">
                          <span className="badge bg-success me-2">{stay.rating} ★</span>
                          <small className="text-muted">{stay.totalReviews} reviews</small>
                          <span className="ms-2 badge bg-light text-dark">{stay.distanceFromCenter} from center</span>
                        </div>
                        <p className="mb-1"><FaMapMarkerAlt className="me-1" /> {stay.location}</p>
                        <p className="mb-2 text-muted">{stay.roomType}</p>
                        <div className="d-flex flex-wrap gap-2">
                          {stay.amenities.slice(0, 3).map((amenity, i) => (
                            <span key={i} className="badge bg-light text-dark">{amenity}</span>
                          ))}
                          {stay.amenities.length > 3 && (
                            <span className="badge bg-light text-dark">+{stay.amenities.length - 3} more</span>
                          )}
                        </div>
                      </div>

                      {/* Price & Button */}
                      <div className="col-md-3 text-center d-flex flex-column justify-content-center">
                        <h5 className="text-primary mb-1">${stay.price}</h5>
                        <small className="text-muted mb-2">per night</small>
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => toggleHotelDetails(stay.id)}
                        >
                          {expandedHotelId === stay.id ? 'Hide Details' : 'View Details'}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Hotel Details */}
                    {expandedHotelId === stay.id && (
                      <div className="mt-4 border-top pt-3">
                        <div className="row">
                          <div className="col-md-4">
                            <h6>Hotel Details</h6>
                            <p className="mb-1 small">
                              <strong>Check-in:</strong> {stay.checkIn}
                            </p>
                            <p className="mb-1 small">
                              <strong>Check-out:</strong> {stay.checkOut}
                            </p>
                            <p className="mb-1 small">
                              <strong>Cancellation:</strong> {stay.cancellationPolicy}
                            </p>
                            <h6 className="mt-3">Amenities</h6>
                            <div className="row">
                              {stay.amenities.map((amenity, idx) => (
                                <div key={idx} className="col-6 small mb-1">
                                  <FaChevronRight size={10} className="me-1" /> {amenity}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <h6>Available Rooms</h6>
                            <div className="list-group small">
                              {stay.availableRooms.map((room, idx) => (
                                <div key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                                  <div>
                                    <div className="fw-bold">{room.type}</div>
                                    <div className="text-success">{room.available} rooms left</div>
                                  </div>
                                  <div>
                                    <div className="text-primary fw-bold">${room.price}</div>
                                    <button className="btn btn-sm btn-outline-primary mt-1">Select</button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <h6>Guest Reviews</h6>
                            <div className="small" style={{ maxHeight: '150px', overflowY: 'auto' }}>
                              {stay.reviews.map((review, idx) => (
                                <div key={idx} className="mb-2">
                                  <div className="d-flex align-items-center">
                                    <span className="me-1">{review.rating}</span>
                                    <FaStar className="text-warning" size={12} />
                                    <span className="ms-1 fw-bold">{review.user}</span>
                                  </div>
                                  <p className="mb-0">{review.comment}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          <button className="btn btn-sm btn-outline-primary me-2">View More Details</button>
                          <button className="btn btn-sm btn-success">Book Now</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}

          <div className="text-center mt-4 mb-4">
            <button className="btn btn-dark">Show more results</button>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default FlightResults;