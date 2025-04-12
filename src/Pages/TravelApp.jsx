import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart, FaRegHeart, FaPlane, FaBuilding,FaUsers } from 'react-icons/fa';
import popularDestinations from '../Destination.json'
import inspirationCards from '../inspirationData.json'
import { Link } from 'react-router-dom';
import FAQ from './FAQ';



const TravelApp = () => {
 
  const [favorites, setFavorites] = useState({});

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="container my-4">
     

      {/* Popular Destinations Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">The most popular destinations</h2>
        <Link to={'/flight'} className='text-decoration-none'>
        <a href="#" className="text-dark text-decoration-none">
          See more <span>→</span>
        </a></Link>
      </div>

      <div className="row g-3 mb-5">
        {popularDestinations.map(destination => (
          <div key={destination.id} className="col-12 col-sm-6 col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="position-relative">
                <img 
                  src={destination.image} 
                  className="card-img-top"
                  height="180"
                  style={{ objectFit: 'cover' }}
                  alt={destination.name}
                />
                <button
                  className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle p-1"
                  style={{ width: '32px', height: '32px' }}
                  onClick={() => toggleFavorite(destination.id)}
                >
                  {favorites[destination.id] ? 
                    <FaHeart className="text-danger" /> : 
                    <FaRegHeart className="text-white" />
                  }
                </button>
              </div>
              <div className="card-body px-3 py-2">
                <h5 className="card-title mb-0">{destination.name}</h5>
                <p className="card-text text-muted small">{destination.properties} properties</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inspiration Section */}
      <h2 className="mb-3">Get inspiration for your next trip</h2>
      <div className="row g-4">
        {inspirationCards.map(card => (
          <div key={card.id} className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm inspiration-card">
              <div className="position-relative">
                <img 
                  src={card.image} 
                  className="card-img-top inspiration-image"
                  height="220"
                  style={{ objectFit: 'cover' }}
                  alt={card.title}
                />
                <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-25 d-flex flex-column justify-content-end p-3">
                  <h4 className="text-white mb-2">{card.title}</h4>
                  <p className="text-white small mb-0">{card.subtitle}</p>
                </div>
                <button
                  className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle p-1"
                  style={{ width: '32px', height: '32px' }}
                  onClick={() => toggleFavorite(card.id)}
                >
                  {favorites[card.id] ? 
                    <FaHeart className="text-danger" /> : 
                    <FaRegHeart className="text-white" />
                  }
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

       {/* Booking Section */}
       <h2 className="mb-4 mt-5">Book your flights and Hotels</h2>
      <div className="row g-4 mb-5">
        {/* Flights Card */}
        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm overflow-hidden">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top"
                style={{ height: '320px', objectFit: 'cover' }}
                alt="Aircraft interior"
              />
              <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-end p-4" 
                   style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)' }}>
                <h2 className="text-white mb-2">Flights</h2>
                <p className="text-white mb-3">Search and book your suitable flights for your destination</p>
                
                <Link to={'/flight'} >
                <button className="btn btn-light text-primary d-inline-flex align-items-center" style={{ width: 'fit-content' }}>
                  <FaPlane /> <span className="ms-2">Show Flights</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hotels Card */}
        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm overflow-hidden">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=600&h=400" 
                className="card-img-top"
                style={{ height: '320px', objectFit: 'cover' }}
                alt="Luxury resort with pool"
              />
              <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-end p-4" 
                   style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)' }}>
                <h2 className="text-white mb-2">Hotels</h2>
                <p className="text-white mb-3">Search and book your hotel for your luxury and comfort stay</p>
               
               <Link to={'/hotel'} >
                <button className="btn btn-light text-primary d-inline-flex align-items-center" style={{ width: 'fit-content' }}>
                  <FaBuilding /> <span className="ms-2">Show Hotels</span>
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="my-5">
      {/* Hero Section */}
      <div className="card p-5 shadow-lg border-0 rounded-4 bg-light">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold text-uppercase display-5">
              An <span className="text-danger">Impressive</span> and <br /> Unforgettable Experience
            </h2>
            <p className="text-muted fs-5">
              "This is the best place to redefine your travel story with a great adventure and experience."
            </p>
            <div className="d-flex align-items-center gap-3 mt-3">
              <FaUsers size={35} className="text-primary" />
              <span className="fw-bold fs-5">100K+ Happy Adventurers</span>
            </div>
          </div>
          <div className="col-md-6 d-flex gap-2 justify-content-md-end mt-4 mt-md-0">
            <img
              src="https://s3-alpha-sig.figma.com/img/5ecf/0b49/7bd0a757213f92241016d61e8fd390bb?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q~WBg-NK-u90uyR4bRJnFxHi6tLQtb94TWCbLBrZpb18NAyogEdHwoqebn77oIoko2AzFTBVvld1QOQtUAaNMIez06jqHKtMookVARV300nt9~vI6XX6E1WknEkSx4Dy8FDSI4YdP8sCC28k7cn2pL2DUXbIaflleJPHhR~bJ9pQYEA7LOXjoTvm~vyP5Pv7Nmb5ecPTyKJyOxc30lwv2RGUqsuO5knMXAwWFaR~U2dbTzLvrHVbK~sblgAE-HlkSF2xCQZ2c~Utp4n8wuxH8WdUFgydOZvUEJ2~SV6ZyxK-c0bdlglD3BbgMEKflJlNiWnYk8S0c85i2wfJwnbaVg__"
              className="rounded-circle object-fit-cover"
              style={{ width: "200px", height: "250px" }}
              alt="Experience"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/9fe9/6588/0cba28ca6ddc0cd8f30aa96c64a655ea?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b9XNWFy~IYlAtJHXRIQC4E85jAYp5aKcqG28eSLVRFyLjL9SRHf8q81t0X1pDXJVz3idDyZ50vM6zIwo8~Np6gJVtkXhVlnGg4mmg4FcFC2yuHlRRzZmtqnig0T7f3iKlpNAfTOQ7PIjNo9OtlkLGn77yH8q9jBaC8TG3-NymK2qO6d29Sx~fM3WBZhvD0F-yW7L9tfgLCJAqcAn5pM7uIadOo2Ae7TKHmvgwSrojWEr-tNY8mynXBNeNDxgDPiKqHzeQujgjRQ6CFc3VX2lihR1jBhZWavg2ESmyRey8f0xx-rpuFM4AQ0lqTOf8XZGKQTjIG4q3nxOKi0vzyZEPQ__"
              className="rounded-circle object-fit-cover"
              style={{ width: "180px", height: "250px" }}
              alt="Adventure"
            />
            <img
             src="https://s3-alpha-sig.figma.com/img/3e06/823b/0c990eeb91fa12220a6901d9403b1a16?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iOSuz0uUekgmlw07Yb53RNTfiynrScC5yzlDruO3DJWdL9nYvqUOsNDowkoxHdZt3IDnwDjCKa22vDYXUmPlMlIDbfaMkkMzoHniQ4W8Sm0xfvujhXdxtBeg1ZlvWzDXRGz7-t-R3U29-C-umiw-0GfukGgSnSb6CciGsFbpkuN01aqbvsFi2rpgJ5QaUVt3d8IqTspMnvlyb9wqAY8gAXedOu3ps-dj1-OCrsiCOqvJIL27nSmd3YfuDRfVqNYFNGx0zfh7b08TJjkihVUUQuzLr7bV98Oa9S8yklFHJczJujO7E9-g5f3cHeynchHZtYtLY2E1EkJYQXXhy~xCAg__"
             className="rounded-circle object-fit-cover"
              style={{ width: "180px", height: "250px" }}
              alt="Nature"
            />
          </div>
        </div>
      </div>

      <div className="card my-4 p-5 border-0 shadow-sm rounded-4  text-center d-flex flex-column flex-md-row align-items-center" style={{background:"#CCDCF3"}}>
  {/* Travel Quote Section */}
  <div className="flex-fill mb-4 mb-md-0 me-md-5 d-flex flex-column justify-content-center rounded-2 " style={{ height: '300px', maxWidth: '50%',background:"#E4E9F1" }}>
    <h4 className="fw-bold display-6 mb-3">Travel is the only thing you buy that makes you richer</h4>
    <p className="text-muted fs-5">Explore new places, broaden your horizons, and create lifelong memories.</p>
    <a href="#" className="text-decoration-none text-dark mt-3 px-4 py-2 rounded-pill fw-semibold">
      Learn More &rarr;
    </a>
  </div>

  {/* Video and Call to Action Section */}
  <div className="card border-0 shadow rounded-4" style={{ maxWidth: '50%', height: '300px' }}>
    <video className="w-100 h-100 rounded-4" controls>
      <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
       </div>

      {/* FAQ Section */}
      <FAQ/>
    </div>
 

 


      
    </div>
  );
};

export default TravelApp;