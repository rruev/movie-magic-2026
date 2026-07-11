import jwt from 'jsonwebtoken';

export const generateAuthToken = (user) => {
    const tokenPayload = {
        id: user.id,
        email: user.email
    };


    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
}