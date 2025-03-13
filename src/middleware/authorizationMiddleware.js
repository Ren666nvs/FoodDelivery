import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // .env файлыг уншина

export const authorizationMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "unauthorized!!!" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Нууц үгийг .env-ээс авна
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "unauthorized!!!" });
    }
};
