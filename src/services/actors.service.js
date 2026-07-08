import actorData from '../data/actor.data.js';

const create = async (actorsData) => {
    actorsData.age = parseInt(actorsData.age, 10);
    return await actorData.create(actorsData);
}

const actorService = {
    create
}

export default actorService;