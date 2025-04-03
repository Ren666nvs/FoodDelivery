import { FoodCategoryModel } from "../../models/category.model.js";
import { config } from "dotenv";

config();
export const createCategory = async (req, res) => {
  const { categoryName } = req.body;

  if (!categoryName) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    const newCategory = await FoodCategoryModel.create({ categoryName });
    res.status(201).json({ message: "Category created", category: newCategory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create category" });
  }
};
