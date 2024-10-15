// src/Gallery.js
import React, { useEffect, useState } from 'react';
import './GalleryCard.css';

import image1 from './image1.png'; 
import image2 from './image2.png';
import image3 from './image3.png'; 
import image4 from './image4.png';

const images = [image1,image2,image3,image4];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`gallery-item ${currentIndex === index ? 'active' : ''}`}
        >
          <img src={image} alt={`Achievement ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
