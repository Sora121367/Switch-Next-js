import { streamUpload } from "@/Utils/cloudinary";
import { NextResponse } from "next/server";
import connectDB from "@/Utils/db";
import User from "@/models/User";
import jwt from "jsonwebtoken"; // Import JWT library

// Utility function to send response
const sendResponse = (message, status, data = {}) => {
  return new NextResponse(JSON.stringify({ message, ...data }), { status });
};

export async function POST(req) {
    await connectDB();
  
    const token = req.headers.get("Authorization")?.split(" ")[1];
  
    if (!token) {
      return NextResponse.json(
        { message: "Authorization token is required" },
        { status: 401 }
      );
    }
  
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
      return sendResponse("Invalid or expired token", 401);
    }
  
    const formData = await req.formData();
    const profile_picture = formData.get("profile_picture");
  
    if (!profile_picture) {
      return sendResponse("No profile picture provided", 400);
    }
  
    let uploadProfile;
    try {
      uploadProfile = await streamUpload(profile_picture, "Userprofile");
    } catch (err) {
      console.error("Image Upload Error:", err);
      return sendResponse("Image upload failed", 500, { error: err.message });
    }
  
    try {
      
      const user = await User.findById(decoded.id);
    
  
      if (!user) {
        return sendResponse("User not found", 404);
      }
  
      user.profile_picture = uploadProfile.secure_url;
      await user.save();
  
      return sendResponse("Profile picture uploaded successfully", 200, {
        profile_picture: user.profile_picture,
      });
    } catch (err) {
      console.error("Database Error:", err);
      return sendResponse("Error updating user profile", 500, { error: err.message });
    }
  }
  