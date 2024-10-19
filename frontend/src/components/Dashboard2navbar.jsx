import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';
import logo1 from './logo1.png';  
import logo2 from './logo2.png';

function Navbar({ setIsAuthenticated }) { // Accept setIsAuthenticated as a prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear the auth token
    setIsAuthenticated(false); // Update the auth state
    navigate('/'); // Redirect to the home page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo left">
        <img src={logo1} alt="Left Logo" />
      </div>

      <div className="navbar-content">
        <div className="navbar-title">
          <h2>National Cadet Corps</h2>
          <h6 className='hh6'>4/9 COY, 9 KAR BATTALION, BANGLORE</h6>
        </div>
        <div className="navbar-links-container">
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/profile1" onClick={handleLinkClick}>Profile</Link></li>
            <li><Link to="/MarkAttendence" onClick={handleLinkClick}>Attendance</Link></li>
            <li><Link to="/cadets-info" onClick={handleLinkClick}>Cadet's Info</Link></li>
            <li>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-logo right">
        <img src={logo2} alt="Right Logo" />
      </div>
    </nav>
  );
}

export default Navbar;
