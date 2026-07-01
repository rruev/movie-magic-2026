import { Router } from 'express';
import  moviesService  from '../services/movieService.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await moviesService.getAll();
    console.log(movies);

    res.render('home', { title: 'Movie Magic 2026' });
});

homeController.get('/about', (req, res) => {
    res.render('about', { title: 'About Movie Magic 2026' });
});

export default homeController;