"use client";
import React, { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const CheckoutNav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-green-950 top-0 left-0 right-0 z-50 py-5 text-white  shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo and Dropdowns */}
        <div className="relative flex items-center gap-8">
          <img src="/newlogo.png" alt="logo" className="w-24" />
          <select
            name="Fashion"  
            className="w-28 px-3 py-2 bg-gray-700 border border-gray-600 text-sm rounded-md text-white focus:outline-none">
            <option value="fashion">Fashion</option>
            {/* Add more options */}
          </select>
          <select
            name="Animal"
            className=" w-fit px-3 py-2 bg-gray-700 border  border-gray-600 text-sm rounded-md text-white focus:outline-none">
            <option value="animal">Home & Garden</option>
            {/* Add more options */}
          </select>
          <select
            name="Material"
            className="w-28 px-3 py-2 bg-gray-700 border border-gray-600 text-sm rounded-md text-white focus:outline-none">
            <option value="material">Material</option>
            {/* Add more options */}
          </select>
          <a href="#">Best shop</a>
          <a href="#">New</a>
        </div>

        {/* Icons and Search */}
        <div className="flex items-center space-x-6 text-lg">
          {/* Search */}
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className={`lg:w-64 lg:h-10 w-48 h-9 px-4 rounded-md bg-gray-700 border border-gray-600 text-sm text-white focus:outline-none transition-all duration-200 
                ${
                isSearchOpen ? "block" : "hidden"
              }`}
            />
            <CiSearch
              aria-label="Search"
              className="hover:text-gray-400 cursor-pointer text-2xl -ml-8"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>

          {/* Notification */}
          <IoMdNotificationsOutline className="hover:text-gray-400 cursor-pointer text-2xl" />

          {/* Wishlist */}
          <IoHeartOutline className="hover:text-gray-400 cursor-pointer text-2xl" />

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <FaUser className="hover:text-gray-400 cursor-pointer text-2xl" />
            <p className="text-base">Ung Mengly</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CheckoutNav;
