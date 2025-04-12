import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.webp";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const images = [image1, image2, image3];

  const validateForm = () => {
    const errors = {};

    // First Name and Last Name Validation
    if (!firstName) errors.firstName = "First Name is required.";
    if (!lastName) errors.lastName = "Last Name is required.";

    // Email Validation
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Phone Validation (simple regex for phone number)
    if (!phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }

    // Password Validation
    if (!password) {
      errors.password = "Password is required.";
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    // Terms and Conditions Validation
    if (!termsAccepted) {
      errors.termsAccepted = "You must agree to the terms and conditions.";
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      Swal.fire({
        title: "Let's get started!",
        text: "Are you ready to create your account and proceed to the main page?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Yes, let's go!",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("loginAuth", JSON.stringify(true));
          navigate("/");
        }
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-lg-5 p-4 d-flex flex-column">
          <div className="mb-2">
            <Link to={'/'} className="text-decoration-none text-dark">
              <div className="d-flex align-items-center mb-3">
                <span className="text-primary me-2">
                  <img
                    src="https://th.bing.com/th/id/R.c580bd2877328e8ec44ddc452ec421ec?rik=yVRPUxk1wKJrSg&pid=ImgRaw&r=0"
                    alt="KarkeeAirway Logo"
                    height="50"
                    className="d-inline-block align-top"
                  />
                </span>
                <span className="fw-bold fs-2">KarkeeAirway</span>
              </div>
            </Link>
          </div>

          <h2 className="mb-2 fw-bold">Sign up</h2>
          <p className="text-muted mb-4">Let's get you all set up.</p>

          <form onSubmit={handleFormSubmit}>
            <div className="mb-3 row">
              <div className="col-md-6 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="firstName" className="ms-2">First Name</label>
                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
              </div>
              <div className="col-md-6 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="lastName" className="ms-2">Last Name</label>
                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-md-6 form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="ms-2">Email</label>
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="col-md-6 form-floating">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="phone" className="ms-2">Phone Number</label>
                {errors.phone && <div className="text-danger">{errors.phone}</div>}
              </div>
            </div>

            <div className="mb-2 form-floating input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
              {errors.password && <div className="text-danger mb-2">{errors.password}</div>}

            <div className="mb-2 form-floating input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
              {errors.confirmPassword && <div className="text-danger mb-2">{errors.confirmPassword}</div>}

            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms-checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                <label className="form-check-label small" htmlFor="terms-checkbox">
                  I agree to all the{" "}
                  <a href="#" className="text-primary">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.termsAccepted && <div className="text-danger">{errors.termsAccepted}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              Create account
            </button>

            <div className="text-center mb-2">
              <span className="small text-muted">Already have an account? </span>
              <Link to="/login">
                <a href="#" className="text-danger text-decoration-none">
                  Login
                </a>
              </Link>
            </div>
          </form>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div
            id="carouselExampleFade"
            className="carousel slide w-100"
            style={{ maxWidth: "400px" }}
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100 rounded"
                    alt={`Slide ${index + 1}`}
                    style={{ objectFit: "cover", height: "500px" }}
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden opacity-0.1">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden opacity-0.1">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
