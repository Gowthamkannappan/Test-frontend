import React, { useState, useEffect } from 'react';
import Img1 from '../assets/images/sampleImg/image2.jpeg';
import Img2 from '../assets/images/sampleImg/image3.jpeg';
import Img3 from '../assets/images/sampleImg/image4.jpeg';
import Img4 from '../assets/images/sampleImg/image5.jpeg';

import '../assets/css/carousel.css'; // Import your CSS file


function Carousel() {
  const [display, setDisplay] = useState(0);
  const images = [Img4, Img3, Img2, Img1];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay((prevDisplay) => (prevDisplay + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const imageSlide ={
    width:'100vw',
    height:'65vh'
  }

  return (
    <div>
      <div className='Carousel'>
        <img style={imageSlide} src={images[display]} alt={`Image ${display}`} />
      </div>
    </div>
    
  );
}

export default Carousel;
