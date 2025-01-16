"use client";

import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null); // Store user object
  const [loading, setLoading] = useState(true);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false); // If no token, set loading to false and return
          return;
        }

        const response = await fetch("/api/check-auth", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Attach token in the Authorization header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user); // Set user data
        } else {
          console.error("Failed to fetch user data.");
          setUser(null); // Clear user if auth fails
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Logout function to remove token and reset user
  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setUser(null); // Clear user state
    console.log("User logged out successfully."); // Optional log for debugging
  };

  return { user, loading, logout }; // Expose user, loading, and logout
};

export default useAuth;
