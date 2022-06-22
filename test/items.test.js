import Movies from '../modules/items.js';

test('MoviesCounter test', async () => {
  const counter = await Movies.counterMovies();
  expect(counter).toBe(9);
});
