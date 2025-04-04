import jwt from 'jsonwebtoken';

export const authorizationMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.json({ message: "unauthorized!!!" })

    const token = authorization.split(' ')[1]

    try {
        jwt.verify(token, 'uneheer_nuuts_bish_yostoi_nuuts');
        next();
    } catch (err) {
        return res.json({ message: "unauthorized!!!" })
    }
}