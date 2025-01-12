"use client";
import React, { useState } from "react";
import useAuth from "@/useAuth";
import { IoHeartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const CustomerHeader = ({ category, onCategoryChange }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <header className="top-0 left-0 right-0 z-50 py-5 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo and Dropdowns */}
        <div className="flex items-center gap-8">
          <img src="/logo.png" alt="logo" className="w-24" />
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-48 px-3 py-2 bg-gray-700 border border-gray-600 text-sm rounded-md text-white focus:outline-none"
          >
            <option value="all">All</option>
            <option value="fashion">Fashion</option>
            <option value="animal">Animal</option>
            <option value="shoes">Shoes</option>
            <option value="material">Material</option>
          </select>
        </div>

        {/* Icons and Search */}
        <div className="flex items-center space-x-6 text-lg">
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className={`lg:w-64 lg:h-10 w-48 h-9 px-4 rounded-md bg-gray-700 border border-gray-600 text-sm text-white focus:outline-none transition-all duration-200 ${
                isSearchOpen ? "block" : "hidden"
              }`}
            />
            <CiSearch
              aria-label="Search"
              className="hover:text-gray-400 cursor-pointer text-2xl -ml-8"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>

          <IoMdNotificationsOutline className="hover:text-gray-400 cursor-pointer text-2xl" />
          <IoHeartOutline className="hover:text-gray-400 cursor-pointer text-2xl" />

          <div className="flex items-center gap-3">
            <FaUser className="hover:text-gray-400 cursor-pointer text-2xl" />
            {loading ? (
              <p className="text-base">Loading...</p>
            ) : (
              <p className="text-base">{user?.username || "Guest"}</p>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CustomerHeader;
