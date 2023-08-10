import React, { useState } from 'react';
import logo from '../assets/react.svg';
import styles from '../assets/css/navbar.module.css';

function Navbar() {
  const [collapsed, setCollapsed] = useState(window.screen.width > 600 ? false : true);
  console.log(window.screen.width )
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles['navbar-container']}>
      <div className={styles.navlogo}>
        <img src={logo} alt="" className={styles.logo} />
        <h2 className={styles.brandname}>Brand Name</h2>
      </div>
      <div className={`${styles.navcollapse} ${collapsed ? '' : styles.hidden}`}>
          <button className={styles.collapsibleButton} onClick={toggleCollapse}>
            <span className={styles.collapsibleIcon}></span>
          </button>
        
        </div>
      <div className={`${styles.navigation} ${collapsed ? styles.collapsed : ''}`}>
        <ul className={`${styles['nav-buttons']} ${collapsed ? styles.hidden : ''}`}>
          <li className={styles['nav-home']}><a href="/">Home</a></li>
          <li className={styles['nav-booking']}><a href="/book">Booking</a></li>
          <li className={styles['nav-mail']}><a href="mailto:test@mail.com">Email Us</a></li>
          <li className={styles['nav-mobile']}><a href="tel:+919843544970">Contact Us</a></li>
          <li className={styles['nav-about']}><a href="/about">About Us</a></li>
        </ul>
       
      </div>
    </div>
  );
}

export default Navbar;
