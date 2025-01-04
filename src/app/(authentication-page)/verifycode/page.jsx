// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// function VerifyCode() {
//   const [error, setError] = useState("");
//   const [verificationCode, setVerificationCode] = useState("");
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setVerificationCode(e.target.value);
//     setError(""); // Clear error on input change
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

  

//     // Check if email or verification code is missing
//     if (!verificationCode) {
//       setError("Please provide both email and verification code.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("/api/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           code: verificationCode,
//         }),
//       });

//       const data = await res.json();

//       if (res.status === 200) {
//         router.push("/my-products"); // Redirect after successful verification
//       } else {
//         setError(data.message || "Error verifying code, please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       setError("Error verifying code, please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
//       <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
//         <h1 className="text-2xl font-semibold mb-2">Verify Your Email</h1>
//         <p className="text-gray-500 text-sm mb-6">
//           Please enter the verification code sent to your email.
//         </p>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             value={verificationCode}
//             onChange={handleChange}
//             placeholder="Verification Code"
//             className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <button
//             type="submit"
//             className="mt-5 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold"
//             disabled={loading}
//           >
//             {loading ? "Verifying..." : "Verify Code"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default VerifyCode;
