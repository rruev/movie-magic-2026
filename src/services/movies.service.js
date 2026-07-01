import moviesData from '../data/movies.data.js';

const getAll = async () => {
    return await moviesData.getAll();
};

const getById = async (id) => {
    const idInt = parseInt(id, 10);

    return await moviesData.getById(idInt);
};

const create = async (movieData) => {
    movieData.year = parseInt(movieData.year, 10);
    movieData.rating = parseFloat(movieData.rating);

    return await moviesData.create(movieData);
};

const update = async (id, movieData) => {
    movieData.year = parseInt(movieData.year, 10);
    movieData.rating = parseFloat(movieData.rating);

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