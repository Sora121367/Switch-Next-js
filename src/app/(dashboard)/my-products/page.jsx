"use client";
import React, { useState, useEffect } from "react";
import AddProduct from "@/components/seller-components/MyProduct/AddProduct";
import ProductList from "@/components/seller-components/MyProduct/ProductList";

const MyProduct = () => {
  const [showAddProductSection, setShowAddProductSection] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/getProduct");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleProductSelection = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((_id) => _id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleDeleteSelected = async () => {
    try {
      const response = await fetch("/api/deleteProduct", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selectedProducts }),
      });

      if (response.ok) {
        setProducts((prev) =>
          prev.filter((product) => !selectedProducts.includes(product._id))
        );
        setSelectedProducts([]);
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch("/api/deleteProduct", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: [productId] }),
      });

      if (response.ok) {
        setProducts((prev) =>
          prev.filter((product) => product._id !== productId)
        );
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setUpdatedProduct({ ...product });  // Ensure that _id is included in the state
  };

  const handleUpdateProduct = async () => {
    if (!updatedProduct._id) {
      alert("Product ID is missing");
      return;
    }

    try {
      const response = await fetch(`/api/editProduct`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: updatedProduct._id,
          data: updatedProduct,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Product updated successfully:", data);
  
        // Update the product in the local state
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === updatedProduct._id ? updatedProduct : product
          )
        );
  
        // Close the edit form
        setEditingProduct(null);
  
        // Optional: Display a success message
        alert("Product updated successfully!");
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  
  

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full h-screen">
      <main className="w-full p-4">
        {!showAddProductSection ? (
          <div>
            <div className="space-x-14">
              <h1 className="text-xl font-semibold">Products</h1>
              <div className="flex flex-wrap gap-4 p-6">
                <button
                  onClick={() => setShowAddProductSection(true)}
                  className="w-full md:w-40 h-10 bg-[#0B5754] text-white text-md rounded-lg hover:bg-[#517d7b]"
                >
                  + Add new Product
                </button>

                <button className="w-full md:w-36 h-10 border-2 border-black outline-none text-md rounded-lg hover:bg-[#d3e1e0]">
                  Bulk Edit
                </button>

                <input
                  type="text"
                  placeholder="Search your product name..."
                  className="w-full md:w-[370px] border-2 rounded-full p-2 px-4 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button
                  onClick={handleDeleteSelected}
                  className={`w-full md:w-40 h-10 bg-black text-white text-md rounded-lg ${
                    selectedProducts.length === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#656f6e]"
                  }`}
                  disabled={selectedProducts.length === 0}
                >
                  Delete
                </button>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center text-gray-500">Item not found!</div>
            ) : (
              <ProductList
                products={filteredProducts}
                selectedProducts={selectedProducts}
                onToggleSelect={toggleProductSelection}
                onDeleteProduct={handleDeleteProduct}
                onEditProduct={handleEditProduct}
              />
            )}
          </div>
        ) : (
          <AddProduct onBack={() => setShowAddProductSection(false)} />
        )}

{editingProduct && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
      
      {/* Product Title */}
      <input
        type="text"
        className="w-full p-2 border-2 rounded-lg mb-4"
        value={updatedProduct.title || ""}
        onChange={(e) =>
          setUpdatedProduct((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
        placeholder="Product Title"
      />
      
      {/* Product Price */}
      <input
        type="number"
        className="w-full p-2 border-2 rounded-lg mb-4"
        value={updatedProduct.price || ""}
        onChange={(e) =>
          setUpdatedProduct((prev) => ({
            ...prev,
            price: e.target.value,
          }))
        }
        placeholder="Product Price"
      />
      
      {/* Product Description */}
      <textarea
        className="w-full p-2 border-2 rounded-lg mb-4"
        value={updatedProduct.description || ""}
        onChange={(e) =>
          setUpdatedProduct((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
        placeholder="Product Description"
        rows="4"
      />

      {/* Add more fields as needed */}

      <div className="flex justify-between gap-4">
        <button
          onClick={handleUpdateProduct}
          className="w-1/2 bg-green-500 text-white rounded-lg py-2"
        >
          Save
        </button>
        <button
          onClick={() => setEditingProduct(null)}
          className="w-1/2 bg-red-500 text-white rounded-lg py-2"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      </main>
    </div>
  );
};

export default MyProduct;
