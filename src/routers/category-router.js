import express from "express";
import { createCategory } from "../controller/foodCategories/create-category.js";
import getCategories from "../controller/foodCategories/get-category.js";
import { updateCategory } from "../controller/foodCategories/update-category.js";
import { deleteCategory } from "../controller/foodCategories/delete-category.js";
import { authorizationMiddleware } from "../middleware/authorization.js";
import { config } from "dotenv";

config();
export const categoryRouter = express.Router();

categoryRouter.post("/", authorizationMiddleware, createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.put("/:id", authorizationMiddleware, updateCategory);
categoryRouter.delete("/:id", authorizationMiddleware, deleteCategory);
