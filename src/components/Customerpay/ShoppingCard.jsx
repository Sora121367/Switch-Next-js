"use client";
import React, { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ShoppingCard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Vintage T-Shirts', description: 'A Timeless Retro Look', size: 'M', quantity: 1, price: 10, image: '/shirt.png' },
    { id: 2, name: 'Flower T-Shirts', description: 'The real man', size: 'L', quantity: 3, price: 20, image: '/shirto.png' },
    { id: 3, name: 'Swag 1999', description: 'Timeless Retro Look', size: 'XL', quantity: 1, price: 15, image: '/shirtg.png' },
  ]);

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Shoes store (Delivery within 1-3 days)');
  const [deliveryFee] = useState(1.25);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure client-only rendering
  }, []);

  const removeItem = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !address) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Checkout successful!');
  };

  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const amountToPay = total + deliveryFee;

  if (!isClient) return null; // Avoid hydration issues during SSR

  return (
    <div className="h-screen flex relative">
      {/* Shopping Cart with left border */}
      <div className="ml-16 p-6 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">Shopping cart</h2>
        <div className="space-y-4">
          {products.map((product) => (
            <div className="flex items-center justify-between" key={product.id}>
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-lg font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
                <p className="text-gray-600">Size: {product.size}</p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
              </div>
              <button
                className="text-black hover:text-red-700"
                onClick={() => removeItem(product.id)}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t pt-4">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Delivery fee</p>
            <p className="text-lg font-semibold">${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-4 border-t">
            <p className="text-lg font-bold">Amount to pay</p>
            <p className="text-lg font-bold">${amountToPay.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Checkout Box with right border and centered, wider width */}
      <div className="h-full bg-white shadow-lg p-6 overflow-y-auto border-l border-gray-300 w-96 mx-auto">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="menglyung44@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="delivery-address" className="block text-gray-700 font-bold mb-2">Delivery Address</label>
            <input
              type="text"
              id="delivery-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Ung Mengly, Phnom Penh"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="delivery-options" className="block text-gray-700 font-bold mb-2">Delivery Options</label>
            <select
              id="delivery-options"
              value={deliveryOption}
              onChange={(e) => setDeliveryOption(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="Shoes store (Delivery within 1-3 days)">Shoes store (Delivery within 1-3 days)</option>
            </select>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Delivery fee</p>
            <p className="text-lg font-bold">${deliveryFee.toFixed(2)}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600"
          >
            Proceed to Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCard;
