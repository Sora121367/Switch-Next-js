"use client";
import React, { useEffect, useState } from "react";
import CusHeader from "@/components/customerpage/CusHeader";
import CustomerSection from "@/components/customerpage/CustomerSection";
import CustomerFooter from "@/components/customerpage/Footer";

const CustomerPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/get-all-products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Assuming the API response includes a `products` array
        setFilteredProducts(data.products); // Initially show all products
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div className="bg-[#19341e] min-h-screen flex flex-col">
  <CusHeader category={category} onCategoryChange={handleCategoryChange} />
  {/* Main Content Section */}
  <div className="flex-1">
    <CustomerSection products={filteredProducts} />
  </div>
</div>
<footer className="mt-auto">
    <CustomerFooter />
  </footer>
</>



  );
};



export default CustomerPage;
