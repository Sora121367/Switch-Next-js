import React from "react";
// import CategoryCard from "../components/Homepage/CategoryCard";
// import StoreCard from "../components/Homepage/StoreCard";
// import DiscountCard from "../components/Homepage/DiscountCard";
// import BannerCard from "../components/Homepage/BannerCard";
// import ProductCard from "@/components/seller-components/ProductCard";
import Link from "next/link";
import ProductGrid from "@/components/Homepage/ProductGrid";
import ProductBox from "@/components/Homepage/ProductBox";
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import React Icons for Facebook and Instagram

const HomePage = () => {
  // create link when button get start go to signup page

  return (
    <div className="relative h-full w-full bg-slate-100">
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
          <Link href="/signup">
            <button
              className="mt-3 p-3 text-white bg-[#0B5754] rounded-md text-sm sm:text-md lg:text-xl lg:mt-16 hover:bg-blue-700 transition-all duration-300"
              aria-label="Get started for free"
            >
              Get started for free
            </button>
          </Link>
        </div>
      </div>

      {/* Feature Categories Section */}
      <div className="mt-20 px-3 py-8 bg-slate-100 w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Feature Categories
        </h1>
        
        {/* Trending Now Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 relative mt-8 mr-20">
          <div className="col-span-3">
            <div className="w-full flex items-center justify-between p-2 border rounded-2xl ml-8 mr-20">
              <span className="font-semibold">Trending now</span>
              <div className="flex space-x-2">
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="col-span-1">
            <main>
              <ProductBox />
            </main>
          </div> */}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 relative">
          <div className="col-span-3">
            <main className="container mx-auto p-4">
              <ProductGrid />
            </main>
          </div>
          <div className="col-span-1">
            <main>
              <ProductBox />
            </main>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-20 text-center">
            Create your own business
          </h1>
          <div className="mt-10 w-full max-w-[1050px] mx-auto">
            <img
              src="image13.png"
              alt="Create business"
              className="w-full h-auto object-contain" 
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-20 text-center">
            What is Switch?
          </h1>
          <main className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold mb-4">A community doing good</h2>
              <p className="text-gray-600 mb-4">
                Switch is a local online marketplace that brings <br />
                people together to create, sell, buy, and collect <br />
                items. We are also a community dedicated to <br />
                driving positive change for small businesses.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold mb-4">Support independent creators</h2>
              <p className="text-gray-600 mb-4">
                Switch is a local online marketplace that brings <br />
                people together to create, sell, buy, and collect <br />
                items. We are also a community dedicated to <br />
                driving positive change for small businesses.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold mb-4">Peace of mind</h2>
              <p className="text-gray-600 mb-4">
                Switch is a local online marketplace that brings <br />
                people together to create, sell, buy, and collect <br />
                items. We are also a community dedicated to <br />
                driving positive change for small businesses.
              </p>
            </div>
          </main>

          <main className=" bg-white container border min-w-full mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-start">
              <h2 className="text-l font-bold mb-4">Shop with Switch</h2>
              <p className="text-gray-600 mb-4">Customer Account</p>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-l font-bold mb-4">Sell</h2>
              <p className="text-gray-600 mb-4">Seller Account</p>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-l font-bold mb-4">Help</h2>
              <p className="text-gray-600 mb-4">Help center</p>
              <p className="text-gray-600 mb-4">Privacy setting</p>
              <div className="flex space-x-4 mt-4 ">
                <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                  <FaInstagram size={24} className="text-gray-600 hover:text-red-800 transition-colors" />
                </a>
                <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                  <FaFacebook size={24} className="text-gray-600 hover:text-blue-800 transition-colors" />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
