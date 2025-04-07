import React from "react";
import flightsData from "../Flights.json";

const FlightBooking = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Book Your Flight</h2>

      <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flightsData && flightsData.length > 0 ? (
          flightsData.map((flight, index) => (
            <div
              key={index}
              className="col-md-3 p-4" // Added padding to each card
            >
              {/* Image Card */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={flight.image}
                  alt={flight.city}
                  className="img-fluid w-full object-cover rounded-xl"
                  style={{
                    height: '250px', // Fixed height for consistency
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* Content (Text) */}
                <div
                  className="absolute bottom-0 start-0 p-4 w-full"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
                    color: 'white',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">{flight.city}</h3>
                  <p className="text-sm mb-2">{flight.description}</p>
                  <p className="text-lg font-bold">${flight.price}</p>

                  {/* Button */}
                  <button
                    className="mt-4 py-2 px-4"
                    style={{
                      background: '#66ABC7',
                      border: 'none',
                      borderRadius: '5px',
                      width: '100%',
                    }}
                  >
                    Book Flight
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No flights available</p>
        )}
      </div>
    </div>
  );
};

export default FlightBooking;
