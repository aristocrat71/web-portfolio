import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <img 
          src={images[currentIndex]} 
          alt={`Project screenshot ${currentIndex + 1}`}
          className="slider-image"
        />
        
        {images.length > 1 && (
          <>
            <button 
              className="slider-arrow slider-arrow-left" 
              onClick={prevSlide}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button 
              className="slider-arrow slider-arrow-right" 
              onClick={nextSlide}
              aria-label="Next image"
            >
              ›
            </button>
            
            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSlider; 