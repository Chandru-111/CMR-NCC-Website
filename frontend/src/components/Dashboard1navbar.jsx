import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo1 from './logo1.png';  
import logo2 from './logo2.png';

function Navbar({ setIsAuthenticated }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEnrollMenuOpen, setIsEnrollMenuOpen] = useState(false);
    const menuRef = useRef(null); // Create a ref for the menu

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsEnrollMenuOpen(false); // Close the enroll menu
    };

    const toggleEnrollMenu = () => {
        setIsEnrollMenuOpen(!isEnrollMenuOpen);
    };
    const redirectToLogin = () => {
        window.location.href = 'http://127.0.0.1:8000/login/';  // Redirect to the general login page
    };

    // Function to handle the redirect to the login page for view attendance
    const redirectToViewAttendanceLogin = () => {
        window.location.href = 'http://127.0.0.1:8000/view-percentage/login/';  // Redirect to view attendance login page
    };
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/');
        setIsMenuOpen(false);
        setIsEnrollMenuOpen(false);
    };

    // Close the menu when clicking outside of it
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
                        <Link onClick={redirectToLogin}>Attendence</Link>
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
