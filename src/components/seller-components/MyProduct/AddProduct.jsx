import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import General from "./General";
import Attributes from "./Attributes";
import Pickup from "./Pickup";

const AddProduct = ({ onBack }) => {
  const [activeItem, setActiveItem] = useState("general");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    instock: true,
    image: null,
    size: [], // Track sizes in Attributes tab
  });
  const [message, setMessage] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    const { title, price, description, image } = formData;

    // Basic validation
    if (!title || !price || !description || !image) {
      setMessage("All fields, including title, price, description, and image, are required.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("price", price);
    formDataToSend.append("description", description);
    formDataToSend.append("instock", formData.instock);
    formDataToSend.append("image", image);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Product created successfully!");
        resetForm();
      } else {
        console.error("API Error:", data);
        setMessage(data.message || "Failed to create the product.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  const resetForm = () => {
    if (window.confirm("Are you sure you want to reset the form?")) {
      setFormData({
        title: "",
        description: "",
        price: "",
        instock: true,
        image: null,
        size: [],
      });
    }
  };

  const tabs = [
    { name: "general", label: "General" },
    { name: "attributes", label: "Attributes" },
    { name: "pickup", label: "Pickup" },
  ];

  const tabComponents = {
    general: General,
    attributes: Attributes,
    pickup: Pickup,
  };

  const renderContent = () => {
    const Component = tabComponents[activeItem];
    return Component ? <Component formData={formData} setFormData={setFormData} /> : <div>Invalid Tab</div>;
  };

  return (
    <div className="w-full p-4">
      {/* Header Section */}
      <section className="p-6 flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center text-lg font-medium text-[#0B5754]"
            onClick={onBack}
            aria-label="Go back"
          >
            <IoChevronBackOutline className="text-lg" />
            Back
          </button>
          <h2 className="text-xl font-semibold">Add New Product</h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleSave}
            className="bg-[#0B5754] w-full md:w-[8rem] h-[2.4rem] text-white rounded hover:bg-[#084d4b]"
            aria-label="Save product"
          >
            Save Product
          </button>
          <button
            onClick={resetForm}
            className="w-full md:w-[9rem] h-[2.4rem] rounded border border-black hover:bg-slate-500"
            aria-label="Duplicate product"
          >
            Duplicate Product
          </button>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="w-full flex flex-col">
        <div className="flex flex-wrap gap-6 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveItem(tab.name)}
              className={`btn-active px-4 py-2 rounded ${
                activeItem === tab.name
                  ? "text-white bg-[#0B5754]"
                  : "text-black hover:text-[#0B5754] hover:bg-gray-100"
              }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Content */}
        <div className="flex-grow p-6 rounded-lg shadow-md bg-white">{renderContent()}</div>
      </section>

      {/* Display Message */}
      {message && <p className="text-center text-red-500 mt-4">{message}</p>}
    </div>
  );
};

export default AddProduct;
