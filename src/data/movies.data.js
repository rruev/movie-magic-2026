import fs from 'fs/promises';
import { readDb, writeDb } from './utils.data.js';

const getAll = async () => {
    return await readDb('movies');
}

const getById = async (id) => {
    const movies = await readDb('movies');
    return movies.find(m => m.id === id);
}

const create = async (movieData) => {
    const movies = await readDb('movies');
    movies.push(movieData);
    await writeDb('movies', movies);
}

const update = async (id, movieData) => {
    const movies = await readDb('movies');
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
        movies[index] = { ...movies[index], ...movieData };
        await writeDb('movies', movies);
    }
}

const remove = async (id) => {
    const movies = await readDb('movies');
    const updatedMovies = movies.filter(m => m.id !== id);
    await writeDb('movies', updatedMovies);
}

const moviesData = {
    getAll,
    getById,
    create,
    update,
    remove  
}

export default moviesData;