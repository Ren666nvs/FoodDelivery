import mongoose from "mongoose";

const FoodCategorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const FoodCategoryModel =
  mongoose.models.FoodCategory || mongoose.model("FoodCategory", FoodCategorySchema);
