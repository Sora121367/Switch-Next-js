import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const AddProductDiscount = ({ onBack }) => {
  const [formData, setFormData] = useState({
    discount: "",
    specificProducts: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const [hasEndDate, setHasEndDate] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const toggleEndDate = () => setHasEndDate(!hasEndDate);

  const handleSave = () => {
    const { discount, startDate, startTime } = formData;
    if (!discount || !startDate || !startTime) {
      setError("Please fill in required fields!");
      return;
    }
    console.log("Saved Discount Data:", formData);
    onBack(); // Navigate back
  };

  return (
    <div className="p-6">
      {/* Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <IoChevronBackOutline className="text-lg" />
          <button
            className="text-lg font-medium text-[#0B5754] hover:underline"
            onClick={onBack}
          >
            Back
          </button>
        </div>
        <h2 className="text-xl font-semibold">Add New Product</h2>
      </div>

      {/* Buttons Section */}
      <div className="p-3 flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0">
        <div className="flex gap-6 w-full sm:w-auto">
          <button
            onClick={handleSave}
            className="bg-[#0B5754] w-full sm:w-[8rem] h-[2.4rem] text-white rounded hover:bg-[#084d4b] mb-4 sm:mb-0"
          >
            Save Product
          </button>
          <button
            className="w-full sm:w-[9rem] h-[2.4rem] rounded border border-black hover:bg-slate-500 mb-4 sm:mb-0"
            onClick={() => console.log("Duplicate Product clicked")}
          >
            Duplicate Product
          </button>
        </div>
        <div className="w-full sm:w-auto">
          <button
            className="w-full sm:w-[9rem] h-[2.4rem] rounded-lg bg-black text-white hover:bg-slate-500"
            onClick={() => console.log("Remove clicked")}
          >
            Remove
          </button>
        </div>
      </div>

      {/* Validation Error */}
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

      {/* Discount Value */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Discount Value</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="0"
            className="border rounded p-2 w-20"
          />
          <span>%</span>
        </div>
      </div>

      {/* Specific Products */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Applies to</label>
        <select
          name="specificProducts"
          value={formData.specificProducts}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Products</option>
          <option value="product1">Product 1</option>
          <option value="product2">Product 2</option>
        </select>
      </div>

      {/* Active Dates */}
      <div className="border rounded p-4">
        <h3 className="font-semibold mb-4">Active Dates</h3>
        {/* Start Date/Time */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full sm:w-auto">
            <label className="block text-sm mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label className="block text-sm mb-1">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
        {/* End Date/Time */}
        <div>
          <label className="inline-flex items-center mb-2">
            <input
              type="checkbox"
              checked={hasEndDate}
              onChange={toggleEndDate}
              className="mr-2"
            />
            Set End Date
          </label>
          {hasEndDate && (
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-auto">
                <label className="block text-sm mb-1">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div className="w-full sm:w-auto">
                <label className="block text-sm mb-1">End Time</label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-6 border p-4 rounded">
        <h3 className="font-semibold mb-2">Details</h3>
        <ul className="list-disc ml-5 text-gray-700">
          <li>For shoes store</li>
          <li>No products</li>
          <li>All customers</li>
          <li>Active from today</li>
        </ul>
      </div>
    </div>
  );
};

export default AddProductDiscount;
