// src/components/ProductInfo.js
import React from 'react';
import { Star, Heart, Share2 } from 'lucide-react';

function ProductInfo({ product, selectedColor, onColorChange }) {
  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={20} fill="#FFD700" color="#FFD700" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="half-star">
          <Star size={20} fill="#FFD700" color="#FFD700" style={{ clipPath: 'inset(0 50% 0 0)' }} />
          <Star size={20} color="#FFD700" style={{ position: 'absolute', left: 0 }} />
        </span>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={20} color="#FFD700" />);
    }
    
    return stars;
  };
  
  return (
    <div className="product-info">
      <div className="product-header">
        <div>
          <h1 className="product-name">{product.name}</h1>
          <p className="product-brand">By {product.brand}</p>
        </div>
        <div className="action-buttons">
          <button className="icon-text-button">
            <Heart size={20} />
            <span>Save</span>
          </button>
          <button className="icon-text-button">
            <Share2 size={20} />
            <span>Share</span>
          </button>
        </div>
      </div>
      
      <div className="product-ratings">
        <div className="stars">{renderStars(product.rating)}</div>
        <span className="rating-value">{product.rating}</span>
        <span className="review-count">({product.reviewCount} reviews)</span>
      </div>
      
      <div className="product-description">
        <p>{product.description}</p>
      </div>
      
      <div className="product-features">
        <h3>Key Features</h3>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="color-selection">
        <h3>Color: <span>{selectedColor}</span></h3>
        <div className="color-options">
          {product.colors.map(color => (
            <button
              key={color}
              className={`color-option ${color === selectedColor ? 'selected' : ''}`}
              style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
              onClick={() => onColorChange(color)}
              aria-label={color}
              title={color}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;