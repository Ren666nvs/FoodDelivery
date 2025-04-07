// import { FoodModel } from "../../models/food.model.js";

// export const createFood = async (req, res) => {
//   const { foodName, price, image, ingredients, category } = req.body;

//   try {
//     await FoodModel.create({ foodName, price, image, ingredients, category });
//     res.json({ message: "Success" });
//   } catch (err) {
//     res.status(403).json({ message: "Error occured" });
//   }
// };
import { FoodModel } from "../../models/food.model.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;

  try {
    await FoodModel.create({ foodName, price, image, ingredients, category });
    res.json({ message: "Food created successfully" });
  } catch (err) {
    res.status(403).json({ message: "Error occurred while creating food" });
  }
};
