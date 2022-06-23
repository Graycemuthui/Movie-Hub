import './styles.css';

import LikesApi from './likesApi.js';
import Movies from '../modules/items.js';

Movies.displayMovies();
Movies.counterMovies();
LikesApi.getLikes();
