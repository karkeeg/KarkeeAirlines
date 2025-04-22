import React, { useEffect, useState } from "react";
import { FaPlane, FaHotel } from "react-icons/fa";
import FlightSearch from "../Components/FlightSearch";
import StaySearch from "../Components/StaySearch";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

const FlightResults = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("flights"); // flights or stays

  useEffect(() => {
    if (location.state && location.state.hotel) {
      setActiveTab("stays");
    }
  }, [location.state]);
  return (
    <div className="container-fluid">
      <Header />

      <div className="container mt-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "flights" ? "active" : ""}`}
              onClick={() => setActiveTab("flights")}
            >
              <FaPlane className="me-2" /> Flights
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "stays" ? "active" : ""}`}
              onClick={() => setActiveTab("stays")}
            >
              <FaHotel className="me-2" /> Stays
            </button>
          </li>
        </ul>
      </div>

      <div>{activeTab === "flights" ? <FlightSearch /> : <StaySearch />}</div>

      <Footer />
    </div>
  );
};

export default FlightResults;
