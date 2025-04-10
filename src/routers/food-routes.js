import express from 'express';
// import { authorizationMiddleware } from '../middleware/authorizationMiddleware.js';
import { authorizationMiddleware } from '../middleware/authorization.js';
import { createFood } from '../controller/foods/create-food.js';
import { getFoods } from '../controller/foods/get-foods.js';
import { createCategory } from "../controller/foodCategories/create-category.js";

export const foodRouter = express.Router();

foodRouter.get('/', getFoods)
foodRouter.post('/', authorizationMiddleware, createFood)
foodRouter.post("/category",  createCategory);
foodRouter.get("/category", );