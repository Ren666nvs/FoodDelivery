import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // .env файлыг уншина

export const authorizationMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Authorization header байхгүй эсвэл Bearer форматаар эхлээгүй бол
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "unauthorized!!!" });
    }

    const token = authHeader.split(' ')[1];

    try {
        // JWT-г шалгах (нууц түлхүүрийг .env-ээс авна)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Token доторх хэрэглэгчийн мэдээллийг req.user-д хадгалах
        next();
    } catch (error) {
        return res.status(401).json({ message: "unauthorized!!!" });
    }
};
