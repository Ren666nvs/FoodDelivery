import { UserModel } from "../../controllers/models/user.schema";

export const createUser = async (req,res) => {
    const { email, password } = req.body;
    const hashPassword = password + "0";

    const newUser = await UserModel.create({
        ...req.body,
        password: hashPassword,
    });

    res.json({ message: "User created successfully !" , user: newUser  });

};