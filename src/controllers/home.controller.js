import { Router } from 'express';

const homeController = Router();

homeController.get('/', (req, res) => {
  res.render('home', { title: 'Movie Magic 2026' });
});

homeController.get('/about', (req, res) => {
  res.render('about', { title: 'About Movie Magic 2026' });
});

export default homeController;