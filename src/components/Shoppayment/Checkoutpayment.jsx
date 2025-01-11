import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import Footer from './Footer';
const Checkoutpayment = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row items-center md:items-start mt-20">
        {/* Image Container */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:ml-40">
          <div className="relative w-full h-full border-gray-300 rounded-2xl overflow-hidden flex items-center justify-center">
            <Image
              src="/shirt.png"
              alt="Vintage T-Shirt"
              layout="intrinsic"
              width={300}
              height={300}
              className="rounded-2xl object-cover"
            />
          </div>
          {/* Small Images */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <div className="relative w-24 h-24 bg-slate-300 border border-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/shirtg.png"
                alt="Small Shirt 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-24 h-24 bg-slate-300 border border-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/shirtw.png"
                alt="Small Shirt 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-24 h-24 bg-slate-300 border border-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/shirto.png"
                alt="Small Shirt 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white w-full md:w-1/2 p-4 md:pl-8 rounded-2xl mt-4 md:mt-4 md:mr-80">
          <h1 className="text-3xl font-bold">Vintage T-Shirts: A Timeless Retro Look</h1>
          <p className="text-xl text-gray-700 mt-2">$10.00</p>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <div className="flex gap-2">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-sm font-medium cursor-pointer shadow-md hover:bg-gray-200">
                S
              </div>
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-sm font-medium cursor-pointer shadow-md hover:bg-gray-200">
                M
              </div>
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-sm font-medium cursor-pointer shadow-md hover:bg-gray-200">
                L
              </div>
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-sm font-medium cursor-pointer shadow-md hover:bg-gray-200">
                XL
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="">Items in the bag</p>
          </div>
          <div className="mt-6 flex flex-col gap-1">
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 border border-gray-300 shadow-sm">
              Add More
            </button>
            <button className="bg-green-950 text-white py-2 px-4 rounded-md hover:bg-green-800">
              Add to Bag
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Product Details</h2>
            <p className="text-gray-600 mt-2">
              This boho style blue jeans coverall has strong summer vibes. Inspired by freedom and youth, this coverall was designed to bring you only good memories. Casual yet stylish, this sleeveless coverall will leave you looking effortlessly cool. Add bright socks, high platform shoes, and here you are, the coolest girl in town. Fabric & care.
            </p>
          </div>
          <hr className="border-t-2 border-gray-300 my-4 w-full" />

          <div className="flex space-x-4 mt-4 items-center justify-center">
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram size={24} className="text-gray-600 hover:text-red-800 transition-colors" />
            </a>
            <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook size={24} className="text-gray-600 hover:text-blue-800 transition-colors" />
            </a>
            <a href="https://www.telegram.com" target="_blank" aria-label="Telegram">
              <FaTelegram size={24} className="text-gray-600 hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Checkoutpayment;
