import React, { useState } from 'react';
import './App.css';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import AddToCart from './components/AddToCart';
import Navbar from './components/Navbar';

// Sample product data (in a real app, this would come from an API)
const productData = {
  id: 1,
  name: "Premium Wireless Headphones",
  brand: "SoundMaster",
  price: 129.99,
  originalPrice: 199.99,
  rating: 4.5,
  reviewCount: 127,
  description: "Experience studio-quality sound with our Premium Wireless Headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for extended listening sessions.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Bluetooth 5.0",
    "Built-in microphone for calls",
    "Foldable design for easy storage"
  ],
  colors: ["Black", "Silver", "Midnight Blue"],
  images: [
    "https://placehold.co/500x500/222/white?text=Headphones+Black",
    "https://placehold.co/500x500/888/white?text=Headphones+Silver", 
    "https://placehold.co/500x500/123456/white?text=Headphones+Blue"
  ],
  stock: 15,
  shipping: "Free shipping"
};

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    alert(`${quantity} ${productData.name} (${selectedColor}) added to cart!`);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0 && newQuantity <= productData.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      
      <div className="product-container">
        <ProductImage 
          images={productData.images} 
          currentImageIndex={currentImageIndex}
          onImageChange={handleImageChange}
        />
        
        <div className="product-details">
          <ProductInfo 
            product={productData}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
          />
          
          <AddToCart 
            price={productData.price}
            originalPrice={productData.originalPrice}
            stock={productData.stock}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
            shipping={productData.shipping}
          />
        </div>
      </div>
    </div>
  );
}

export default App;