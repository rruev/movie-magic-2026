import { prisma } from '../lib/prisma.js';

const getAll = async () => {
    return await prisma.movie.findMany();
}

const getById = async (id) => {
    const movie = await prisma.movie.findUnique({
        where: {
            id: id
        }
    });

    return movie;
}

const create = async (movieData) => {
    const movie = await prisma.movie.create({
        data: movieData
    });
    return movie;
}

const update = async (id, movieData) => {
    const movie = await prisma.movie.update({
        where: {
            id: id
        },
        data: movieData
    });
    return movie;
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