import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home'; // Import your Home component
import Contact from './components/Contact'; // Import your Contact component
import Booking from './containers/booking'; // Import your Services component
import About from './components/About'; // Import your About component
function RouterComponent() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    );
  }
  
  export default RouterComponent;
  