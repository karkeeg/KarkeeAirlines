import React from "react";
import hotels from "../HotlData.json";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Navigate to StaySearch page with hotel data
    navigate("/flights", {
      state: { hotel },
    });
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
      <div className="card shadow-sm w-100 h-100">
        <div className="overflow-hidden" style={{ height: "180px" }}>
          <img
            src={hotel.image}
            className="card-img-top"
            alt={hotel.name}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-semibold">{hotel.name}</h5>
            <p className="text-muted mb-1">{hotel.price}</p>
            <span className="badge bg-success mb-3">
              <i className="bi bi-check-circle"></i> Available
            </span>
          </div>

          <div className="d-flex align-items-center gap-2 flex-wrap mt-auto">
            <button className="btn btn-outline-secondary p-2">
              <IoInformationCircleSharp size={18} />
            </button>
            <button className="btn btn-outline-danger p-2">
              <FaRegHeart size={18} />
            </button>
            <button className="btn btn-outline-dark p-2">
              <IoMdShareAlt size={18} />
            </button>
            <button
              className="btn btn-primary flex-grow-1 px-4"
              style={{ background: "#6292B4", border: "none" }}
              onClick={handleBookNow}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hotel = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center fw-bold">Book Your Hotel</h2>
      <div className="row">
        {/* Loop through the hotels data and create a card for each hotel */}
        {hotels.map(
          (
            hotel,
            index //card data from json file
          ) => (
            <HotelCard key={index} hotel={hotel} />
          )
        )}
      </div>
    </div>
  );
};

export default Hotel;
