"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Role() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Default loading state for role verification
  const [roleSelectionLoading, setRoleSelectionLoading] = useState(false); // Loading state for role selection
  const router = useRouter();

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User is not authenticated. Please log in.");
          setLoading(false);
          return;
        }

        const response = await fetch("/api/check-auth", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();

        if (response.ok && data.user?.role) {
          router.push(data.user.role === "seller" ? "/my-products" : "/customerpage");
        } else {
          setLoading(false); // Allow role selection if no role is set
        }
      } catch (err) {
        console.error("Error checking role:", err);
        setError("Failed to verify user role. Please try again.");
        setLoading(false);
      }
    };

    checkUserRole();
  }, [router]);

  const handleRoleSelection = async (role) => {
    setError(null);
    setRoleSelectionLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User is not authenticated. Please log in.");
        setRoleSelectionLoading(false);
        return;
      }

      const response = await fetch("/api/setRole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push(role === "seller" ? "/shopowner-verification/setup" : "/customerpage");
      } else {
        setError(data.message || "Failed to set role. Please try again.");
      }
    } catch (err) {
      console.error("Error updating role:", err);
      setError("An error occurred while setting your role. Please try again.");
    } finally {
      setRoleSelectionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl font-semibold">Verifying your account...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-sans font-semibold">Tell us what you want?</h1>
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
            className={`w-1/2 ${
              roleSelectionLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white py-2 rounded-l-md transition font-semibold`}
            disabled={roleSelectionLoading}
          >
            {roleSelectionLoading ? "Processing..." : "Seller"}
          </button>
          <button
            onClick={() => handleRoleSelection("customer")}
            className={`w-1/2 ${
              roleSelectionLoading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } text-white py-2 rounded-r-md transition font-semibold`}
            disabled={roleSelectionLoading}
          >
            {roleSelectionLoading ? "Processing..." : "Customer"}
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-4 font-medium">{error}</p>}
      </div>
    </div>
  );
}

export default Role;