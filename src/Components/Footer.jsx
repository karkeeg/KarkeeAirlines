import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light ">
      <div className="text-center">
        <h2>Explore the world with KarkeeAirway</h2>
        <p className="text-primary">Discover new places and experience</p>
      </div>

      {/* Newsletter Section */}
      <div
        className="container-fluid py-4 mb-4"
        style={{ background: "#CCDCF3", borderRadius: "15px" }}
      >
        <div className="row">
          <div className="col-md-8 col-lg-6" style={{ marginLeft: "55px" }}>
            <div className="text-start">
              <h3 className="fw-bold">Join KarkeeAirway</h3>
              <p className="text-muted mb-1">The Travel</p>
              <p className="text-muted small">
                Get inspired! Receive travel discounts, tips and behind the
                scenes stories.
              </p>
            </div>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Your email address"
                className="form-control me-2"
              />
              <button type="submit" className="btn btn-dark px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container" style={{ marginLeft: "55px" }}>
        <div className="row mb-3">
          <div className="col-12 col-md-2">
            <div className="mb-3">
              <h5 className="text-primary d-flex align-items-center">
                <div className="me-2">
                  <Link />
                </div>
                KarkeeAirway
              </h5>
            </div>
            <div className="d-flex social-icons">
              <a href="#" className="me-2 text-dark">
                <FaFacebookF />
              </a>
              <a href="#" className="me-2 text-dark">
                <FaTwitter />
              </a>
              <a href="#" className="me-2 text-dark">
                <FaYoutube />
              </a>
              <a href="#" className="me-2 text-dark">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="mb-3">Our Destinations</h6>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Maldives
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Alaska
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  New Zealand
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="mb-3">Our Activities</h6>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Northern Lights
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Cruising & sailing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Paragliding
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="mb-3">Travel Blogs</h6>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Maldives Tour
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  USA Tour
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  New Zealand Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="mb-3">About Us</h6>
            <ul className="list-unstyled mb-3 footer-links">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Our Story
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Work with us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="mb-3">Contact Us</h6>
            <ul className="list-unstyled footer-links">
              <li className="mb-2 text-muted">+977 9860917585</li>
              <li className="mb-2">
                <a
                  href="mailto:karkeeairway@gmail.com"
                  className="text-decoration-none text-muted"
                >
                  KarkeeAirway@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-3 border-top">
          <p className="text-muted small">© KarkeeAirway 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
