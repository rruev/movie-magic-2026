import { Router } from 'express';

import homeController from './controllers/home.controller.js';
import movieController from './controllers/movie.controller.js';
import actorController from './controllers/actor.controller.js';
import authController from './controllers/auth.controller.js';

const routes = Router();

routes.use('/', homeController);
routes.use('/movies', movieController);
routes.use('/actors', actorController);
routes.use('/auth', authController)

routes.all('*url', (req, res) => {
    res.render('404', { title: 'Page Not Found' });
});

export default routes;