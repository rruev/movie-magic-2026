import { Router } from 'express';
import  moviesService  from '../services/movies.service.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await moviesService.getAll();

    res.render('home', { title: 'Movie Magic 2026', movies });
});

homeController.get('/about', (req, res) => {
    res.render('about', { title: 'About Movie Magic 2026' });
});

homeController.get('/search', async (req, res) => {
    const movies = await moviesService.getAll();
    const filter = req.query;

    res.render('search', { title: 'Search Movies', movies, filter });
});

export default homeController;