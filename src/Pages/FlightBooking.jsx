import React from "react";
import flightsData from "../Flights.json";

const FlightBooking = () => {
  return (
    <div className="container mx-auto p-6 mb-5">
      <h2 className="text-3xl font-bold mb-6 ">Book Your Flight</h2>

      <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flightsData && flightsData.length > 0 ? (
          flightsData.map((flight, index) => (
            <div key={index} className="col-md-3 position-relative p-4">
              {/* Image */}
              <div className="position-relative bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={flight.image}
                  alt={flight.city}
                  className="img-fluid w-full object-cover rounded-xl"
                  style={{
                    height: "300px", // Fixed height for consistency
                    width: "100%",
                    objectFit: "cover",
                    borderRadius:"8px"
                  }}
                />

                {/* Content (Text) */}
                <div
                  className="position-absolute bottom-0 start-0 p-2 "
                  style={{
                    // background:"black",
                      color: "white",
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "8px",
                    width:"100%"
                  }}
                >
                  <h3 className="font-bold " style={{fontSize:"24px"}}>{flight.city}</h3>
                  <div className="d-flex  justify-content-between">
                    <p className=" " style={{fontSize:"14px"}}>{flight.description}</p>
                    <p className=" font-bold text-warning" style={{fontSize:"18px",fontWeight:"bold",}}>${flight.price}</p>
                  </div>

                  {/* Button */}
                  <button
                    className="py-2"
                    style={{
                      background: "#66ABC7",
                      border: "none",
                      width: "100%",
                      borderRadius:"5px"
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
