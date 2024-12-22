import React from "react";
import { TbTruckDelivery, TbDots } from "react-icons/tb";
import ButtonSwitch from "./ButtonSwitch";

const ProductList = ({ products, selectedProducts, onToggleSelect }) => {
  return (
    <div className="container mx-auto p-4">
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center border p-4 rounded-md shadow-sm bg-white"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              className="w-4 h-4 mr-4 cursor-pointer"
              checked={selectedProducts.includes(product.id)} // Controlled selection
              onChange={() => onToggleSelect(product.id)} // Toggle selection
              aria-label={`Select ${product.name}`}
            />

            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="flex-1 px-4">
              <h3 className="text-sm font-bold">{product.title}</h3>
              <div className="flex py-1 gap-7">
                <ButtonSwitch size="sm" />
                <span
                  className={`text-sm font-medium ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In stock" : "Out of stock"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <TbTruckDelivery />
                <p className="text-sm text-gray-500">Requires Delivery</p>
              </div>
            </div>

            {/* Product Price */}
            <div className="text-center">
              <button className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
                Sample Product
              </button>
              <span className="block text-lg font-bold">{product.price}</span>
            </div>

            {/* Menu Icon */}
            <div className="ml-4 -mt-6">
              <button className="text-2xl hover:text-gray-700">
                <TbDots />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
