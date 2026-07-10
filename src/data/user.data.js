import { prisma } from '../lib/prisma.js';

const createUser = async (userData) => {
    return await prisma.user.create({
        data: userData
    });
}

const userData = {
    createUser
}

export default userData;