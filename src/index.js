import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routers/user-router.js";
import mongooseConnect from "./utils/mongoose-connect.js";  // Суулгасан mongooseConnect
import { foodRouter } from "./routers/food-routes.js";
import { categoryRouter } from "./routers/category-router.js";
import { loginRouter } from "./routers/login-router.js";
// import { passwordRouter } from "./routers/password-routes.js";

const app = express();
dotenv.config();
const port = 8000;

app.use(cors());
app.use(express.json());

// MongoDB холболт
mongooseConnect();  // MongoDB холбогдох тусдаа function ашиглаарай

app.use("/users", userRouter);
app.use("/food", foodRouter);
app.use("/category", categoryRouter);
app.use("/login", loginRouter);
// app.use('/password', passwordRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
