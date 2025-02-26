import User from '../models/user.schema.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js';

// Бүртгэх
export const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Нууц үгийг bcrypt ашиглан хашлах
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Шинэ хэрэглэгч үүсгэх
        const newUser = new User({
            username,
            password: hashedPassword,
            email
        });

        await newUser.save();

        // Токен үүсгэж хэрэглэгчдэд буцаах
        const token = generateToken(newUser._id);

        res.status(201).json({ message: 'Хэрэглэгч амжилттай бүртгэгдлээ', token }); 
    } catch (error) {
        res.status(500).json({ message: 'Алдаа гарлаа', error });
    }
};

// Бүх хэрэглэгчийг авах
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Алдаа гарлаа', error });
    }
};

// Нэг хэрэглэгчийг авах
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Хэрэглэгч олдсонгүй' });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Алдаа гарлаа', error });
    }
};
