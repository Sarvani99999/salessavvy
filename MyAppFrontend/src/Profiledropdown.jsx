
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useravatar from './useravatar.png';
import './assets/styles.css';

export function ProfileDropdown({ username }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleProfileClick = () => setShowProfile(!showProfile);
  const handleOrdersClick = () => navigate('/orders');

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:9090/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        console.log('User successfully logged out');
        navigate('/');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="profile-dropdown">
      <button className="profile-button" onClick={toggleDropdown}>
        <img
          src={useravatar}
          alt="User Avatar"
          className="user-avatar"
          onError={(e) => { e.target.src = 'fallback-logo.png'; }}
        />
        <span className="username">{username}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={handleProfileClick} className="dropdown-item">Profile</button>

          {showProfile && (
            <div className="profile-info" style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
              <p><strong>Username:</strong> {username}</p>
            </div>
          )}

          <button onClick={handleOrdersClick} className="dropdown-item">Orders</button>
          <button className="profile-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}






