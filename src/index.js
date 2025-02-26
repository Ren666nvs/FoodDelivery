// 1. Atlas signup
// 2. Atlas cluster
// 3. Create database user
// 4. Get connection string
// 5. Backend undsen file uud [index, router, controller]

// 6. Create Model
// 7. Store user data to MongoDB
// import mongoose from mongoose
// import{ productRouter } from "./routes/product.routes"
// import { useRouter } from "./routes/user.routes"
// const app = express();
// const port = 3000;
// mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() =>{
//     console.log("database connection established");
    
// })
// app.use(express.json());
// app.use("/user", useRouter);

// app.listen(port, () => {
//     console.log(`Example app listening on port http://localhost:${port}`);
    
// dotenv.config();
// import dotenv from 'dotenv';
// import express from 'express';
// import { userRouter } from './routes/user.routes';
// const app = express();
// const port = 5000;
// // connectToDatabase();
// app.use(express.json());
// app.listen(port, () => {
//     console.log(`Server is running on port http://localhost:${PORT}`);
//   });




// import express from 'express';

// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port http://localhost:3000
//  ${PORT}`);
// });

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB холболт
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB холбогдлоо'))
  .catch(err => console.log('MongoDB алдаа:', err));

app.use(express.json());

app.listen(PORT, () => console.log(` http://localhost:3000 ${PORT}`));
