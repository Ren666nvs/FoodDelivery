import { Schema, model } from "mongoose";
const userSchema = new Schema(
    {
        id: { type: Schema.Types.ObjectId},
        email: { type: String, required: true, unique: true },
        password: {type: String, required: true},
        phoneNumber: {type: String },
        role: {
            type: String,
            enum: ["ADMIN", "USER" ],
            default: "USER",
        },
        orderFoods: [{ type: Schema.Types.ObjectId, ref: "Orders", default: [] }]
        name: { type: String },

    },            
    {
        timestamps: true,
    
    }
);

export const UserModel = model.Users || model("Users", userSchema);
