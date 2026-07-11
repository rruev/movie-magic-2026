import moviesData from '../data/movies.data.js';

const getAll = async (filter = {}) => {
    return await moviesData.getAll(filter);
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

const update = async (id, movieData, userId) => {
    const movieId = parseInt(id, 10);
    movieData.year = parseInt(movieData.year, 10);
    movieData.rating = parseFloat(movieData.rating);

    const movie = await moviesData.getById(movieId);

    if (!movie) {
        throw new Error('Movie not found');
    }

    if (movie.userId !== userId) {
        throw new Error('Unauthorized to update this movie');
    }

    return await moviesData.update(movieId, movieData, userId);
};

const remove = async (id, userId) => {
    const movieId = parseInt(id, 10);
    const movie = await moviesData.getById(movieId);

    if (!movie) {
        throw new Error('Movie not found');
    }

    if (movie.userId !== userId) {
        throw new Error('Unauthorized to delete this movie');
    }

    return await moviesData.remove(movieId, userId);
};

const attachActor = async (movieId, actorId, nameInMovie) => {
    const movieIdNumber = parseInt(movieId, 10);
    const actorIdNumber = parseInt(actorId, 10);

    return await moviesData.attachActor(movieIdNumber, actorIdNumber, nameInMovie);
}

const moviesService = {
    getAll,
    getById,
    create,
    update,
    remove,
    attachActor
};

export default moviesService;