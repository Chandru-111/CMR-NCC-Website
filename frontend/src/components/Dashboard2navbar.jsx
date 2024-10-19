import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo1 from './logo1.png';  
import logo2 from './logo2.png';

function Navbar({ setIsAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollMenuOpen, setIsEnrollMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsEnrollMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleEnrollMenu = () => {
    setIsEnrollMenuOpen(!isEnrollMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsEnrollMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
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
            <li>
              <Link to="#" onClick={toggleEnrollMenu}>Attendance</Link>
              <ul className={`dropdown-menu ${isEnrollMenuOpen ? 'show' : ''}`}>
                <li>
                  <a href="#" download onClick={handleLinkClick}>View My</a>
                </li>
                <li><Link to="#" onClick={handleLinkClick}>Cadets</Link></li>
              </ul>
            </li>
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
