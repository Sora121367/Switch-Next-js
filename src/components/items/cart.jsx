"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/components/context/CartContext"; // Import the useCart hook
import { FaTrashAlt } from "react-icons/fa"; // Trash icon to remove items
import Link from "next/link"; // For checkout link

const Cart = ({ isOpen, closeCart }) => {
  const { cart, removeFromCart, setCart } = useCart(); // Get cart items and actions
  const [isUpdating, setIsUpdating] = useState(false); // State for updating item quantities

  // Function to calculate the total price of the cart
  const calculateTotalPrice = () => {
    const total = cart.reduce((total, item) => {
      const itemTotal = (item.price * item.quantity).toFixed(2); 
      return total + parseFloat(itemTotal); // Parse it back to a float for the total
    }, 0);

    console.log(`Total Price: ${total.toFixed(2)}`); // Round total price to 2 decimals
    return total;
  };

  const totalPrice = calculateTotalPrice(); // Recalculate total price when cart changes

  // Fetch cart items on mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("/api/cart", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setCart(data); // Update the cart context with fetched data
        } else {
          console.error("Failed to fetch cart:", data.message);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [setCart]);

  // Handle Quantity Change
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent reducing quantity below 1
    const updatedCart = cart.map(item =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart); // Update cart with new quantities
  };

  const handleRemoveItem = async (itemId) => {
    try {
      console.log("Removing item with ID:", itemId); // Debug log
      if (!itemId) {
        alert("Item ID is missing. Cannot remove item.");
        return;
      }
  
      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ itemId }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Item removed successfully");
        removeFromCart(itemId); // Optimistically update the UI
      } else {
        console.error("Error from server:", data.message);
        alert(`Failed to remove item: ${data.message}`);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      alert("An error occurred while removing the item from your cart.");
    }
  };
  

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 transition-all ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={closeCart}
    >
      <div
        className="bg-white w-1/3 h-full p-4 overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {cart.length === 0 ? (
          <p className="text-center text-2xl text-red-400">Your cart is empty</p>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-green-300 text-xl font-bold mb-4">Your Cart</h2>
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <p className="text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</p> 
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <p className="text-lg text-black font-semibold">{item.quantity}</p>
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Item */}
                  <FaTrashAlt
                    className="cursor-pointer text-red-500"
                    onClick={() => handleRemoveItem(item._id)}
                  />
                </div>
              </div>
            ))}

            {/* Display Total Price */}
            <div className="mt-4 text-right">
              <p className="text-black text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
            </div>

            {/* Checkout Button */}
            <div className="mt-4">
              <Link href="/customerpay">
                <button className="bg-blue-600 text-white py-2 px-12 rounded-md hover:bg-blue-500 w-full">
                  Go to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
