"use client";
import React from "react";
import CustomerProduct from "./CustomerProduct";

const products = [
  {
    id: 1,
    title: "Bike Store",
    description: "Damecykel",
    price: "$200",
    image: "/image8.png",
  },
  {
    id: 2,
    title: "Clothing Store",
    description: "Trendy T-Shirts",
    price: "$50",
    image: "/image8.png",
  },
  {
    id: 3,
    title: "Gadget Shop",
    description: "Smartphone Accessories",
    price: "$30",
    image: "/image8.png",
  },
  {
    id: 4,
    title: "Bookstore",
    description: "Fictional Novels",
    price: "$15",
    image: "/image8.png",
  },
];

const discountProducts = [
  {
    id: 1,
    title: "Discounted Bike Store",
    price: "$180",
    image: "/image8.png",
    discount: "OFF 10%",
  },
  {
    id: 2,
    title: "Discounted Clothing Store",
    price: "$45",
    image: "/image8.png",
    discount: "OFF 10%",
  },
  {
    id: 3,
    title: "Discounted Gadget Shop",
    price: "$27",
    image: "/image8.png",
    discount: "OFF 104%",
  },
  {
    id: 4,
    title: "Discounted Bookstore",
    price: "$13.50",
    image: "/image8.png",
    discount: "OFF 10%",
  },
];

const CustomerSection = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className=" w-full h-1/2 p-10 flex items-center">
        <div className="w-[34rem] bg-white rounded-lg shadow-lg flex items-center overflow-hidden">
          {/* Text Section */}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-black leading-tight mb-4">
              Discover <br /> Local Shops
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Find the best shops near you and explore unique offerings.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
              Learn more
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="/image6.png"
              alt="Local Shop"
              className="w-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div>
        <div className="px-6 ">
          {" "}
          <h1 className="text-2xl font-bold">Shop by categary</h1>
        </div>
        <ul className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <li key={product.id} className="flex justify-center gap-3">
              <CustomerProduct
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Product Discount Section */}
      <div className="w-full p-8  ">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold">Product discount</h2>
        </div>
        <ul className=" mt-6 flex flex-wrap justify-center gap-6">
          {discountProducts.map((product) => (
            <li
              key={product.id}
              className="w-[20rem] relative bg-white shadow-md rounded-lg overflow-hidden "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover"
              />
              <div className="absolute top-1 right-2 w-12 h-12 bg-orange-500 text-white text-[.8rem] font-bold rounded-full">
                <p className="text-center">{product.discount}</p>
              </div>
              <button className="bg-green-600 absolute bottom-2 left-2 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className=" h-[100vh]  mt-6">
        <div className="flex items-center justify-center text-2xl font-bold ">
          <h1>More Products</h1>

        </div>

        <ul className=" mt-6 flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <li
              key={product.id}
              className="w-[20rem] bg-white shadow-md rounded-lg overflow-hidden "
            >
              <img
                src={product.image}
                className="w-full object-cover"
              />
              <div className="h-[5rem] flex items-center justify-center flex-col font-semibold ">
                <p>{product.title}</p>
                <p className="text-md">{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerSection;
