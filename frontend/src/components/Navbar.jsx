
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from './logo1.png';  
import logo2 from './logo2.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollMenuOpen, setIsEnrollMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEnrollMenu = () => {
    setIsEnrollMenuOpen(!isEnrollMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsEnrollMenuOpen(false); 
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
            <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/ContactForm" onClick={handleLinkClick}>Contact</Link></li>
            <li><Link to="/events" onClick={handleLinkClick}>Events</Link></li>
            <li><Link to="/Register" onClick={handleLinkClick}>Register</Link></li>
            <li>
              <Link to="#" onClick={toggleEnrollMenu}>Enroll</Link>
              <ul className={`dropdown-menu ${isEnrollMenuOpen ? 'show' : ''}`}>
                <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSeUvK14rlEehNOzksdru6a5j6NZnTkBnsyuzG7ni7icWKsKZg/viewform" onClick={handleLinkClick}>Register</Link></li>
                <li>
                  <a href="https://e1d095c9-0efb-4089-844c-bc647985ec33.filesusr.com/ugd/7fc4ac_7db0a51512964a5aa82529d449910e41.pdf" download onClick={handleLinkClick}>Enroll Form</a>
                </li>
              </ul>
            </li>
            <li><Link to="/Login" onClick={handleLinkClick}>Login</Link></li>
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
