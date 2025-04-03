import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    orderedFoods: [{ type: Schema.Types.ObjectId, ref: "FoodOrder" }],
    isVerified: { type: Boolean, default: false },
    ttl: { type: Date, default: Date.now, expires: "30d" }, 
  },
  { timestamps: true }
);

export const userModel = model("User", userSchema);
