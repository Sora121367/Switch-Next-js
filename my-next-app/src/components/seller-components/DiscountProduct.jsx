import React, { useState } from "react";
import AddProductDiscount from "./AddProductDiscount";

const DiscountProduct = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Discount Product 1",
      active: true,
      originalPrice: 20.0,
      discount: 10,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Discount Product 2",
      active: false,
      originalPrice: 15.0,
      discount: 20,
      image: "https://via.placeholder.com/60",
    },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [adddiscount, setDiscount] = useState(false);

  const handleToggleSelect = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((productId) => productId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    setProducts((prev) => prev.filter((product) => !selectedProducts.includes(product.id)));
    setSelectedProducts([]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {!adddiscount ? (
        <div className="p-6 space-y-4">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <button
              className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
              onClick={() => setDiscount(!adddiscount)}
            >
              + Add new discount
            </button>
            <input
              type="text"
              placeholder="Search by Product Discount"
              className="w-1/3 p-2 border rounded-md outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleDeleteSelected}
              disabled={selectedProducts.length === 0}
              className={`px-4 py-2 bg-black text-white rounded-md ${
                selectedProducts.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
              }`}
            >
              Delete selected products
            </button>
          </div>

          {/* Product List */}
          <div className="space-y-4">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500">No products found.</p>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center p-4 border rounded-md shadow-sm"
                >
                  {/* Product Content */}
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleToggleSelect(product.id)}
                      aria-label={`Select ${product.name}`}
                    />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex flex-col items-start gap-y-1">
                      <h2 className="text-lg font-semibold">{product.name}</h2>
                      <p className="text-sm text-green-600">
                        {product.active ? "Active" : "Inactive"}
                      </p>
                      <span className="text-red-500 bg-red-100 px-3 py-1 rounded-md text-sm">
                        {product.discount}% off
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </p>
                    <p className="text-green-700">
                      Now ${(
                        product.originalPrice *
                        (1 - product.discount / 100)
                      ).toFixed(2)}
                    </p>
                    <button className="mt-2 px-3 py-1 bg-black text-white rounded-md hover:bg-gray-800 transition">
                      Sample Product
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div>
          <AddProductDiscount onBack = {()=>setDiscount(false)}/>
        </div>
      )}
    </div>
  );
};

export default DiscountProduct;
