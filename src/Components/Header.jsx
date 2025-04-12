import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import bibek from '../assets/bibek.jpg';
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { MdManageAccounts, MdOutlineLogout } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

const Header = () => {
  let loginAuth = JSON.parse(localStorage.getItem("loginAuth")); // Check if user is logged in
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "success", message: "New Flight Available!", read: false },
    { id: 2, type: "info", message: "Your Trip is Confirmed.", read: false },
    { id: 3, type: "warning", message: "Special Discount for Members!", read: false },
  ]);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginAuth"); // Clear user session
    window.location.reload(); // Refresh page after logout
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (!e.target.closest(".profile-container") && !e.target.closest(".notification-btn")) {
        setIsProfileOpen(false);
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

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
            <li className="nav-item"><NavLink to="/" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/flight" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}>Flights</NavLink></li>
            <li className="nav-item"><NavLink to="/hotel" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}>Hotels</NavLink></li>
            <li className="nav-item"><NavLink to="/stories" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}>Stories</NavLink></li>
            <li className="nav-item"><NavLink to="/help" className={({ isActive }) => `nav-link px-3 ${isActive ? 'fw-bold text-decoration-underline text-dark' : ''}`}>Help</NavLink></li>
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
              <button className="btn notification-btn position-relative me-3" onClick={toggleNotificationDropdown}>
                <IoNotifications className="fs-3" />
                {notifications.filter(notification => !notification.read).length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {notifications.filter(notification => !notification.read).length}
                  </span>
                )}
              </button>

              
              {isNotificationOpen && (
                <div 
                  className="dropdown-menu show position-absolute shadow-sm" 
                  style={{ 
                    width: "320px", 
                    maxHeight: "400px", 
                    overflowY: "auto", 
                    top: "55px", 
                    right: "80px",
                    borderRadius: "8px"
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                    <h6 className="fw-bold mb-0">Notifications</h6>
                    <button 
                      className="btn btn-sm text-primary" 
                      style={{ fontSize: "0.8rem" }}
                      onClick={() => setNotifications(notifications.map(n => ({...n, read: true})))}
                    >
                      Mark all as read
                    </button>
                  </div>
                  
                  {notifications.length === 0 ? (
                    <div className="text-center py-3">
                      <p className="text-muted mb-0">No notifications</p>
                    </div>
                  ) : (
                    <div>
                      {notifications.map(notification => {
                        let iconColor, icon, bgColor;
                        
                        if (notification.type === 'success') {
                          iconColor = '#28a745';
                          icon = '✅';
                          bgColor = notification.read ? '#f8f9fa' : '#e8f5e9';
                        } else if (notification.type === 'warning') {
                          iconColor = '#ffc107';
                          icon = '⚠️';
                          bgColor = notification.read ? '#f8f9fa' : '#fff8e1';
                        } else {
                          iconColor = '#17a2b8';
                          icon = 'ℹ️';
                          bgColor = notification.read ? '#f8f9fa' : '#e3f2fd';
                        }
                        
                        return (
                          <div 
                            key={notification.id} 
                            className="notification-item"
                            onClick={() => markAsRead(notification.id)}
                            style={{ 
                              cursor: 'pointer', 
                              padding: '12px 15px',
                              backgroundColor: bgColor,
                              borderBottom: '1px solid #f0f0f0'
                            }}
                          >
                            <div className="d-flex align-items-center">
                              <div className="me-3" style={{ color: iconColor, fontSize: '20px' }}>
                                {icon}
                              </div>
                              <div>
                                <p className="mb-0" style={{ fontWeight: notification.read ? 'normal' : 'bold' }}>
                                  {notification.message}
                                </p>
                                <small className="text-muted">Just now</small>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                      <div className="text-center p-2 border-top">
                        <Link to="/all-notifications" className="text-decoration-none" style={{ fontSize: "0.9rem" }}>
                          View all notifications
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Profile Dropdown */}
              <div className="profile-container position-relative">
              
                <img
                  src={bibek}
                  alt="Profile"
                  className="rounded-circle border"
                  onClick={toggleProfileDropdown}
                  style={{ width: "40px", height: "40px", cursor: "pointer", objectFit: "cover" }}
                />

               
                {isProfileOpen && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2 shadow" style={{ width: "200px", right: "0" }}>
                    <div className="dropdown-header border-bottom pb-2">
                      <strong>Bibek Karkee</strong><br />
                      <main>karkibibek123@gmail.com</main>
                    </div>
                    <Link to="/profile" className="dropdown-item py-2">
                      <MdManageAccounts className="me-2" /> Profile
                    </Link>
                    <Link to="/trips" className="dropdown-item py-2">
                      <FaPlaneDeparture className="me-2" /> My Trips
                    </Link>
                    <Link to="/settings" className="dropdown-item py-2">
                      <IoSettingsSharp className="me-2" /> Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item text-danger py-2" onClick={handleLogout}>
                      <MdOutlineLogout className="me-2" /> Logout
                    </button>
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