import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const featuredStories = [
  {
    image: "https://plus.unsplash.com/premium_photo-1677574870836-2e2d69b515ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Amazing horse ride with soul mate"
  },
  {
    image: "https://images.unsplash.com/photo-1585992710862-d080a8733e1c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The cold ice bath in Sweden"
  },
  {
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The unforgettable camping night"
  }
];

const topStories = [
    {
      image: "https://images.unsplash.com/photo-1720810757170-c2bd2c6ed335?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Kathmandu, Nepal",
      date: "March 08, 2025",
      time: "3 min read",
      title: "The Unexpected Guide",
      description: "Dive into the heart of Kathmandu and discover a culture that's vibrant, spiritual, and unforgettable.",
    },
    {
      image: "https://images.unsplash.com/photo-1720812128603-0b4b3ddd8804?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Pokhara, Nepal",
      date: "Mar 27, 2025",
      time: "7 min read",
      title: "Train to MachaPuchre",
      description: "Take a scenic ride on the famous train to the majestic Machapuchre through stunning Himalayan landscapes.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1672191496375-9659b519bef2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Boston, USA",
      date: "Feb 2, 2025",
      time: "6 min read",
      title: "Snowfall in Boston",
      description: "Embrace the magical winter in Boston with cozy cafés, snow-covered streets, and warm mittens.",
    },
    {
      image: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Tokyo, Japan",
      date: "April 2, 2025",
      time: "8 min read",
      title: "Midnight Lights in Tokyo",
      description: "Explore the electric nights of Tokyo where tradition meets futuristic vibes.",
    },
    {
      image: "https://images.unsplash.com/photo-1666079769480-1ff5a1990bb8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Paris, France",
      date: "April 5, 2025",
      time: "5 min read",
      title: "Spring Romance in Paris",
      description: "Wander the blooming gardens and charming streets of Paris in the most romantic season of the year.",
    },
    {
      image: "https://images.unsplash.com/photo-1574530638414-88578d1f73a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Venice, Italy",
      date: "April 8, 2025",
      time: "4 min read",
      title: "Gondolas & Gelato",
      description: "Float through Venice’s dreamy canals while enjoying world-class gelato and timeless architecture.",
    },
    {
      image: "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "New Delhi, India",
      date: "April 12, 2025",
      time: "6 min read",
      title: "Colors of Holi",
      description: "Celebrate the festival of colors in New Delhi with vibrant powder, joyful dances, and local sweets.",
    },
    {
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Istanbul, Turkey",
      date: "April 15, 2025",
      time: "5 min read",
      title: "Bazaar Adventures",
      description: "Get lost in the Grand Bazaar of Istanbul, where history, spice, and vibrant fabrics meet.",
    },
    {
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Reykjavik, Iceland",
      date: "April 20, 2025",
      time: "7 min read",
      title: "Chasing Northern Lights",
      description: "Experience the thrill of spotting auroras in the Icelandic night sky, a once-in-a-lifetime wonder.",
    },
    {
      image: "https://images.unsplash.com/photo-1614644756940-3a865ed54d7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Sydney, Australia",
      date: "April 25, 2025",
      time: "4 min read",
      title: "Sunset at Bondi Beach",
      description: "Watch surfers ride waves and the sky melt into the sea during sunset at Bondi’s iconic shoreline.",
    }
  ];
  

const TravelStories = () => {
  return (
    
   
    <div className="container my-1">
      <h2 className='m-3'>
        People's Stories
      </h2>
    
      {/* Featured Stories */}
      <div className="row mb-5">
        {featuredStories.map((story, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div
              className="card border-0 text-white story-card"
              style={{
                height: "500px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute bottom-0 start-0 p-3 w-100"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}
              >
                <h5 className="fw-bold mb-0">{story.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      {/* Top Travel Stories */}
      <h4 className="mb-4 fw-bold">Top Travel Stories</h4>
      <div className="row gy-4">
        {topStories.map((story, idx) => (
          <div key={idx} className="col-md-6">
            <div
              className="d-flex p-3 rounded shadow-sm h-100 story-card"
              style={{
                minHeight: "180px",
                backgroundColor: "#fff",
                border: "1px solid #eaeaea",
              }}
            >
              <img
                src={story.image}
                alt={story.title}
                className="rounded me-3"
                style={{
                  width: "180px",
                  height: "150px",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <small className="text-muted d-block mb-1">
                    {story.location} • {story.date} • {story.time}
                  </small>
                  <h6 className="fw-bold mb-1">{story.title}</h6>
                  <p className="text-muted mb-2" style={{ fontSize: "0.875rem" }}>
                    {story.description}
                  </p>
                </div>
                <button className="btn btn-link p-0 fw-bold text-decoration-none">
                  Read Full Story <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
  );
};

export default TravelStories;
