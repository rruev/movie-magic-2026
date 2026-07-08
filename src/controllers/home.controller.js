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

homeController.get('/search', (req, res) => {
    res.render('search', { title: 'Search Movies' });
});

export default homeController;