import { prisma } from '../lib/prisma.js';

const getAll = async () => {
    return await prisma.movie.findMany();
}

const getById = async (id) => {
    const movie = await prisma.movie.findUnique({
        where: {
            id: id
        },
        include: {
            actors: {
                select: {
                    id: true,
                    name: true,
                    age: true,
                    born: true,
                    imgUrl: true
                }
            }
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

const attachActor = async (movieId, actorId) => {
    const movie = await prisma.movie.update({
        where: {
            id: movieId
        },
        data: {
            actors: {
                connect: { id: actorId }
            }
        }
    });

    return movie;
}

const moviesData = {
    getAll,
    getById,
    create,
    update,
    remove,
    attachActor
}

export default moviesData;