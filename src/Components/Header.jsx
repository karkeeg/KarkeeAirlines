import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import bibek from '../assets/bibek.jpg';
import { IoNotifications , IoSettingsSharp } from "react-icons/io5";
import { MdManageAccounts, MdOutlineLogout } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

const Header = () => {
  let loginAuth = JSON.parse(localStorage.getItem("loginAuth")); // Check if user is logged in
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginAuth"); // Clear user session
    window.location.reload(); // Refresh page after logout
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".profile-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg px-5">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <img 
            src="https://th.bing.com/th/id/R.c580bd2877328e8ec44ddc452ec421ec?rik=yVRPUxk1wKJrSg&pid=ImgRaw&r=0" 
            alt="KarkeeAirway Logo" 
            height="50"
            className="d-inline-block align-top"
          />
          <span className="fs-4 fw-bold text-dark ms-2">KarkeeAirway</span>
        </Link>

        {/* Navbar Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><NavLink to="/" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}
 >Home</NavLink></li>
            <li className="nav-item"><NavLink to="/flight" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}
 >Flights</NavLink></li>
            <li className="nav-item"><NavLink to="/hotel" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}
 >Hotels</NavLink></li>
            <li className="nav-item"><NavLink to="/faqs" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}
 >Stories</NavLink></li>
            <li className="nav-item"><NavLink to="/help" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}
 >Help</NavLink></li>
          </ul>

          {/* Conditionally Render Login/Register OR Profile & Notifications */}
          {!loginAuth ? (
            <div className="d-flex">
              <Link to="/login">
                <button className="btn me-2 hover-grow" style={{ border: "1px solid #203553", color: "black" }}>
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary hover-grow" style={{ border: "1px solid #203553", background: "#203553" }}>
                  Register
                </button>
              </Link>
            </div>
          ) : (
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

                {/* Dropdown Menu */}
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
