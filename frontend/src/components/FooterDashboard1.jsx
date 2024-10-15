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
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div className='done'>
    <h6>
        Done by Cadet <a href="https://github.com/chandru" target="_blank" rel="noopener noreferrer" className='done1'>Chandru H</a> and 
        <a className='done2' href="https://github.com/Akash8245" target="_blank" rel="noopener noreferrer"> Akash M</a>
    </h6>
</div>

    </footer>
  );
}

export default Footer;
