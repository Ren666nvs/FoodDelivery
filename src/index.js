// 1. Atlas signup
// 2. Atlas cluster
// 3. Create database user
// 4. Get connection string
// 5. Backend undsen file uud [index, router, controller]

// 6. Create Model
// 7. Store user data to MongoDB
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routers/user-router.js";
// import { mongooseConnect } from "./utils/mongoose-connect.js";
import { foodRouter } from "./routers/food-routes.js";
import { categoryRouter } from "./routers/category-router.js";
import { loginRouter } from "./routers/login-router.js";
import { connectToDatabase } from "./database/index.js";
// import { passwordRouter } from "./routers/password-routes.js";
const app = express();
dotenv.config();
const port = 8000;
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World');
// })
connectToDatabase();
// mongooseConnect();
app.use(cors());
app.use(express.json());
// app.use('/password', passwordRouter);
app.use("/users", userRouter);
app.use("/food", foodRouter);
app.use("/category", categoryRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
