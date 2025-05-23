import React, { useState, useEffect } from "react";
import { IoPaperPlane, IoBed, IoAirplane } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import data from "../jsonData.json";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [location, setLocation] = useState("New York - Kathmandu");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeTab, setActiveTab] = useState("flights");

  const SwitchCity = () => {
    const [from, to] = location.split(" - ");
    setLocation(`${to} - ${from}`);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const currentItem = data[currentIndex];

  return (
    <div>
      <div className="container-fluid">
        <div className="position-relative" style={{ padding: "0px 30px" }}>
          <div
            className="position-relative"
            style={{
              maxHeight: "550px",
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <img
              src={currentItem.image}
              alt={currentItem.alt}
              className={`img-fluid w-100 ${fade ? "fade-in" : "fade-out"}`}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transition: "all 0.5s ease",
              }}
              loading="lazy"
            />

            <div
              className="position-absolute top-0 start-0 p-4 text-white topic"
              style={{ maxWidth: "500px" }}
            >
              <h1
                className={`display-5 fw-light ${
                  fade ? "fade-in" : "fade-out"
                }`}
              >
                {currentItem.heading1}
              </h1>
              <h1
                className={`display-3 fw-bold text-danger ${
                  fade ? "fade-in" : "fade-out"
                }`}
              >
                {currentItem.heading2}
              </h1>
              <p className={`mt-3 ${fade ? "fade-in" : "fade-out"}`}>
                {currentItem.description}
              </p>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={handleNext}
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          <div
            className="container position-relative"
            style={{ marginTop: "-90px", opacity: "0.9" }}
          >
            <div className="card shadow">
              <div className="card-body p-4">
                <ul className="nav nav-tabs mb-4">
                  <li className="nav-item">
                    <button
                      className={`nav-link d-flex align-items-center ${
                        activeTab === "flights" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("flights")}
                    >
                      <IoAirplane className="me-2" /> Flights
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link d-flex align-items-center ${
                        activeTab === "stays" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("stays")}
                    >
                      <IoBed className="me-2" /> Stays
                    </button>
                  </li>
                </ul>

                {activeTab === "flights" && (
                  <form>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <label className="form-label small">From - To</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            value={location}
                            readOnly
                          />
                          <span className="input-group-text bg-white">
                            <GoArrowSwitch
                              onClick={SwitchCity}
                              style={{ cursor: "pointer" }}
                            />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <label className="form-label small">Trip</label>
                        <select className="form-select" defaultValue="one-way">
                          <option value="one-way">One way</option>
                          <option value="round-trip">Round trip</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label small">
                          Depart - Return
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="07 March-25"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label small">
                          Passenger - Class
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="1 Passenger - Economy"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <button
                        type="button"
                        className="btn text-decoration-none p-0"
                      >
                        <i className="bi bi-plus-circle me-1"></i>+ Add Promo
                        Code
                      </button>
                      <Link to="/flights" activeTab={activeTab} target="blank">
                        <button
                          type="button"
                          className="btn btn-info text-white"
                        >
                          <IoPaperPlane className="me-1" /> Show Flights
                        </button>
                      </Link>
                    </div>
                  </form>
                )}

                {activeTab === "stays" && (
                  <form>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <label className="form-label small">Destination</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Kathmandu, Nepal"
                          placeholder="Where are you going?"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label small">
                          Check-in - Check-out
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="07 March - 12 March"
                        />
                      </div>
                      <div className="col-md-2">
                        <label className="form-label small">Rooms</label>
                        <select className="form-select" defaultValue="1">
                          <option value="1">1 Room</option>
                          <option value="2">2 Rooms</option>
                          <option value="3">3 Rooms</option>
                          <option value="4">4+ Rooms</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label small">Guests</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="2 Adults, 0 Children"
                        />
                      </div>
                    </div>

                    <div className="row g-3 mt-1">
                      <div className="col-md-4">
                        <label className="form-label small">
                          Property Type
                        </label>
                        <select className="form-select" defaultValue="all">
                          <option value="all">All Properties</option>
                          <option value="hotel">Hotels</option>
                          <option value="resort">Resorts</option>
                          <option value="apartment">Apartments</option>
                          <option value="villa">Villas</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label small">Price Range</label>
                        <select className="form-select" defaultValue="any">
                          <option value="any">Any Price</option>
                          <option value="budget">Budget (Under $50)</option>
                          <option value="moderate">Moderate ($50-$150)</option>
                          <option value="luxury">Luxury ($150+)</option>
                        </select>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <button
                        type="button"
                        className="btn text-decoration-none p-0"
                      >
                        <i className="bi bi-plus-circle me-1"></i>+ Add Promo
                        Code
                      </button>
                      <button type="button" className="btn btn-info text-white">
                        <IoBed className="me-1" /> Find Stays
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
