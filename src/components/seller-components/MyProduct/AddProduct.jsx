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
  });
  const [message, setMessage] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
  
    console.log("Form Data Before Sending:", formData);
  
    const { title, price, description,instock, image } = formData;
  
    if (!title || !price || !description || !image) {
      setMessage("All fields, including , are required.");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("price", price);
    formDataToSend.append("description", description);
    formDataToSend.append("instock" ,instock);
    formDataToSend.append("image", image);
  
    console.log("Form Data Sent to API:", Object.fromEntries(formDataToSend));
  
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
  
      if (response.ok) {
        setMessage("Product created successfully!");
        resetForm(); // Reset the form and image after saving
      } else {
        setMessage(data.message || "Failed to create the product.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };
  
  // Reset the form and image preview
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      price: "",
      instock: true,
      image: null, // Reset image in formData
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
          <h2 className="text-xl font-semibold">Add New Products</h2>
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
