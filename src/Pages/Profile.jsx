import React, { useState } from 'react';
import { FaUpload, FaPlaneDeparture, FaHotel } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('account');
  const [historyTab, setHistoryTab] = useState('flights');

  const defaultUser = {
    name: 'Bibek karki',
    email: 'Karkibibek@gmail.com',
    password: '••••••••••',
    phone: '9815027654',
    address: 'Kalanki-3, Chandragiri, Kathmandu',
    profileImage: 'https://avatars.githubusercontent.com/u/139469612?s=400&u=53318d396bc1356a16ca061d0745e46f22313b38&v=4',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };

  const userData = user || defaultUser;

  const renderAccountTab = () => (
    <div className="mt-4">
      <h2 className="fw-bold fs-4 mb-4">Account</h2>
      {[
        { label: 'Name', value: userData.name },
        { label: 'Email', value: userData.email, extra: (
          <button className="btn btn-outline-secondary btn-sm me-2 d-flex align-items-center">
            <span className="bg-dark rounded-circle me-2" style={{ width: '8px', height: '8px' }}></span>
            Add another email
          </button>
        ) },
        { label: 'Password', value: userData.password },
        { label: 'Phone number', value: userData.phone },
        { label: 'Address', value: userData.address }
      ].map((field, idx) => (
        <div className="d-flex justify-content-between align-items-center mb-4" key={idx}>
          <div>
            <p className="text-muted small mb-1">{field.label}</p>
            <p className="mb-0">{field.value}</p>
          </div>
          <div className="d-flex align-items-center">
            {field.extra}
            <button className="btn btn-outline-secondary btn-sm">Change</button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderHistoryTab = () => (
    <div className="mt-4">
      <h2 className="fw-bold fs-4 mb-4">Tickets/Bookings</h2>

      {/* Flights / Stays Tabs */}
      <div className="d-flex w-100 mb-3 border-bottom">
  <button
    className={`flex-grow-1 btn btn-link text-decoration-none text-center ${
      historyTab === 'flights'
        ? 'text-dark border-bottom border-2 fw-bold'
        : 'text-muted'
    }`}
    onClick={() => setHistoryTab('flights')}
  >
    <FaPlaneDeparture className="me-1" /> Flights
  </button>
  <button
    className={`flex-grow-1 btn btn-link text-decoration-none text-center ${
      historyTab === 'stays'
        ? 'text-dark border-bottom border-2 fw-bold'
        : 'text-muted'
    }`}
    onClick={() => setHistoryTab('stays')}
  >
    <FaHotel className="me-1" /> Stays
  </button>
</div>


      {/* Flights Content */}
      {historyTab === 'flights' && (
        <>
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="d-flex justify-content-between align-items-center border rounded p-3 mb-3 shadow-sm bg-white flex-wrap">
              <div className="d-flex align-items-center mb-2 mb-md-0">
                <img src="https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-1999.jpg" alt="Airline" style={{ width: 60 }} className="me-3" />
                <div>
                  <p className="mb-1 fw-semibold">Newark(EWR) ➝ Newark(EWR)</p>
                  <p className="mb-1 text-muted small">Flight time</p>
                  <p className="mb-0">12:00 pm - 6:00 pm</p>
                </div>
              </div>
              <div className="text-center mb-2 mb-md-0">
                <p className="mb-1 text-muted small">Date</p>
                <p className="mb-0">12/12</p>
              </div>
              <div className="text-center mb-2 mb-md-0">
                <p className="mb-1 text-muted small">Gate</p>
                <p className="mb-0">A12</p>
              </div>
              <div className="text-center mb-2 mb-md-0">
                <p className="mb-1 text-muted small">Seat</p>
                <p className="mb-0">126</p>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-primary me-2">Download Ticket</button>
                <button className="btn btn-outline-secondary">
                  <BiChevronRight />
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Stays Content */}
      {historyTab === 'stays' && (
        <>
          {[1, 2].map((_, idx) => (
            <div key={idx} className="d-flex justify-content-between align-items-center border rounded p-3 mb-3 shadow-sm bg-white flex-wrap">
              <div className="d-flex align-items-center mb-2 mb-md-0">
                <img src="https://www.grandhotelsitea.it/wp-content/uploads/2024/07/Modello_Gif_ROYAL-1.png" alt="Hotel" style={{ width: 60 , height: 60 }} className="me-3" />
                <div>
                  <p className="mb-1 fw-semibold">Grand Palace Hotel</p>
                  <p className="mb-1 text-muted small">Check-in: 14/12 • Check-out: 18/12</p>
                  <p className="mb-0">Room: Deluxe Suite</p>
                </div>
              </div>
              <div className="text-center mb-2 mb-md-0">
                <p className="mb-1 text-muted small">Guests</p>
                <p className="mb-0">2 Adults</p>
              </div>
              <div className="text-center mb-2 mb-md-0">
                <p className="mb-1 text-muted small">Booking ID</p>
                <p className="mb-0">STY12345</p>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-primary me-2">Download Booking</button>
                <button className="btn btn-outline-secondary">
                  <BiChevronRight />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );

  const renderPaymentMethodsTab = () => (
    <div className="mt-4">
      <h2 className="fw-bold fs-4 mb-4">Payment methods</h2>
      <p>No payment methods added yet.</p>
    </div>
  );

  return (
    <div className="container-fluid px-0">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        {/* Cover and Profile */}
        <div className="position-relative">
          <div style={{ height: '260px', overflow: 'hidden' }}>
            <img 
              src={userData.coverImage} 
              alt="Cover" 
              className="w-100 h-100 object-fit-cover" 
            />
            <button className="position-absolute top-0 end-0 m-3 btn btn-light btn-sm d-flex align-items-center text-primary">
              <FaUpload className="me-1" /> Upload new cover
            </button>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="position-relative" style={{ marginTop: '-48px' }}>
              <img 
                src={userData.profileImage} 
                alt="Profile" 
                className="rounded-circle border border-4 border-white object-fit-cover"
                style={{ width: '96px', height: '96px' }} 
              />
            </div>
            <div className="mt-2 text-center">
              <h1 className="fs-4 fw-bold">{userData.name}</h1>
              <p className="text-muted small">{userData.email}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="d-flex mt-4 border-bottom">
          {[
            { id: 'account', label: 'Account' },
            { id: 'history', label: 'History' },
            { id: 'payment', label: 'Payment methods' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-fill text-center py-2 border-0 bg-transparent ${
                activeTab === tab.id 
                ? 'border-bottom border-primary border-3 text-primary fw-medium' 
                : 'text-muted'
              }`}
              style={{
                borderBottomWidth: activeTab === tab.id ? '3px' : '0',
                marginBottom: activeTab === tab.id ? '-1px' : '0'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-3 mb-4">
          {activeTab === 'account' && renderAccountTab()}
          {activeTab === 'history' && renderHistoryTab()}
          {activeTab === 'payment' && renderPaymentMethodsTab()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
