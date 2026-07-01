import express from 'express';
import { engine } from 'express-handlebars';
import routes from './routes.js';

const app = express();

// Set up handlebars as the view engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// Set up static files serving
app.use(express.static('src/public'));

//Middleware
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});