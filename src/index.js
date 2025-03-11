// 1. Atlas signup
// 2. Atlas cluster
// 3. Create database user
// 4. Get connection string
// 5. Backend undsen file uud [index, router, controller]

// 6. Create Model
// 7. Store user data to MongoDB
import express from "express";
import cors from "cors";
import { userRouter } from "./routers/user-router.js";
import { mongooseConnect } from "./utils/mongoose-connect.js";
import { foodRouter } from "./routers/food-routes.js";
import { categoryRouter } from "./routers/category-router.js";

const app = express();
const port = 3000;

mongooseConnect();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/food", foodRouter);
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
