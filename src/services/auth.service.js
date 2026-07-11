import userData from '../data/user.data.js';
import bcrypt from 'bcrypt';
import { generateAuthToken } from '../utils/token.utils.js';

const register = async (userRegData) => {
    if (userRegData.password !== userRegData.rePassword) {
        throw new Error('Passwords do not match');
    }

    const hashedPassword = await bcrypt.hash(userRegData.password, 10);

    const user = await userData.createUser({
        ...userRegData,
        password: hashedPassword
    });

    return generateAuthToken(user);
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

    return generateAuthToken(user);
}

const authService = {
    register,
    login
}

export default authService;