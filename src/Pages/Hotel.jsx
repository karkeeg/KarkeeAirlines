import React from 'react'
import hotels from '../HotlData.json'
import { IoInformationCircleSharp } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';



const HotelCard = ({ hotel }) => (
  <div className="col-md-3 mb-4 d-flex">
    <div className="card h-100 w-80">
      <div style={{ height: "150px", overflow: "hidden" }}>
        <img
          src={hotel.image}
          className="card-img-top h-100 w-100"
          alt={hotel.name}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{hotel.name}</h5>
          <p className="card-text">{hotel.price}</p>

          {/* Availability Badge */}
          <span className="badge bg-success mb-3">
            <i className=" bi bi-check-circle"></i>
            Available
          </span>
        </div>

        {/* Buttons - All on the same block */}
        <div className="d-flex align-items-center gap-2">
         

          {/* Icon Buttons with spacing */}
          <button className="btn btn-outline-secondary">
            <IoInformationCircleSharp />
          </button>
          <button className="btn btn-outline-danger">
            <FaRegHeart />
          </button>
          <button className="btn btn-outline-dark">
            <IoMdShareAlt />
          </button>

           {/* Big Book Button */}
           <button className="btn flex-grow-1" style={{background:"#6292B4"}}>
            Book 
          </button>
        </div>
      </div>
    </div>
  </div>
);


const Hotel = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Book Your Hotel</h2>
      <div className="row">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

   
export default Hotel