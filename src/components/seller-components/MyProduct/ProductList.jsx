"use client";
import React, { useState } from "react";
import { TbTruckDelivery, TbDots } from "react-icons/tb";
import ButtonSwitch from "./ButtonSwitch";

const ProductList = ({
  products,
  selectedProducts,
  onToggleSelect,
  onDeleteProduct,
  onEditProduct,
}) => {
  const [activeMenu, setActiveMenu] = useState(null); // State to track the active menu

  const toggleMenu = (productId) => {
    setActiveMenu((prev) => (prev === productId ? null : productId)); // Toggle dropdown
  };
  
  return (
    <div className=" container mx-auto p-4 ">
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product._id}
            className="relative flex items-center border p-4 rounded-md shadow-sm bg-white"
          >
            {/* Checkbox for selection */}
            <input
              type="checkbox"
              className="w-4 h-4 mr-4 cursor-pointer"
              checked={selectedProducts.includes(product._id)}
              onChange={() => onToggleSelect(product._id)}
              aria-label={`Select ${product.title}`}
            />

            {/* Product image */}
            <img
              src={product.image[0] || "/placeholder-image.jpg"}
              alt={product.title || "Product image"}
              className="w-16 h-16 object-cover rounded-md"
              
            />
            

            {/* Product details */}
            <div className="flex-1 px-4">
              <h3 className="text-sm font-bold">{product.title}</h3>
              <div className="flex py-1 gap-7">
                <ButtonSwitch size="sm" />
                <span
                  className={`text-sm font-medium ${
                    product.instock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.instock ? "In stock" : "Out of stock"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <TbTruckDelivery />
                <p className="text-sm text-gray-500">Requires Delivery</p>
              </div>
            </div>

            {/* Price and sample button */}
            <div className="text-center">
              <button className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
                Sample Product
              </button>
              <span className="block text-lg font-bold">{product.price}</span>
            </div>

            {/* Dots menu */}
            <div className="ml-4">
              <button
                onClick={() => toggleMenu(product._id)}
                className="text-2xl text-gray-600 hover:text-gray-800"
              >
                <TbDots />
              </button>

              {/* Dropdown menu */}
              {activeMenu === product._id && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                  <button
                    onClick={() => {
                      onEditProduct(product);
                      setActiveMenu(null); // Close menu after action
                    }}
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      onDeleteProduct(product._id);
                      setActiveMenu(null); // Close menu after action
                    }}
                    className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
