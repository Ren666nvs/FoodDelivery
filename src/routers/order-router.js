import { Router } from "express";
import { createOrder } from "../controllers/order/create-order.js";
import { getOrderById } from "../controllers/order/get-order.js";

export const orderRouter = new Router();

orderRouter.get("/:id", getOrderById);
orderRouter.post("/", createOrder);