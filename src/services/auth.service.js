import userData from '../data/user.data.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const register = async (userRegData) => {
    if (userRegData.password !== userRegData.rePassword) {
        throw new Error('Passwords do not match');
    }

    const hashedPassword = await bcrypt.hash(userRegData.password, 10);

    return await userData.createUser({
        ...userRegData,
        password: hashedPassword
    });
}

const login = async (userLoginData) => {
    const user = await userData.findByEmail(userLoginData.email);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(userLoginData.password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid email or password');
    }

    const tokenPayload = {
        id: user.id,
        email: user.email
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
}

const authService = {
    register,
    login
}

export default authService;