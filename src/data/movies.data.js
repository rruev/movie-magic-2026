import fs from 'fs/promises';
import { readDb, writeDb } from './utils.data.js';

export const getAllMovies = async () => {
    return await readDb('movies');
}

export const getMovieById = async (id) => {
    const movies = await readDb('movies');
    return movies.find(m => m.id === id);
}

export const createMovie = async (movieData) => {
    const movies = await readDb('movies');
    movies.push(movieData);
    await writeDb('movies', movies);
}

export const updateMovie = async (id, movieData) => {
    const movies = await readDb('movies');
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
        movies[index] = { ...movies[index], ...movieData };
        await writeDb('movies', movies);
    }
}

export const deleteMovie = async (id) => {
    const movies = await readDb('movies');
    const updatedMovies = movies.filter(m => m.id !== id);
    await writeDb('movies', updatedMovies);
}