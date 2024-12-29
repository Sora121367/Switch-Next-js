import React from "react";
import { useNavigate } from "react-router-dom";

const MySale = ({ setActiveItem }) => {
  const navigate = useNavigate();

  const handleNavigate = (path, label) => {
    setActiveItem(label);
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-2xl font-bold">Select an Option</h2>
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => handleNavigate("/my-sales/orders", "Orders")}
        >
          View Orders
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={() => handleNavigate("/my-sales/customers", "Customers")}
        >
          View Customers
        </button>
      </div>
    </div>
  );
};

export default MySale;
