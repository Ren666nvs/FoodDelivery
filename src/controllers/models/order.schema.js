import { type } from "@testing-library/user-event/dist/type";
import mongoose, { Schema } from "mongoose";
const { Schema, model, models } = mongoose
const foodOrderItemSchema = new Schema(
   {
    food: {type: Schema.Types.ObjectId, ref: "foods"},
    quantity: Number,
   },
   {_id: false }
);
const orderSchema = new Schema({
    id: { type: Schema.Types.ObjectId},
    user: { type: Schema.Types.ObjectId, ref: "Users"},
    foodOrderItems : {type: [foodOrderItemSchema], required: true},
});
export const OrderModel = models.Orders || model("Orders", orderSchema);
