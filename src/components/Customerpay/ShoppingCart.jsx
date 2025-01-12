import React from 'react';
import { FaTrash } from 'react-icons/fa';  // Import Trash Bin Icon
import { FaRegTrashAlt } from "react-icons/fa";

const ShoppingCart = () => {
  return (
    <div className="w-screen bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg flex flex-col lg:flex-row">

        {/* Shopping Cart Section */}
        <div className="w-full p-6 flex flex-col items-center mb-6">
          <h2 className="text-xl font-bold mb-4 text-left">Shopping Cart</h2>
          <div className="space-y-6 w-full">
            {/* Item 1 */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img
                  src="/shirt.png"
                  alt="Vintage T-Shirt"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Vintage T-Shirts:</h3>
                  <p className="text-sm text-gray-500">A Timeless Retro Look</p>
                  <p className="text-base text-green-900 font-bold mt-2">$10.00</p>
                  <p className="text-sm font-bold text-black">Size: M</p>
                  <p className="text-sm text-green-900">Quantity: 1</p>
                </div>
              </div>
              {/* Trash Bin Icon */}
              <FaRegTrashAlt className="text-black cursor-pointer" size={20} />
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img
                  src="/shirtg.png"
                  alt="Flower T-Shirt"
                  className="w-22 h-20 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Flower T-Shirts:</h3>
                  <p className="text-sm text-gray-500">The Real Man</p>
                  <p className="text-base text-green-900 font-bold mt-2">$20.00</p>
                  <p className="text-sm font-bold text-black">Size: L</p>
                  <p className="text-sm text-green-900">Quantity: 1</p>
                </div>
              </div>
              {/* Trash Bin Icon */}
              <FaRegTrashAlt className="text-black cursor-pointer" size={20} />
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img
                  src="/shirto.png"
                  alt="Swag 1999 T-Shirt"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Swag 1999</h3>
                  <p className="text-sm text-gray-500">Timeless Retro Look</p>
                  <p className="text-base font-bold text-green-900 mt-2">$15.00</p>
                  <p className="text-sm font-bold text-black">Size: XL</p>
                  <p className="text-sm text-green-900">Quantity: 1</p>
                </div>
              </div>
              {/* Trash Bin Icon */}
              <FaRegTrashAlt className="text-black cursor-pointer" size={20} />
            </div>
          </div>

          {/* Totals */}
          <div className="mt-6 border-t-4 pt-4 w-full">
            <div className="flex justify-between w-full">
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-sm font-semibold">$45.00</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-sm text-gray-500">Delivery fee</p>
              <p className="text-sm font-semibold">$1.25</p>
            </div>
            <div className="border-t-2 flex justify-between mt-2 w-full">
              <p className="text-lg font-bold">Amount to pay</p>
              <p className="text-lg font-bold">$46.25</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-gray-200"></div>
        
        {/* Checkout Section */}
        <div className="w-full text-left p-6 flex flex-col items-center pt-6">
          <h2 className="text-xl font-bold mb-4 text-left">Checkout</h2>
          <form className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 text-left">Enter your email address.</label>
            <input
              type="email"
              placeholder="menglyung44@gmail.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300 mb-4"
            />

            {/* Delivery Address */}
            <label className="block mb-2 text-sm font-bold text-gray-700 text-left">
              Delivery address
            </label>
            <input
              type="text"
              placeholder="Ung Mengly, Phnom Penh"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300 mb-4"
            />

            {/* Delivery Options */}
            <div className="mb-4 flex items-center space-x-2">
              <img 
                src="/logoS.png"
                alt="Delivery Logo"
                className="w-7 h-7"
              />
              <p className="text-sm font-bold text-black text-left">Delivery: $1.25 <br />Shoes store (Delivery within 1-3 days)</p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-950 text-white font-bold py-2 rounded-md hover:bg-green-800 transition"
            >
              Proceed to Checkout
            </button>
          </form>

          {/* Next Steps */}
          <div className="mt-6 text-sm text-left">
            <h3 className="font-bold text-xl">NEXT</h3>
            <hr className='border-t-2 mt-2 text-black'/>
            <p className="mt-3 font-bold ">Payment information</p>
            <p className="mt-1 text-gray-500">
              Choose a payment method and enter your payment details.
            </p>
            <p className="mt-2 font-bold ">Order confirmation</p>
            <p className="mt-1 text-gray-500">
              Place your order and receive a confirmation email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
