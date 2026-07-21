import { Router } from 'express';
import  moviesService  from '../services/movies.service.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await moviesService.getAll();

    res.render('home');
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

homeController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await moviesService.getAll(filter);

    res.render('search', { movies, filter });
});

export default homeController;