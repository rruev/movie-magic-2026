import { prisma } from '../lib/prisma.js';

const getAll = async () => {
    return await prisma.actor.findMany();
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