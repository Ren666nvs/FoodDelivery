// import { FoodModel } from "../models/food.schema.js";
// export const createFood = async (req, res) => {
//   const newFood = await FoodModel.create(req.body);

//   res.json({ message: "food created successfully!", food: newFood });
// };
import { FoodModel } from "../../models/food.model.js";

export const getFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find().populate(["category"]);

    res.json({ message: "success boljin", data: foods });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

// verify // Mail
// reset-password // Mail

// sign-in, sign-up, get-user, delete-user
// category(CRUD), food(CRUD) => FoodOrder(CRUD)
