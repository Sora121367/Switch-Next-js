import React, { useState } from "react";
import CustomerDetails from "./CustomerDetails";

const Customer = () => {
  // State for customer orders
  const [customerOrders, setCustomerOrders] = useState([
    {
      id: 1,
      name: "Alice Smith",
      email: "alice@example.com",
      orders: 5,
      total: 120.5,
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      orders: 2,
      total: 75.0,
    },
    {
      id: 3,
      name: "Emma Brown",
      email: "emma.brown@example.com",
      orders: 7,
      total: 200.0,
    },
  ]);

  const [selectedOrders, setSelectedOrders] = useState([]);

  const [showSection, setShowSection] = useState(false);

  // Handlers
  const handleDeleteSelected = () => {
    setCustomerOrders((prevOrders) =>
      prevOrders.filter((order) => !selectedOrders.includes(order.id))
    );
    setSelectedOrders([]); // Clear selection after deletion
  };

  const handleCheckboxChange = (id) => {
    setSelectedOrders((prev) =>
      prev.includes(id)
        ? prev.filter((orderId) => orderId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      {!showSection ? (
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Customer’s orders</h2>
          </div>

          <div className="w-full flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-6 px-3">
              <span className="text-[#0B5754] font-medium cursor-pointer hover:underline">
                Select
              </span>
              <button
                onClick={() => setShowSection(true)}
                className="border rounded px-4 py-1"
              >
                Mass Update
              </button>
            </div>

            <input
              type="text"
              placeholder="Search by name, email, or zip"
              className="border p-2 rounded-lg w-[34rem]"
            />

            {/* Placeholder for Delete Button */}
            <div className="w-56">
              {selectedOrders.length > 0 ? (
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={handleDeleteSelected}
                >
                  Delete Selected ({selectedOrders.length})
                </button>
              ) : (
                <div></div> // Empty div to maintain space
              )}
            </div>
          </div>

          {/* Customer Orders List */}
          <div className="border rounded overflow-hidden">
            {customerOrders.length === 0 ? (
              <p className="text-center py-4">No customer orders to display.</p>
            ) : (
              customerOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex justify-between items-center border-b p-4"
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleCheckboxChange(order.id)}
                    />
                    <div>
                      <p className="font-medium">{order.name}</p>
                      <p className="text-[#0B5754] text-sm">{order.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center">
                    <p className="flex items-center flex-col text-sm ">
                      <span className="font-medium">Orders</span> {order.orders}
                    </p>
                    <p className="flex items-center flex-col text-sm">
                      <span className="font-medium">Total</span> $
                      {order.total.toFixed(2)}
                    </p>
                    <button
                      className="border rounded px-4 py-1 text-red-600"
                      onClick={() =>
                        setCustomerOrders((prevOrders) =>
                          prevOrders.filter((o) => o.id !== order.id)
                        )
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <CustomerDetails onBack ={() => setShowSection(false)}  />
      )}
    </>
  );
};

export default Customer;
