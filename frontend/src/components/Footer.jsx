// src/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 CMRNCC. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className='done'>
    <h6>
        Done by Cadet
        <a className='done2' href="https://www.instagram.com/chandru._.kuruba/" target="_blank" rel="noopener noreferrer"> Chandru H (2023-2026) Batch</a>
    </h6>
</div>

    </footer>
  );
}

export default Footer;
