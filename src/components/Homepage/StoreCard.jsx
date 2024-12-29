import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const StoreCard = () => {
  return (
    <div className="w-[525px] h-[370px] max-sm:w-[425px] max-sm:h-[350px] bg-white rounded-[60px] overflow-hidden p-6 flex items-center justify-between shadow-lg gap-x-8">
      {/* Left Section: Store Image and Shop Now Button */}
      <div className="flex flex-col items-center space-y-4">
        <img src="/image2.png" className="w-[210px] max-sm:w-[180px] object-cover" />
        <button className="w-[210px] max-sm:w-[160px] max-sm:py-1 px-4 py-2 bg-black text-white rounded-md hover:bg-[#084944] transition-all">
          Shop Now
        </button>
      </div>

      {/* Right Section: Store Details */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-[#333] mb-4 max-sm:text-xl">CLOTHES STORE</h1>

        {/* Categories */}
        <div className="mt-6 space-y-4 relative max-sm:right-3">
          <div className="flex items-center space-x-4 relative left-20">
            <button className="w-[136px] h-[30px] bg-[#162623] text-white py-1 rounded-full text-sm text-left pl-4">
              Streetwear
            </button>
            <img
              src="/image3.png"
              alt="Streetwear"
              className="w-[24px] object-cover rounded-full absolute right-[101px]"
            />
          </div>
          <div className="flex items-center space-x-4 relative ">
            <button className="w-[136px] h-[30px] bg-[#162623] text-white py-1 rounded-full text-sm text-left pl-[90px]">
              KDMV
            </button>
            <img
              src="/image3.png"
              alt="Streetwear"
              className="w-[24px] object-cover rounded-full absolute -left-[14px]"
            />
          </div>
          <div className="flex items-center space-x-4 relative left-20 ">
            <button className="w-[136px] h-[30px] bg-[#162623] text-white py-1 rounded-full text-[12px] text-left pl-4">
            The north face
            </button>
            <img
              src="/image3.png"
              alt="Streetwear"
              className="w-[24px] object-cover rounded-full absolute right-[101px]"
            />
          </div>
        </div>

        {/* Subscribe Button */}
        <div className="mt-6">
          <button className="w-[218px] h-[40px] bg-transparent rounded-full border-2 text-lg text-black hover:bg-[#084944] transition-all flex items-center justify-center">
            Subscribe
          </button>
        </div>

        {/* Divider */}
        <hr className="my-4 border-t-2 w-[230px] border-gray-200" />

        {/* Links */}
        <div className="flex space-x-6 text-3xl text-[#0B5754] ml-10 max-sm:text-2xl">
          <a href="#" className="">
          
          <FaSquareInstagram />
          </a>
          <a href="#" className="">
          <FaFacebook />
          </a>
          <a href="#" className="">
          <PiTelegramLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
