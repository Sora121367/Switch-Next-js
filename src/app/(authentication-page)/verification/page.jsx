"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      setError("");

      // Move focus to the next input
      if (value && index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Combine the code
    const code = verificationCode.join("");
    if (code.length !== 6) {
      setError("Please provide the complete 6-digit verification code.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      if (res.status === 200) {
        router.push("/login"); 
        setError(data.message || "Error verifying code, please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Error verifying code, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">Check Your Email</h1>
        <p className="text-gray-500 text-sm mb-6">
          We sent a reset link to contact@gmail.com.
          <br />
          Enter the 6-digit code mentioned in the email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`digit-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="text-center w-14 h-14 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className={`mt-5 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify Code"}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          Haven't got the email yet?{" "}
          <a href="#" className="text-blue-400 underline">
            Resend email
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
