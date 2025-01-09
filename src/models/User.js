import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email is unique
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      minLength: [3],
      maxLength: [20],
      trim: true, // Removes extra spaces
    },
    role: {
      type: String,
      enum: ['seller','customer'],
      default: 'seller',// Default to customer
      required: false, 
    },
    verificationToken: {
      type: String,
      required: true, // Token to verify email
    },
    verificationTokenExpiresAt: {
      type: Date, // Stores the expiration time for the verification token
      required: true, // Ensure it's always set
    },
    isVerified: {
      type: Boolean,
      default: false, // Marks email verification status
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
