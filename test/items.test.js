import Movies from "../modules/items";

test("MoviesCounter test", async () => {
  const counter = await Movies.counterMovies();
  expect(counter).toBe(9);
});
