import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,  // Ensures email is unique
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", UserSchema);
