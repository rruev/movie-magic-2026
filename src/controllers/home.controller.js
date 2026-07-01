import { Router } from 'express';
import { getAllMovies } from '../data/movies.data.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await getAllMovies();
    console.log(movies);

    res.render('home', { title: 'Movie Magic 2026' });
});

homeController.get('/about', (req, res) => {
    res.render('about', { title: 'About Movie Magic 2026' });
});

export default homeController;