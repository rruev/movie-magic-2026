import express from 'express';
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser';
import "dotenv/config";

import { authMiddleware } from './middleware/auth.middleware.js';

import routes from './routes.js';

const app = express();

// Set up handlebars as the view engine
app.engine('hbs', engine({ 
  extname: '.hbs',
  helpers:{
    setTitle(title) {
      this.pageTitle = title;
    }
  }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// Set up static files serving
app.use(express.static('src/public'));

//Middleware extrnal
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//MIddleware internal
app.use(authMiddleware);

// Define routes
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});