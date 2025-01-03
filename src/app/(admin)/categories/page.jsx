"use client";
import React, { useState } from "react";
import CategoryList from "@/components/Categories/CategoriesList";
import CategoryForm from "@/components/Categories/CategoriesForm";

const CrudCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null); // State for editing a category

  // Add or update a category
  const handleCategorySubmit = (formData) => {
    if (currentCategory) {
      // Update existing category
      setCategories(
        categories.map((cat) =>
          cat.id === currentCategory.id ? { ...cat, name: formData.name } : cat
        )
      );
    } else {
      // Add new category
      if (formData.name.trim() !== "") {
        setCategories([
          ...categories,
          { id: Date.now(), name: formData.name.trim(), status: "draft" },
        ]);
      }
    }
    setCurrentCategory(null);
    setIsAdding(false);
  };

  // Toggle status
  const toggleStatus = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id
          ? { ...cat, status: cat.status === "active" ? "draft" : "active" }
          : cat
      )
    );
  };

  // Delete a category
  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Category Management</h1>

      {/* Search input and Add button */}
      <div className="flex items-center gap-4 mb-4">
        <button
          className={`${
            isAdding || currentCategory ? "bg-red-500" : "bg-green-600"
          } text-white px-4 py-2 rounded hover:bg-opacity-90 whitespace-nowrap`}
          onClick={() => {
            setIsAdding(!isAdding);
            setCurrentCategory(null);
          }}
        >
          {isAdding || currentCategory ? "Cancel" : "+Add New Category"}
        </button>

        <input
          type="text"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-full w-full p-2"
        />
      </div>

      {/* Category form */}
      {(isAdding || currentCategory) && (
        <CategoryForm
          onSubmit={handleCategorySubmit}
          initialValues={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      )}

      {/* Category list */}
      <CategoryList
        categories={filteredCategories}
        deleteCategory={deleteCategory}
        setCurrentCategory={setCurrentCategory}
        toggleStatus={toggleStatus}
      />
    </div>
  );
};

export default CrudCategories;
