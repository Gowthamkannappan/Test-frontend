import React, { useState } from 'react';
import '../assets/css/test.css'; // Import your CSS file

function Test1() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(window.screen.width > 600 ? false : true);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Logo</div>
      <ul className={`nav-list ${isMobileDropdownOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div
        className={`mobile-dropdown ${isMobileDropdownOpen ? 'active' : ''}`}
      >
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileDropdown}>
        Toggle Menu
      </button>
    </nav>
  );
};

export default Test1;
