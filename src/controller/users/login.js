// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt'
// import { UserModel } from '../../models/user.model.js';

// export const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await UserModel.findOne({ email });

//         if (!user) return res.json({ message: "Username or Password did not match" })
//         if (!bcrypt.compareSync(password, user.password)) return res.json({ message: "Username or Password did not match" })

//         var token = jwt.sign({ _id: user._id, role: user.role }, 'uneheer nuuts')

//         res.json({ token: token })
//     } catch (err) {
//         res.status(403).json({ message: "Error occured" });
//     }
// }
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../../models/user.model.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ message: "Username or Password did not match" });

    // Асинхрон compare ашиглах
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch)
      return res
        .status(400)
        .json({ message: "Username or Password did not match" });

    var token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.SECRET_KEY
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
