import React, { useState } from 'react';
import '../assets/css/nav.css'; // Import your CSS file
import { Link } from 'react-router-dom'
function Nav() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><h3>My Logo</h3></div>
      <ul className={`nav-list ${isMobileDropdownOpen ? 'active' : ''}`}>
        {/* <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/about'>About</Link></li>
        <li><Link to ='/booking'>Book Service</Link></li>
        <li><Link to ='/contact'> Contact Us</Link></li> */}
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
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

