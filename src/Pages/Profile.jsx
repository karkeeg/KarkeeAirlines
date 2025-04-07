import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('account');

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
            <button className="btn btn-outline-secondary btn-sm">
              Change
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderHistoryTab = () => (
    <div className="mt-4">
      <h2 className="fw-bold fs-4 mb-4">History</h2>
      <p></p>
    </div>
  );

  const renderPaymentMethodsTab = () => (
    <div className="mt-4">
      <h2 className="fw-bold fs-4 mb-4">Payment methods</h2>
      <p></p>
    </div>
  );

  return (
    <div className="container-fluid px-0">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        {/* Cover Image and Profile Section */}
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
        
        {/* Tabs - Distributed equally across width */}
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