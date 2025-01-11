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
    method_payment: "",
    size: "", // Added to track sizes selected in the Attributes tab
  });
  const [message, setMessage] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
  
    const { title, price, description, instock, image, size } = formData;
  
    // Validation check, ensure all fields are properly filled
    if (!title || !price || !description || !image || size.length === 0) {
      setMessage("All fields, including size, are required. Please fill in all the details.");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("price", price);
    formDataToSend.append("description", description);
    formDataToSend.append("instock", instock);
    formDataToSend.append("image", image);
    formDataToSend.append("size",size)
    
    // Retrieve the token from local storage or wherever it is stored
    const token = localStorage.getItem("token");  // Or wherever you store the token
  
    if (!token) {
      setMessage("Authorization token is required. Please log in and try again.");
      return;
    }
  
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Authorization": `Bearer ${token}`, // Add the Authorization header
        },
      });
      const data = await response.json();
  
      if (response.ok) {
        setMessage("Product created successfully!");
        resetForm(); // Reset the form after saving
      } else {
        setMessage(data.message || "Failed to create the product. Please check the details.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("An error occurred while creating the product. Please try again later.");
    }
  };
  
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      price: "",
      instock: true,
      image: null,
      //method_payment: "",
      size: "" // Reset size as well
    });
  };

  const tabs = [
    { name: "general", label: "General" },
    { name: "attributes", label: "Attributes" },
    { name: "pickup", label: "Pickup" },
  ];

  const renderContent = () => {
    switch (activeItem) {
      case "general":
        return <General formData={formData} setFormData={setFormData} />;
      case "attributes":
        return <Attributes formData={formData} setFormData={setFormData} />;
      case "pickup":
        return <Pickup formData={formData} setFormData={setFormData} />;
      default:
        return <div>Invalid Tab</div>;
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="p-6 flex justify-between gap-2 items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IoChevronBackOutline className="text-lg" />
            <button
              className="text-lg font-medium text-[#0B5754]"
              onClick={onBack}
            >
              Back
            </button>
          </div>
          <h2 className="text-xl font-semibold">Add New Product</h2>
        </div>

        {/* Action Buttons */}
        <div className="space-x-5 flex items-center">
          <button
            onClick={handleSave}
            className="bg-[#0B5754] w-[8rem] h-[2.4rem] text-white rounded hover:bg-[#084d4b]"
          >
            Save Product
          </button>
          <button className="w-[9rem] h-[2.4rem] rounded border border-black hover:bg-slate-500">
            Duplicate Product
          </button>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="p-10 w-full flex flex-col">
        <div className="flex gap-6 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveItem(tab.name)}
              className={`btn-active ${
                activeItem === tab.name
                  ? "text-white bg-[#0B5754]"
                  : "text-black hover:text-[#0B5754] hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Content */}
        <div className="flex-grow p-6 rounded-lg shadow-md bg-white">
          {renderContent()}
        </div>
      </section>

      {/* Display Message */}
      {message && <p className="text-center text-red-500 mt-4">{message}</p>}
    </div>
  );
};

export default AddProduct;
