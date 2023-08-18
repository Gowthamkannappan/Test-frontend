import React, { useState, useEffect } from 'react';
import Img from '../assets/images/gitstages.png';
import Img1 from '../assets/images/untracked.png';
import Img2 from '../assets/images/comitted.png';
import Img3 from '../assets/images/pushed.png';
import Img4 from '../assets/images/sql.png';
import '../assets/css/carousel.css'; // Import your CSS file


function Carousel() {
  const [display, setDisplay] = useState(0);
  const images = [Img, Img1, Img2, Img3, Img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay((prevDisplay) => (prevDisplay + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className='Carousel'>
      <img src={images[display]} alt={`Image ${display}`} />
    </div>
  );
}

export default Carousel;
