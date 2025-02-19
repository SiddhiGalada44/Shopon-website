// src/components/AddToCart.js
import React from 'react';
import { ShoppingCart, Minus, Plus, Truck } from 'lucide-react';

function AddToCart({ 
  price, 
  originalPrice, 
  stock, 
  quantity, 
  onQuantityChange, 
  onAddToCart,
  shipping 
}) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };
  
  const handleDecrement = () => {
    onQuantityChange(quantity - 1);
  };
  
  const handleQuantityInput = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      onQuantityChange(value);
    }
  };
  
  return (
    <div className="add-to-cart-section">
      <div className="price-container">
        <div className="current-price">${price.toFixed(2)}</div>
        {originalPrice && (
          <>
            <div className="original-price">${originalPrice.toFixed(2)}</div>
            <div className="discount-badge">{discount}% OFF</div>
          </>
        )}
      </div>
      
      <div className="stock-info">
        {stock > 0 ? (
          <span className="in-stock">
            {stock > 10 
              ? 'In Stock' 
              : `Only ${stock} left in stock - order soon`
            }
          </span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>
      
      <div className="quantity-selector">
        <label htmlFor="quantity">Quantity:</label>
        <div className="quantity-controls">
          <button 
            className="quantity-button"
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            <Minus size={16} />
          </button>
          <input
            id="quantity"
            type="number"
            min="1"
            max={stock}
            value={quantity}
            onChange={handleQuantityInput}
          />
          <button 
            className="quantity-button"
            onClick={handleIncrement}
            disabled={quantity >= stock}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      
      <button 
        className="add-to-cart-button"
        onClick={onAddToCart}
        disabled={stock === 0}
      >
        <ShoppingCart size={20} />
        Add to Cart
      </button>
      
      <button className="buy-now-button" disabled={stock === 0}>
        Buy Now
      </button>
      
      <div className="shipping-info">
        <Truck size={18} />
        <span>{shipping}</span>
      </div>
    </div>
  );
}

export default AddToCart;