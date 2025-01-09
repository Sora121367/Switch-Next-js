"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Role() {
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("User not authenticated");
          setLoading(false);
          return;
        }

        const response = await fetch("/api/check-auth", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.status === 200) {
          const userRole = data.user.role; // Assuming the role is part of user data

          if (userRole) {
            // Redirect if role exists
            router.push(userRole === "seller" ? "/my-products" : "/customerpage");
          } else {
            setLoading(false); // Stop loading if no role
          }
        } else {
          setError(data.message);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching user role:", err);
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    checkUserRole();
  }, [router]);

  const handleRoleSelection = async (role) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("/api/setRole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

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
            disabled={loading}
            className={`w-1/2 bg-blue-500 text-white py-2 rounded-l-md hover:bg-blue-600 transition font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Seller
          </button>
          <button
            onClick={() => handleRoleSelection("customer")}
            disabled={loading}
            className={`w-1/2 bg-green-500 text-white py-2 rounded-r-md hover:bg-green-600 transition font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Customer
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Role;
