import { Router } from 'express';
import moviesService from '../services/movies.service.js';
import actorsService from '../services/actors.service.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';

const movieController = Router();

movieController.get('/create', isAuthenticated, (req, res) => {
    res.render('movies/create', { title: 'Create a Movie' });
});

movieController.post('/create', isAuthenticated, async (req, res) => {
    const movieData = req.body;
    const userId = req.user.id; 

    await moviesService.create({ ...movieData, userId: userId });
    res.redirect('/');
});

movieController.get('/details/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.getById(id);

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    res.render('movies/details', { title: movie.title, movie });
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

export default movieController;