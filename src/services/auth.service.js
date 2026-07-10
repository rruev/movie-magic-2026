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

const authService = {
    register
}

export default authService;