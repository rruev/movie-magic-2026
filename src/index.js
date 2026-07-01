import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

// Set up handlebars as the view engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// Set up static files serving
app.use(express.static('src/public'));

// Define routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Movie Magic 2026' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Movie Magic 2026' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});