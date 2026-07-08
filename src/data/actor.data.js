import { prisma } from '../lib/prisma.js';

const create = async (actorsData) => {
    const newActor = await prisma.actor.create({
        data: actorsData,
    });

    return newActor;
}

const actorData = {
    create
}

export default actorData;