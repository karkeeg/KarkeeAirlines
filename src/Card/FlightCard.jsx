const FlightCard = ({ flight, onSelect }) => {
  return (
    <div className="card mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="card-body p-4">
        <div className="row align-items-center">
          {/* Airline Info */}
          <div className="col-md-3 d-flex align-items-center gap-3 mb-3 mb-md-0">
            <img 
              src={flight.logo} 
              alt={flight.airline} 
              height={40} 
              className="img-fluid" 
              style={{ maxWidth: '60px', objectFit: 'contain' }}
            />
            <div>
              <h6 className="mb-0 fw-bold">{flight.airline}</h6>
              <small className="text-muted d-flex align-items-center gap-1">
                <span>{flight.flightNumber}</span> • <span>{flight.terminal}</span>
              </small>
            </div>
          </div>

          {/* Time & Duration */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center">
              <span className="fw-semibold fs-5">{flight.depart}</span>
              <div className="mx-2 border-top flex-grow-1" style={{ height: 1 }}></div>
              <FaPlane className="text-primary" />
              <div className="mx-2 border-top flex-grow-1" style={{ height: 1 }}></div>
              <span className="fw-semibold fs-5">{flight.arrive}</span>
            </div>
            <small className="text-muted d-flex align-items-center justify-content-center gap-1 mt-1">
              <span>Non stop</span> • <FaClock size={12} /> <span>{flight.duration}</span>
            </small>
          </div>

          {/* Extra Info */}
          <div className="col-md-2 text-center text-muted small">
            <div className="d-flex align-items-center justify-content-center gap-1 mb-1">
              <FaSuitcase size={12} /> <span>{flight.baggage}</span>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-1">
              <FaChair size={12} /> <span>{flight.seatType}</span>
            </div>
          </div>

          {/* Price & Button */}
          <div className="col-md-3 text-center">
            <h5 className="text-primary mb-2 fw-bold">${flight.price}</h5>
            <button 
              className="btn btn-primary btn-sm w-100" 
              onClick={() => onSelect(flight)}
            >
              Select Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard; 