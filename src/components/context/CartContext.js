"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize cart state

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);  // Load cart from localStorage
  }, []);
  

  const addToCart = (item) => {
    console.log("Adding item:", item._id); // Check the item structure
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem._id === item._id && cartItem.size === item.size
      );
  
      let updatedCart;
  
      if (existingItemIndex !== -1) {
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }
  
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  

  const removeFromCart = (itemId) => {
    console.log("Removing item with ID:", itemId); // Log the item ID
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item._id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  

  const updateCartItem = (itemId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === itemId ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
