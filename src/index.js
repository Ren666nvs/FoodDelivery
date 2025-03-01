// 1. Atlas signup
// 2. Atlas cluster
// 3. Create database user
// 4. Get connection string
// 5. Backend undsen file uud [index, router, controller]

// 6. Create Model
// 7. Store user data to MongoDB
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {userRoutes} from './routes/user.routes.js'
import {productRoutes} from './routes/product.routes.js'
import {orderRoutes} from './routes/order.routes.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.listen(PORT, () => console.log(` http://localhost:3000 ${PORT}`));
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoUrl = process.env.MONGO_URL;

export const mongooseConnect = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log('Connected to database');
    } catch (err) {
        console.log('Failed to connect database', err);
    };
};
