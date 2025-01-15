"use client";

import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import General from "./General";
import Attributes from "./Attributes";
import Pickup from "./Pickup";

const PopupMessage = ({ message, type, onClose }) => (
  <div
    className={`fixed top-4 right-4 flex items-center gap-3 p-4 rounded-md shadow-md transition-all ${
      type === "success"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {type === "success" ? (
      <AiOutlineCheckCircle size={24} />
    ) : (
      <AiOutlineCloseCircle size={24} />
    )}
    <span>{message}</span>
    <button
      onClick={onClose}
      className="text-lg font-bold text-gray-500 hover:text-black"
    >
      ×
    </button>
  </div>
);

const AddProduct = ({ onBack }) => {
  const [activeItem, setActiveItem] = useState("general");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    instock: true,
    image: "",
    //method_payment: "",
    size: "", // Added to track sizes selected in the Attributes tab
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleSave = async (e) => {
    e.preventDefault();
  
    const { title, price, description, instock, image, size, category } = formData;
  
    if (!title || !price || !description || image.length === 0 || size.length === 0) {
      setMessageType("error");
      setMessage("All fields, including size and at least one image, are required.");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("price", price);
    formDataToSend.append("description", description);
    formDataToSend.append("instock", instock);
    formDataToSend.append("category", category);
    formDataToSend.append("size", size);
  
    // Append multiple images to FormData
    image.forEach((img, index) => {
      formDataToSend.append("image", img); // Append each image individually
    });
  
    const token = localStorage.getItem("token");
  
    if (!token) {
      setMessageType("error");
      setMessage("Authorization token is required. Please log in and try again.");
      return;
    }
  
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setMessageType("success");
        setMessage("Product created successfully!");
        resetForm();
      } else {
        setMessageType("error");
        setMessage(data.message || "Failed to create the product. Please check the details.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      setMessageType("error");
      setMessage("An error occurred while creating the product. Please try again later.");
    }
  };
  
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      price: "",
      instock: true,
      image: "",
      category: "",
      size: "",
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

        <div className="flex-grow p-6 rounded-lg shadow-md bg-white">
          {renderContent()}
        </div>
      </section>

      {/* Popup Message */}
      {message && (
        <PopupMessage
          message={message}
          type={messageType}
          onClose={() => setMessage("")}
        />
      )}
    </div>
  );
};

export default AddProduct;
