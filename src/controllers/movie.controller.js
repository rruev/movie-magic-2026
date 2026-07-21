import { Router } from 'express';
import moviesService from '../services/movies.service.js';
import actorsService from '../services/actors.service.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';
import { prepareMovieForEdit } from '../utils/views.utils.js';
import { createMovieSchema } from '../schemas/movie.schema.js';
import * as z from 'zod';

const movieController = Router();

movieController.get('/create', isAuthenticated, (req, res) => {
    const preparedMovie = prepareMovieForEdit({});

    res.render('movies/create', { title: 'Create a Movie', movie: preparedMovie });
});

movieController.post('/create', isAuthenticated, async (req, res) => {
    const movieData = req.body;
    const userId = req.user.id;

    try {
        const cleanMovieData = createMovieSchema.parse(movieData);
        await moviesService.create({ ...cleanMovieData, userId: userId });
    } catch (error) {
        console.error(error.name, error.message);
        switch (error.name) {
            case 'ZodError':
                const errors = z.flattenError(error).fieldErrors;
                const preparedMovieData = prepareMovieForEdit(movieData);
                return res.status(400).render('movies/create', { title: 'Create a Movie', movie: preparedMovieData, errors });
        }
    }

    res.redirect('/');
});

movieController.get('/details/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.getById(id);
    const userId = req?.user?.id;

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    const isOwner = movie.userId && movie.userId === userId;

    res.render('movies/details', { title: movie.title, movie, isOwner });
});

movieController.get('/attach-actor/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.getById(id);
    const actors = await actorsService.getAll({ excludeIds: movie.actors.map(a => a.actor.id) });

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    res.render('actors/attach', { title: `Attach Actor to ${movie.title}`, movie, actors });
});

movieController.post('/attach-actor/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const actorId = req.body.actors;
    const nameInMovie = req.body.nameInMovie;

    await moviesService.attachActor(id, actorId, nameInMovie);
    res.redirect(`/movies/details/${id}`);
});

movieController.get('/delete/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    await moviesService.remove(id, userId);
    res.redirect('/');
});

movieController.get('/edit/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.getById(id);
    const userId = req.user.id;

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    if (movie.userId !== userId) {
        return res.status(403).render('403', { title: 'Unauthorized' });
    }

    // prepare the movie data for the edit form
    const preparedMovie = prepareMovieForEdit(movie);

    res.render('movies/edit', { title: `Edit ${movie.title}`, movie: preparedMovie });
});

movieController.post('/edit/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const movieData = req.body;
    const userId = req.user.id;

    await moviesService.update(id, movieData, userId);
    res.redirect(`/movies/details/${id}`);
});

export default movieController;