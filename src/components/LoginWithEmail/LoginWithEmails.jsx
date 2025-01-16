"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle login form submission
  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      // Send login credentials to the API
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token); // Store token in localStorage
        setLoading(false);
        router.push("/role"); // Navigate to the role page
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false); // End the loading state
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
        <p className="text-xl font-semibold">Logging in...</p>
      </div>
    );
  }

  return (
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-xl font-medium">Sign in with Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            aria-label="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            aria-label="Password"
          />
          <div className="flex items-center justify-start text-sm">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              aria-label="Remember me"
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-md font-semibold transition ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            Log In
          </button>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>} 
        </form>
  );
}

export default Login;
