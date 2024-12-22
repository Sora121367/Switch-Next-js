import React from "react";
import CategoryCard from "../components/Homepage/CategoryCard";
import StoreCard from "../components/Homepage/StoreCard";
import DiscountCard from "../components/Homepage/DiscountCard";
import BannerCard from "../components/Homepage/BannerCard";


const HomePage = () => {
  //create link when button get start go to singup page

  return (
    <div className="relative w-full">
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src="./banner.png"
          alt="Homepage banner"
          className="w-full object-cover"
        />

        {/* Text and Button on Banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white font-bold text-xl sm:text-3xl lg:text-4xl leading-tight">
            Explore a World of Unique Shops and <br />
            Products Tailored Just for You!
          </h1>
          <button
            className="mt-3 p-3 text-white bg-[#0B5754] rounded-md text-sm sm:text-md lg:text-xl lg:mt-16 hover:bg-blue-700 transition-all duration-300"
            aria-label="Get started for free"
          >
            Get started for free
          </button>
        </div>
      </div>

      
      <div className="mt-20 px-3 py-8 bg-slate-100 w-full">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Feature Categories
        </h1>
         {/* <StoreCard />
        <BannerCard />
        <DiscountCard /> */}
      
        <div className="grid grid-cols-1  xl:grid-cols-4  gap-6 relative">
          
          <div className="row-span-2">
            <CategoryCard />
          </div>

          <div className="w-[1100px] h-[583px] bg-[#0B5754] rounded-[80px]">
            <div className=" relative px-4 py-[10px] mt-2">
              <StoreCard />
            </div>
            <div className=" absolute top-[0.6px] right-7   ">
              <DiscountCard />
            </div>
            <div className=" absolute bottom-[24px]">
              <BannerCard />
            </div>
            <div className=" absolute  bottom-[45px] right-11">
              <StoreCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
