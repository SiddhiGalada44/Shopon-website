// src/components/Navbar.js
import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <ShoppingCart size={28} />
            <span style={{ marginLeft: "8px" }}>ShopOn</span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">Categories</a>
          <a href="#" className="nav-link">Deals</a>
        </div>
      </div>
      
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button className="search-button">
            <Search size={20} />
          </button>
        </div>
        
        <div className="nav-icons">
          <button className="icon-button">
            <User size={20} />
          </button>
          <button className="icon-button cart-button">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <button className="mobile-menu-button">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;