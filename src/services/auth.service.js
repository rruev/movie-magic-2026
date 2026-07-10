import userData from '../data/user.data.js';
import bcrypt from 'bcrypt';

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
    const user = await userData.getUserByEmail(userLoginData.email);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(userLoginData.password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    return user;
}

const authService = {
    register,
    login
}

export default authService;