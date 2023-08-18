import React, { useState } from 'react';
import '../assets/css/nav.css'; // Import your CSS file

function Nav() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><h3>My Logo</h3></div>
      <ul className={`nav-list ${isMobileDropdownOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      {window.innerWidth < 600 && ( // Check screen width for conditional rendering
        <button className="mobile-menu-toggle" onClick={toggleMobileDropdown}>
          Toggle Menu
        </button>
      )}
    </nav>
  );
}

export default Nav;

