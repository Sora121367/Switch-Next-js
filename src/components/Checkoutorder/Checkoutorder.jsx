import React, { useState } from 'react';

const Checkoutorder = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Thank you for order!</h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          Order confirmation and updates will be sent to:
        </p>
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-900 focus:outline-none"
          />
        </div>

        <div className="border-t border-gray-200 my-4" />

        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-bold text-base text-black">Order from</span>{' '}
            <span className="text-green-900 font-bold text-base ">@Shoes-store</span>
          </p>
          <p className="text-sm text-gray-600 mt-3 ">
            <span className="font-medium mt-3">Date:</span> 09 December 2024 16:06
          </p>
          <p className="text-sm text-black border-t mt-3">
            <span className=" text-black font-bold text-base">Payment status:</span>{' '}
            <span className=" text-black text-base font-bold">Awaiting payment</span>
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Pay by:</span> Card
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Total:</span> $46.12
          </p>
        </div>

        <div className="border-t border-gray-200 my-4" />

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Your order</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <img
                src="/image8.png"
                alt="Vintage T-Shirt"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-black">Vintage T-Shirt</p>
                <p className="text-sm font-medium text-black">A Timeless Retro Look</p>
                <p className="text-sm text-black">Size: M</p>
                <p className="text-sm font-medium text-green-900">x2</p>
              </div>
              <p className="text-base font-bold text-green-900">$10.00</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/image20.png"
                alt="Flower T-shirt"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-black">Flower T-shirt</p>
                <p className="text-sm font-medium text-black">The real man</p>
                <p className="text-sm text-black">Size: L</p>
                <p className="text-sm font-medium text-green-900">x1</p>
              </div>
              <p className="text-base font-bold text-green-900">$20.00</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/shirtw.png"
                alt="Swag 1990"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-black">Swag 1990</p>
                <p className="text-sm font-medium text-black">Timeless Retro Look</p>
                <p className="text-sm  text-black">Size: XL</p>
                <p className="text-sm font-medium text-green-900">x3</p>
              </div>
              <p className="text-base font-bold text-green-900">$15.00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4" />

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Question for your order?</h2>
          <p className="text-sm text-gray-500 mt-2">
            We're here for you. Let us know how we can help.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <span className=" text-base text-gray-600">Chatting to:</span>{' '}
            <span className="text-green-900 font-bold text-base ">@Shoes-store</span>
          </p>
        </div>

        <button className="w-full border-2 font-medium text-green-950 py-2 rounded-md hover:bg-green-900 transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Checkoutorder;
