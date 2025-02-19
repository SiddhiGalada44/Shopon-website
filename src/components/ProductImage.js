// src/components/ProductImage.js
import React from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

function ProductImage({ images, currentImageIndex, onImageChange }) {
  const handlePrevImage = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    onImageChange(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    onImageChange(newIndex);
  };
  
  return (
    <div className="product-image-container">
      <div className="main-image-wrapper">
        <button className="image-nav-button prev" onClick={handlePrevImage}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="main-image">
          <img 
            src={images[currentImageIndex]} 
            alt={`Product view ${currentImageIndex + 1}`} 
          />
          <button className="zoom-button">
            <ZoomIn size={20} />
          </button>
        </div>
        
        <button className="image-nav-button next" onClick={handleNextImage}>
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="thumbnail-gallery">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => onImageChange(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImage;