import { prisma } from '../lib/prisma.js';

const createUser = async (userData) => {
    const user = await prisma.user.create({
        data: {
            email: userData.email,
            password: userData.password
        }
    });
    return user;
}

const userData = {
    createUser
}

export default userData;