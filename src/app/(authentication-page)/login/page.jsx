import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from 'next/link'
import { auth,signIn } from "@/auth";

async function Login() {

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

        <div className="flex justify-center space-x-4 mb-6">
          <button className="text-blue-500 font-semibold border-b-2 border-blue-400">
            Log in
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition">
            Sign up
          </button>
        </div>

        <form 
          action={async () => {
            "use server"
            await signIn("facebook",{redirectTo:'/role'})
          }}
          className="space-y-4 mb-6">
          <button
            className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-blue-100 transition"
            aria-label="Continue with Facebook"
          >
            <FaFacebook className=" mr-2" />
            Continue with Facebook
          </button>
        </form>
        <form 
          action={async () => {
            "use server"
            await signIn("google",{redirectTo:'/role'})
          }}
          className="space-y-4 mb-6">
          <button
          type="submit"
            className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-red-100 transition"
            aria-label="Continue with Google"
          >
            <FaGoogle className=" mr-2" />
            Continue with Google
          </button>
        </form>

        <p className="text-gray-400 mb-4">OR</p>

        <form className="space-y-4">
          <h2 className="text-xl font-medium">Sign in with Email</h2>
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <div className="flex items-center justify-start text-sm">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-semibold"
          >
            Log In
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