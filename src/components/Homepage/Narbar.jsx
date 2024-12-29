import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#162623] w-full h-14 flex items-center">
      <nav className="flex justify-between items-center w-full px-4 md:px-12">
        {/* Logo */}
        <img src="src/assets/logo.png" alt="Company logo" className="h-6" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button className="text-white">Login</button>
          <button className="text-black bg-white px-4 py-2 rounded">
            Start for free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none text-xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <TfiClose /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-[#1e3833] flex flex-col space-y-4 p-4 z-10 md:hidden">
            <button className="text-black bg-white px-4 py-2 rounded text-center">
              Login
            </button>
            <button className="text-black bg-white px-4 py-2 rounded text-center">
              Start for free
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
