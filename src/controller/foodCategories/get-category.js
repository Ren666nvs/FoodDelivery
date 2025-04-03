import { FoodCategoryModel } from "../../models/category.model.js";

const getCategories = async (req, res) => {
  try {
    const categories = await FoodCategoryModel.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
};

export default getCategories;
