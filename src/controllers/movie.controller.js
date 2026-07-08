import { Router } from 'express';
import moviesService from '../services/movies.service.js';

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

    if (!movie) {
        return res.status(404).render('404', { title: 'Movie Not Found' });
    }

    res.render('movies/details', { title: movie.title, movie });
});

export default movieController;