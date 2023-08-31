import React, { useState } from 'react';
import '../assets/css/nav.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };
  const brandStyle={}
  return (
    <nav className="navbar">
      <div className="logo">
          <Link to="/">
            <h2 style={brandStyle}>My Brand</h2>
          </Link>
       
      </div>
      <ul className={`nav-list ${isMobileDropdownOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/booking">Book Service</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {window.innerWidth < 600 && (
        <button className="mobile-menu-toggle" onClick={toggleMobileDropdown}>
          Toggle Menu
        </button>
      )}
    </nav>
  );
}

export default Navbar;
