import "./styles.css";

import LikesApi from "./likesApi";
import Movies from "../modules/items";

Movies.displayMovies();
Movies.counterMovies();
LikesApi.getLikes();
