import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.auth_token;

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
    } catch (err) {
        res.clearCookie("auth_token");
        return res.redirect('/auth/login');
    }

    next();
}

export const isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    next();
}

export const isGuest = (req, res, next) => {
    if (req.user) {
        return res.redirect('/');
    }
    next();
}