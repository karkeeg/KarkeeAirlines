import React, { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.webp";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAuth = (e) => {
    e.preventDefault();  // Prevent page reload

    let valid = true;

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      localStorage.setItem("loginAuth", JSON.stringify(true)); // Save login state
      navigate("/"); // Navigate to the home page after login
    }
  };

  // Define the images array
  const images = [image1, image2, image3];

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        
        <div className="col-md-6 col-lg-5 p-4 d-flex flex-column">
          <div className="mb-2">
            <Link to={'/'} className="text-decoration-none text-dark">
              <div className="d-flex align-items-center mb-4">
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

          <div className="flex-grow-1">
            <h1 className="mb-2 fw-bold">Login</h1>
            <p className="text-muted mb-2">Login to access your KarkeeAirway account</p>

            <form onSubmit={handleAuth}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-muted small">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control py-2"
                  id="email"
                  placeholder="karkeebibek123@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="text-danger small">{emailError}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label text-muted small">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control py-2"
                    id="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {passwordError && <div className="text-danger small">{passwordError}</div>}
              </div>

              <div className="text-end mb-3">
                <a href="#" className="text-decoration-none small">
                  Forgot Password
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
                Login
              </button>

              <div className="text-center mb-4">
                <span className="small text-muted">Don't have an account? </span>
                <Link to={'/signup'}>
                  <a href="#" className="small text-danger text-decoration-none">Sign up</a>
                </Link>
              </div>

              <div className="text-center mb-3">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <hr className="flex-grow-1" />
                  <span className="text-muted small">Or login with</span>
                  <hr className="flex-grow-1" />
                </div>
              </div>

              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-outline-secondary px-4" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1877F2" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </button>
                <button className="btn btn-outline-secondary px-4" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DB4437" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                  </svg>
                </button>
                <button className="btn btn-outline-secondary px-4" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#555555" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Image Carousel */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade w-100"
            style={{ maxWidth: "400px", maxHeight: "700px" }}
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
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
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
