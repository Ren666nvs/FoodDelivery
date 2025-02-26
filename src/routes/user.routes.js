// import { Router } from "express";
// import { getUser } from "../controller/users/get-users.js";
// import { createUser } from "../controller/users/create-user.js";
// import 

// export const userRouter = Router();

// userRouter.post("/", createUser)
// userRouter.delete("/", deleteUser);
// userRouter.get("/:id", getUser);
// userRouter.put('/:id', updateUser);
import express from 'express';
import { createUser, getAllUsers, getUser } from '../controller/users/user.controller.js';
import { authenticateToken } from '../../middleware/auth.js'; // Token баталгаажуулах middleware

const router = express.Router();

// Бүртгэх (POST)
router.post('/create', createUser);

// Бүх хэрэглэгчийг авах (GET)
router.get('/', authenticateToken, getAllUsers);

// Нэг хэрэглэгчийг авах (GET)
router.get('/:id', authenticateToken, getUser);

export default router;
