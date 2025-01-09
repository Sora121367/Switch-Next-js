"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Role() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRoleSelection = async (role) => {
    setError(null);

    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

      if (!token) {
        setError("User is not authenticated");
        return;
      }

      const response = await fetch("/api/setRole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send token in headers
        },
        body: JSON.stringify({ role }),
      });

      const data = await response.json();

      if (response.status === 200) {
        router.push(role === "seller" ? "/my-products" : "/customerpage");
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Error updating role:", err);
      setError(err.message || "An error occurred while setting role.");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-sans font-semibold">
        Tell us what you want?
      </h1>
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
        <h2 className="text-center font-semibold mb-4">
          You created this account for:
        </h2>
        <ul className="my-2">
          <li>Choose To Be a Seller (To list and sell your products)</li>
          <li>Choose To Be a Customer (To shop for products)</li>
        </ul>
        <div className="flex w-full gap-5">
          <button
            onClick={() => handleRoleSelection("seller")}
            className="w-1/2 bg-blue-500 text-white py-2 rounded-l-md hover:bg-blue-600 transition font-semibold"
          >
            Seller
          </button>
          <button
            onClick={() => handleRoleSelection("customer")}
            className="w-1/2 bg-green-500 text-white py-2 rounded-r-md hover:bg-green-600 transition font-semibold"
          >
            Customer
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Role;
