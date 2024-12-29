import React from 'react';
import ProductCard from './ProductCard';
import { products } from "./constants";

const Card = ({ products }) => {
  return (
    <div className="w-[80%] mx-auto px-16 py-6 flex flex-wrap  justify-center gap-14">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Card;