import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from './logo1.png';  
import logo2 from './logo2.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
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
            <li><Link to="/about" onClick={handleLinkClick}>Profile</Link></li>
            <li><Link to="/ContactForm" onClick={handleLinkClick}>Attendence</Link></li>
            <li><Link to="/events" onClick={handleLinkClick}>Cadet's Info</Link></li>
            <li><Link to="/events" onClick={handleLinkClick}>Logout</Link></li>
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
