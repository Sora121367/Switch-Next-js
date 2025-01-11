
import React from "react";

const Header = () => {
  return (
    <header className="bg-green-950 top-0 left-0 right-0 z-50 py-5 text-white  shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="relative flex items-center gap-8">
          <img src="/newlogo.png" alt="logo" className="w-24" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
