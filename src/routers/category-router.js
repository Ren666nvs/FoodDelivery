import express from 'express';
// import { authorizationMiddleware } from '../middleware/authorization.js';
import { createCategory } from '../controller/foodCategories/create-category.js';
import { authorizationMiddleware } from '../middleware/authorization.js';
export const categoryRouter = express.Router();

categoryRouter.post('/', authorizationMiddleware, createCategory)
