import React, { useState } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import { products as initialProducts } from "./constants";

const MyProduct = () => {
  const [showAddProductSection, setShowAddProductSection] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState([]); // State for selected product IDs
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Handle selection toggling using find() to check for the product
  const toggleProductSelection = (productId) => {
    const isSelected = selectedProducts.find((id) => id === productId);
    if (isSelected) {
      setSelectedProducts((prev) => prev.filter((id) => id !== productId));
    } else {
      setSelectedProducts((prev) => [...prev, productId]);
    }
  };

  // Handle deletion of selected products
  const handleDeleteSelected = () => {
    setProducts((prev) =>
      prev.filter((product) => !selectedProducts.includes(product.id))
    );
    setSelectedProducts([]); // Clear selection
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-screen">
      {/* Main Section */}
      <main className="w-full p-4">
        {!showAddProductSection ? (
          <div>
            <div className="space-x-14">
              <h1 className="text-xl font-semibold">Products</h1>
              <div className="flex gap-14 p-6">
                <button
                  onClick={() => setShowAddProductSection(true)} // Show Add Product Section
                  className="w-40 h-10 bg-[#0B5754] text-white text-md rounded-lg hover:bg-[#517d7b]"
                >
                  + Add new Product
                </button>

                <button className="w-36 h-10 border-2 border-black outline-none text-md rounded-lg hover:bg-[#d3e1e0]">
                  Bulk Edit
                </button>

                <input
                  type="text"
                  placeholder="search your products name..."
                  className="w-[370px] border-2 rounded-full p-2 px-4 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
                />

                <button
                  onClick={handleDeleteSelected}
                  className={`w-40 h-10 bg-black text-white text-md rounded-lg ${
                    selectedProducts.length === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#656f6e]"
                  }`}
                  disabled={selectedProducts.length === 0} // Disable if no products selected
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Conditional Rendering of Product List or "Item not found!" */}
            {filteredProducts.length === 0 ? (
              <div className="text-center text-gray-500">Item not found!</div>
            ) : (
              <ProductList
                products={filteredProducts}
                selectedProducts={selectedProducts}
                onToggleSelect={toggleProductSelection}
              />
            )}
          </div>
        ) : (
          <AddProduct onBack={() => setShowAddProductSection(false)} />
        )}
      </main>
    </div>
  );
};

export default MyProduct;
