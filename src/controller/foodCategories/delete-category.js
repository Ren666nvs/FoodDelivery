import { FoodCategoryModel } from "../../models/category.model.js";

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await FoodCategoryModel.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete category" });
  }
};
