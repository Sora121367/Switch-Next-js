import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Shoes store (Delivery within 1-3 days)');
  const [deliveryFee] = useState(1.25);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure client-only rendering
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !address) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Checkout successful!');
  };

  // Avoid hydration issues during SSR
  if (!isClient) {
    return null;
  }

  return (
    <div
      className="">
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
  );
};

export default Checkout;
