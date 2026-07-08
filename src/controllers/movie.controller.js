import { Router } from 'express';
import moviesService from '../services/movies.service.js';
import actorsService from '../services/actors.service.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('movies/create', { title: 'Create a Movie' });
});

movieController.post('/create', async (req, res) => {
    const movieData = req.body;

    await moviesService.create(movieData);
    res.redirect('/');
});

movieController.get('/details/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.getById(id);
    console.log(movie);

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    res.render('movies/details', { title: movie.title, movie });
});

movieController.get('/attach-actor/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.getById(id);
    const actors = await actorsService.getAll();

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    res.render('actors/attach', { title: `Attach Actor to ${movie.title}`, movie, actors });
});

movieController.post('/attach-actor/:id', async (req, res) => {
    const { id } = req.params;
    const actorId = req.body.actors;

    await moviesService.attachActor(id, actorId);
    res.redirect(`/movies/details/${id}`);
});

export default movieController;