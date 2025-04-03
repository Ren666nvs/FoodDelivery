import { FoodCategoryModel } from "../../models/category.model.js";

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { categoryName } = req.body;

  if (!categoryName) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    const updatedCategory = await FoodCategoryModel.findByIdAndUpdate(
      id,
      { categoryName, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category updated", category: updatedCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update category" });
  }
};
