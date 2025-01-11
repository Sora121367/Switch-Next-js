import React from 'react';
import { BiBookmark } from "react-icons/bi";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Nike new collections", store: "Shoes store", price: 29.99, image: "image14.png" },
    { id: 2, name: "Damecykel | Find gode tilbud", store: "Bike store", price: 200.99, image: "image15.png" },
    { id: 3, name: "Gold Luxury Bracelet set", store: "Bracelet store", price: 29.99, image: "image16.png" },
    { id: 4, name: "Military Buckle Fabric Belt", store: "Belt store", price: 20.99, image: "image17.png" },
    { id: 5, name: "Whiskas", store: "Cat Food store", price: 20.99, image: "image19.png" },
    { id: 6, name: "Whiskas", store: "Cat Food store", price: 20.99, image: "image19.png" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="relative bg-white border rounded-2xl p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-2xl"/>
          <h2 className="mt-2 text-gray-500">{product.name}</h2>
          <p className="font-bold">{product.store}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-semibold">${product.price}</p>
            <button className="text-black-900">
              <BiBookmark className="w-6 h-6"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
