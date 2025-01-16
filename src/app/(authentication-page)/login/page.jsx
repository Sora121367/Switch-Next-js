import { signIn } from "@/auth";
import LoginWithEmails from "@/components/LoginWithEmail/LoginWithEmails";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default  function Login(){
  
  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-50 text-black">
    <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
      <h1 className="text-2xl font-semibold mb-2">Sign in with Switch account</h1>
      <p className="text-gray-500 text-sm mb-6">
        or create a{" "}
        <Link href="/signup" className="text-blue-400 underline">
          new account
        </Link>{" "}
        for free
      </p>
      
      <div className="space-y-4 mb-6">
      <form
        action={async () => {
          "use server"
          await signIn("facebook",{redirectTo:'/role'})
        }}
      >
        <button
          className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-blue-100 transition"
          aria-label="Continue with Facebook"
        >
          <FaFacebook className="mr-2" />
          Continue with Facebook
        </button>
      </form>
      <form
         action={async () => {
           "use server"
           await signIn("google",{redirectTo:'/role'})
         }}
       >
        <button
          className="flex items-center justify-center w-full py-2 rounded-md border border-gray-300 hover:bg-red-100 transition"
          aria-label="Continue with Google"
        >
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
       </form>
      </div>

      <p className="text-gray-400 mb-4">OR</p>

      {/* Login form */}
      <LoginWithEmails/>

      <p className="text-sm text-gray-400 mt-4">
        <Link href="/forgotpassword" className="text-blue-400 underline">
          Forgot password?
        </Link>
      </p>
    </div>
  </div>
  );
}
