import { Router } from 'express';

import homeController from './controllers/home.controller.js';
import movieController from './controllers/movie.controller.js';

const routes = Router();

routes.use('/', homeController);
routes.use('/movies', movieController);

routes.all('*url', (req, res) => {
    res.render('404', { title: 'Page Not Found' });
});

export default routes;