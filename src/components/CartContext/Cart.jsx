// src/context/CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Add other cart functions like removeFromCart, clearCart, etc.

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
