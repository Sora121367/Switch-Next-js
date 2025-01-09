"use client";

import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "next/link";
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

    // Send login credentials to the API
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), // Use the state values
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token); // Store token in localStorage
      router.push("/role");
    } else {
      setError(data.message || "Invalid email or password");
      console.error(data.message); // Invalid email or password
    }

    setLoading(false); // End the loading state
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">
          Sign in with Switch account
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          or create a{" "}
          <Link href="/signup" className="text-blue-400 underline">
            new account
          </Link>{" "}
          for free
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="space-y-4 mb-6">
          <button
            className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-blue-100 transition"
            aria-label="Continue with Facebook"
          >
            <FaFacebook className="mr-2" />
            Continue with Facebook
          </button>
          <button
            className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-red-100 transition"
            aria-label="Continue with Google"
          >
            <FaGoogle className="mr-2" />
            Continue with Google
          </button>
        </div>

        <p className="text-gray-400 mb-4">OR</p>

        {/* Login form */}
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
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          <Link href="/forgotpassword" className="text-blue-400 underline">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
