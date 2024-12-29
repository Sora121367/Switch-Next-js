"use client";
import React, { useState } from "react";

const ButtonSwitch = ({ size = "md" }) => {
  const [availability, setAvailability] = useState(true);

  // Toggle Availability State
  const toggleAvailability = () => {
    setAvailability((prev) => !prev);
  };

  // Define size-specific class names
  const sizeClasses = {
    sm: {
      switch: "w-8 h-4",
      circle: "w-4 h-4 peer-checked:translate-x-4 top-[2px]",
    },
    md: {
      switch: "w-11 h-5",
      circle: "w-5 h-5 peer-checked:translate-x-6",
    },
    lg: {
      switch: "w-14 h-7",
      circle: "w-6 h-6 peer-checked:translate-x-7",
    },
  };

  const currentClasses = sizeClasses[size] || sizeClasses.md;

  return (
    <div className="flex items-center">
      {/* Toggle Switch */}
      <div className={`relative inline-block ${currentClasses.switch}`}>
        <input
          type="checkbox"
          id="availability"
          checked={availability}
          onChange={toggleAvailability}
          className={`peer appearance-none ${currentClasses.switch} bg-slate-100 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300`}
        />
        <div
          className={`absolute top-0 left-0 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:border-blue-600 cursor-pointer ${currentClasses.circle}`}
        ></div>
      </div>

      {/* Availability State */}
      <span
        className={`ml-3 text-sm font-medium ${
          availability ? "text-green-600" : "text-red-600"
        }`}
      >
        {availability ? "Active" : "Inactive"}
      </span>
    </div>
  );
};

export default ButtonSwitch;
