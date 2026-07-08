import { prisma } from '../lib/prisma.js';

const getAll = async ( filter = {}) => {
    return await prisma.actor.findMany({
        where: {
            id: {
                notIn: filter.excludeIds || [],
            },
        },
    });
}

const create = async (actorsData) => {
    const newActor = await prisma.actor.create({
        data: actorsData,
    });

    return newActor;
}

const actorData = {
    getAll,
    create
}

export default actorData;