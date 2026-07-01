import moviesData from '../data/movies.data.js';

const getAll = async () => {
    return await moviesData.getAll();
};

const getById = async (id) => {
    return await moviesData.getById(id);
};

const create = async (movieData) => {
    return await moviesData.create(movieData);
};

const update = async (id, movieData) => {
    return await moviesData.update(id, movieData);
};

const remove = async (id) => {
    return await moviesData.remove(id);
};

const moviesService = {
    getAll,
    getById,
    create,
    update,
    remove
};

export default moviesService;