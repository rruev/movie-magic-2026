import { prisma } from '../lib/prisma.js';

const getAll = async (filter = {}) => {
    return await prisma.movie.findMany({
        where: {
            year: filter.year ? parseInt(filter.year, 10) : undefined,
            genre: {
                equals: filter.genre || undefined,
                mode: 'insensitive'
            },
            title: {
                contains: filter.search || undefined,
                mode: 'insensitive'
            }
        }
    });
}

const getById = async (id) => {
    const movie = await prisma.movie.findUnique({
        where: {
            id: id
        },
        include: {
            actors: {
                include: {
                    actor: true
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

const update = async (id, movieData, userId) => {
    const movie = await prisma.movie.update({
        where: {
            id: id,
            userId: userId
        },
        data: movieData
    });
    return movie;
}


const remove = async (id, userId) => {
    return await prisma.movie.delete({
        where: {
            id: id,
            userId: userId
        }
    });
}

const attachActor = async (movieId, actorId, nameInMovie) => {
    const movie = await prisma.movie.update({
        where: {
            id: movieId
        },
        data: {
            actors: {
                create: {
                    actor: {
                        connect: {
                            id: actorId
                        }
                    },
                    nameInMovie: nameInMovie
                }
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