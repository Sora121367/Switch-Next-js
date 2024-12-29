import React, { useState, useEffect } from "react";
import Card from "./Card";
import { products } from "../constants/index.js";
import { GrMapLocation } from "react-icons/gr";
import Footer from "../Footer.jsx";

const SellerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for images
  const images = [
    "src/assets/image6.png",
    "src/assets/image7.png",
    "src/assets/image5.png",
  ];

  // Duration for auto-slide (in ms)
  const SLIDE_DURATION = 3000;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="w-full h-auto absolute top-[80px]">
      {/* Hero Section */}
      <div className="w-full h-[500px] flex items-center gap-6 px-4 text-white sm:px-60 sm:gap-20">
        {/* Static Content */}
        <div className="flex flex-col items-center mt-10">
          {/* Sliding Images */}
          <div className="relative w-[210px] md:w-[350px] overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-[210px] md:w-[350px] flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex gap-2 py-3">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${
                  index === currentSlide ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Static Text Section */}
        <div className="space-y-5">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Shoes by <br />
            Nike
          </h1>
          <button className="w-[110px] h-10 text-xl text-center rounded-md bg-[#0B5754] hover:bg-[#086d68] transition-all sm:w-[120px] sm:h-12">
            Shop now
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full h-66 bg-[#1F2127] flex text-white">
        <div className="text-xl font-bold p-6 py-16 lg:text-4xl lg:px-20">
          <h1>Hey!</h1>
        </div>
        <div className="flex items-center w-[76%] p-3 py-7 ml-10 text-sm lg:w-1/2 lg:text-lg lg:ml-72">
          <p>
            We are a small shoe store based in Phnom Penh. If you're a fan of
            stylish and comfortable footwear, come visit us!
            <br />
            <br />
            Every pair in our store is unique. Our shoes are well-designed to
            provide comfort for all-day wear, whether you're exploring the city
            or enjoying a casual outing.
            <br />
            <br />
            Each pair features high-quality materials, ensuring durability and
            style. We pride ourselves on offering footwear that stands out,
            reflecting both local culture and modern trends.
          </p>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="w-full py-8 bg-[#1E1E1E] ">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Our Products
        </h2>
        <Card products={products} />
      </section>

      {/*----------------------- End of Product card-----------------------------    */}
      <section class="w-full min-h-screen bg-gradient-to-b from-[#676C80] to-black text-white">
        <div class="max-w-5xl mx-auto p-10">
          <div className="flex flex-col">
            <div class="mb-10 flex gap-10 lg:gap-36">
              <h1 class="text-2xl font-bold mb-4">Delivery</h1>
              <p class="text-sm">
                To deliver your favorite products, we have partnered with the
                most reliable companies. We are ready to entrust them with your
                orders and are always on your side if something goes wrong.
              </p>
            </div>

            <div class="mb-10 flex gap-14 lg:gap-40">
              <h1 class="text-2xl font-bold mb-4">Return</h1>
              <p class="text-sm ">
                We will be happy to assist you with eligible returns, the return
                instructions, and the shipping address. If you need a return or
                exchange, send us an email so we can discuss a replacement.
              </p>
            </div>
          </div>

          <div class="text-center">
            <h1 class=" text-lg lg:text-2xl font-bold mb-6">Visit us</h1>
            <div class="mb-6">
              <img
                src="src/assets/image9.png"
                alt="Shoe store"
                class="w-full rounded-md"
              />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 class="text-lg font-semibold mb-2">Location</h2>
                <p class="text-sm">
                  1000 Street 118, Sangkat Phsar Chas,
                  <br />
                  Khan Daun Penh, Phnom Penh
                </p>

                <div className="flex gap-2 items-center justify-center">
                  <a href="#" class="text-blue-400 text-sm">
                    Get direction
                  </a>
                  <GrMapLocation />
                </div>
              </div>

              <div>
                <h2 class="text-lg font-semibold mb-2">Opening Hours</h2>
                <p class="text-sm">
                  Monday - Saturday
                  <br />
                  7:00AM - 10:00PM
                </p>
              </div>

              <div>
                <h2 class="text-lg font-semibold mb-2">Payment methods</h2>
                <p class="text-sm">
                  Cash
                  <br />
                  Debit card
                  <br />
                  Credit card
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SellerSection;
