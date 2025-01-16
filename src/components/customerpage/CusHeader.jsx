"use client";
import React, { useState } from "react";
import useAuth from "@/useAuth";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { IoHeartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const NavItems = ({ onClick = () => {},user,loading}) => (
  <div className="flex flex-col gap-8 lg:text-xl lg:flex-row">
    {/* Notification */}
    <IoMdNotificationsOutline className="hover:text-gray-400 cursor-pointer text-2xl" />

    {/* Wishlist */}
    <Link href="customerpage/whitelist">
      <IoHeartOutline className="hover:text-gray-400 cursor-pointer text-2xl" />
    </Link>
    {/* User Profile */}
    <div className="flex items-center gap-2">
      <FaUser className="text-2xl hover:text-gray-400 cursor-pointer" />
      {loading ? (
        <span className="text-sm">Loading...</span>
      ) : (
        <span className="text-sm">{user?.username || "Guest"}</span>
      )}
    </div>
  </div>
);

const CusHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <header className="top-0 left-0 right-0 z-50 py-5 text-white ">
      <nav className="container max-w-7xl mx-auto px-4 flex justify-between items-center ">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="logo"
            className="w-24 lg:w-30"
            width={170}
            height={70}
          />
          </Link>
        <div className="flex flex-row items-center gap-4">
            <select
              name="Categories"
              className="w-40 px-3 py-2 bg-gray-700 border border-gray-600 text-sm rounded-md text-white focus:outline-none"
            >
              <option value="fashion">Fashion</option>
              <option value="animal">Animal</option>
              <option value="material">Material</option>
            </select>
          </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavItems user={user} loading={loading} />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 max-sm:text-sm lg:space-x-8 text-2xl">
          <div className="flex items-center relative">
            {/* On small screens, show the input only when isSearchOpen is true */}
            <input
              type="text"
              placeholder="search..."
              className={`lg:w-[200px] lg:h-[26px] w-[150px] h-[20px] px-3 rounded-md  bg-transparent border-[1px] outline-none text-sm  ${isSearchOpen ? 'flex' : 'hidden'} lg:flex`}
            />
            <CiSearch
              aria-label="Search"
              className="hover:text-gray-400 cursor-pointer -ml-6 text-white max-sm:-ml-4"
              onClick={() => setSearchOpen(!isSearchOpen)} // Toggle the search input visibility on small screens
            />
          </div>

        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden text-white text-lg"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <TfiClose /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute z-10 right-0 w-[350px] h-[70vh] flex items-center justify-center bg-gray-900 bg-opacity-80">
          <NavItems onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default CusHeader;
