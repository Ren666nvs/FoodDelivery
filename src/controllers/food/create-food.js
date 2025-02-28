import { FoodModel } from "../models/food.schema.js";

export const createFood = async ( res, req) => {
    const newFood = await FoodModel.create(req.bod) ;
    res.json ({ message: "Food created successfully!", food: newFood});

};