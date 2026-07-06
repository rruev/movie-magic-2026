import fs from 'fs/promises';
import { readDb, writeDb } from './utils.data.js';
import { prisma } from '../lib/prisma.js';

const getAll = async () => {
    return await prisma.movie.findMany();
}

const getById = async (id) => {
    return await prisma.movie.findUnique({
        where: {
            id: id
        }
    });
}

const create = async (movieData) => {
    const movies = await prisma.movie.create({
        data: movieData
    });
    return movies;
}

const update = async (id, movieData) => {
    const movies = await prisma.movie.update({
        where: {
            id: id
        },
        data: movieData
    });
}


const remove = async (id) => {
    const movies = await prisma.movie.delete({
        where: {
            id: id
        }
    });
}

const moviesData = {
    getAll,
    getById,
    create,
    update,
    remove  
}

export default moviesData;