import express from 'express';
import { engine } from 'express-handlebars';
import homeController from './controllers/home.controller.js';

const app = express();

// Set up handlebars as the view engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// Set up static files serving
app.use(express.static('src/public'));

// Define routes
app.use('/', homeController);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});