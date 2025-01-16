"use client";
import { useState, useEffect } from "react";

const WhitelistPage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    // Retrieve favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteProducts(favorites);
  }, []);

  return (
    <div className="whitelist-container">
      <h1 className="text-xl font-bold mb-4">Your Whitelist</h1>
      <ul className="flex flex-wrap gap-4">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <li
              key={product.id}
              className="p-4 bg-white shadow-md rounded-lg border"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-cover"
              />
              <h2 className="font-bold text-lg mt-2">{product.title}</h2>
              <p className="text-gray-500">{product.price}</p>
            </li>
          ))
        ) : (
          <p>Your whitelist is empty!</p>
        )}
      </ul>
    </div>
  );
};

export default WhitelistPage;
