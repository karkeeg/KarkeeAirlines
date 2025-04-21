import React, { useState } from "react";
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaStar,
  FaChevronRight,
} from "react-icons/fa";
import { stays } from "../Datas/hotelData";

const StaySearch = () => {
  const [selectedHotelAmenities, setSelectedHotelAmenities] = useState([]);
  const [expandedHotelId, setExpandedHotelId] = useState(null);
  const [sortBy, setSortBy] = useState("Recommended");

  const toggleAmenity = (amenity) => {
    setSelectedHotelAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const toggleHotelDetails = (id) => {
    setExpandedHotelId(expandedHotelId === id ? null : id);
  };

  const filteredStays = stays.filter((stay) =>
    selectedHotelAmenities.length
      ? selectedHotelAmenities.some((amenity) =>
          stay.amenities.includes(amenity)
        )
      : true
  );

  // Get all unique amenities
  const allAmenities = [...new Set(stays.flatMap((stay) => stay.amenities))];

  // Sort hotels based on selected sort option
  const sortStays = (stays) => {
    switch (sortBy) {
      case "Price: Low to High":
        return [...stays].sort((a, b) => a.price - b.price);
      case "Price: High to Low":
        return [...stays].sort((a, b) => b.price - a.price);
      case "Rating":
        return [...stays].sort((a, b) => b.rating - a.rating);
      case "Recommended":
      default:
        // This would typically be your default server-side sort
        return stays;
    }
  };

  const sortedStays = sortStays(filteredStays);

  return (
    <>
      {/* Search Panel */}
      <div className="container my-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row g-2 justify-content-center">
              <div className="col-md-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaMapMarkerAlt />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Destination or hotel name"
                    defaultValue="Dubai"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaRegCalendarAlt />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="15 Apr - 22 Apr"
                    defaultValue="15 Apr - 22 Apr"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
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
      </div>

      {/* Main Section */}
      <div className="row px-4">
        {/* Filters Sidebar */}
        <aside className="col-lg-3 col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Filters</h5>
              <div className="mb-3">
                <strong>Price Range</strong>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="500"
                  id="priceRange"
                />
                <div className="d-flex justify-content-between">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>
              <div className="mb-3">
                <strong>Star Rating</strong>
                {[5, 4, 3, 2, 1].map((star) => (
                  <div className="form-check" key={star}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`star-${star}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`star-${star}`}
                    >
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
                    <label
                      className="form-check-label"
                      htmlFor={`amenity-${idx}`}
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Results */}
        <main className="col-lg-9 col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5>Available Hotels ({filteredStays.length})</h5>
            <select
              className="form-select"
              style={{ width: "200px" }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Sort by Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

          {/* Hotel Cards */}
          {sortedStays.map((stay) => (
            <div className="card mb-4 shadow-sm" key={stay.id}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 mb-3 mb-md-0">
                    <img
                      src={stay.image}
                      alt={stay.hotel}
                      className="img-fluid rounded"
                      style={{ height: "200px", width: "220px" }}
                    />
                  </div>

                  {/* Hotel Details */}
                  <div className="col-md-6">
                    <h5 className="mb-1">{stay.hotel}</h5>
                    <div className="mb-2 d-flex align-items-center">
                      <span className="badge bg-success me-2">
                        {stay.rating} ★
                      </span>
                      <small className="text-muted">
                        {stay.totalReviews} reviews
                      </small>
                      <span className="ms-2 badge bg-light text-dark">
                        {stay.distanceFromCenter} from center
                      </span>
                    </div>
                    <p className="mb-1">
                      <FaMapMarkerAlt className="me-1" /> {stay.location}
                    </p>
                    <p className="mb-2 text-muted">{stay.roomType}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {stay.amenities.slice(0, 3).map((amenity, i) => (
                        <span key={i} className="badge bg-light text-dark">
                          {amenity}
                        </span>
                      ))}
                      {stay.amenities.length > 3 && (
                        <span className="badge bg-light text-dark">
                          +{stay.amenities.length - 3} more
                        </span>
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
                      {expandedHotelId === stay.id
                        ? "Hide Details"
                        : "View Details"}
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
                          <strong>Cancellation:</strong>{" "}
                          {stay.cancellationPolicy}
                        </p>
                        <h6 className="mt-3">Amenities</h6>
                        <div className="row">
                          {stay.amenities.map((amenity, idx) => (
                            <div key={idx} className="col-6 small mb-1">
                              <FaChevronRight size={10} className="me-1" />{" "}
                              {amenity}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <h6>Available Rooms</h6>
                        <div className="list-group small">
                          {stay.availableRooms.map((room, idx) => (
                            <div
                              key={idx}
                              className="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <div>
                                <div className="fw-bold">{room.type}</div>
                                <div className="text-success">
                                  {room.available} rooms left
                                </div>
                              </div>
                              <div>
                                <div className="text-primary fw-bold">
                                  ${room.price}
                                </div>
                                <button className="btn btn-sm btn-outline-primary mt-1">
                                  Select
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <h6>Guest Reviews</h6>
                        <div
                          className="small"
                          style={{ maxHeight: "150px", overflowY: "auto" }}
                        >
                          {stay.reviews.map((review, idx) => (
                            <div key={idx} className="mb-2">
                              <div className="d-flex align-items-center">
                                <span className="me-1">{review.rating}</span>
                                <FaStar className="text-warning" size={12} />
                                <span className="ms-1 fw-bold">
                                  {review.user}
                                </span>
                              </div>
                              <p className="mb-0">{review.comment}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button className="btn btn-sm btn-outline-primary me-2">
                        View More Details
                      </button>
                      <button className="btn btn-sm btn-success">
                        Book Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="text-center mt-4 mb-4">
            <button className="btn btn-dark">Show more results</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default StaySearch;
