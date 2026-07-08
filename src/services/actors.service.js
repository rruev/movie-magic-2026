import actorData from '../data/actor.data.js';

const getAll = async (filter = {}) => {
    return await actorData.getAll(filter);
}

const create = async (actorsData) => {
    actorsData.age = parseInt(actorsData.age, 10);
    return await actorData.create(actorsData);
}

const actorService = {
    getAll,
    create
}

export default actorService;