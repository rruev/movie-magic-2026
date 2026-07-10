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

const getUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    return user;
}

const userData = {
    createUser,
    getUserByEmail
}

export default userData;