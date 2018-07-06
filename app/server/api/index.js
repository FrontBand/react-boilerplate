import Express from 'express';
import * as moviesControllers from './routes/movies';
import * as actorsControllers from './routes/actors';

// let { movies } = require('./data');
// let { actors } = require('./data');

const router = new Express.Router();
router.use(Express.json());

router.get('/movies', moviesControllers.fetchMovies);
router.post('/movies', moviesControllers.createMovie);
router.get('/movies/:id', moviesControllers.fetchMovie);
router.put('/movies/:id', moviesControllers.editMovie);
router.delete('/movies/:id', moviesControllers.deleteMovie);

router.get('/actors', actorsControllers.fetchActors);
router.post('/actors', actorsControllers.createActor);
router.get('/actors/:id', actorsControllers.fetchActor);
router.put('/actors/:id', actorsControllers.editActor);
router.delete('/actors/:id', actorsControllers.deleteActor);

/*
router.get('/movies', (req, res) => {
  res.json({
    data: movies,
  });
});

router.post('/movies', (req, res) => {
  const newMovie = {
    ...req.body.movie,
    id: uuid(),
  };
  movies.push(newMovie);

  res.json({
    data: newMovie,
  });
});

router.get('/movies/:id', (req, res) => {
  const movie = find(movies, { id: req.params.id });
  if (!movie) {
    return res.sendStatus(404);
  }
  return res.json({
    data: movie,
  });
});

router.put('/movies/:id', (req, res) => {
  const movieIndex = findIndex(movies, { id: req.params.id });

  if (movieIndex === -1) {
    return res.sendStatus(404);
  }

  const updatedMovie = omit(req.body.movie, ['id']);
  movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };

  return res.json({
    data: movies[movieIndex],
  });
});

router.delete('/movies/:id', (req, res) => {
  const movie = find(movies, { id: req.params.id });
  if (!movie) {
    return res.sendStatus(404);
  }
  movies = movies.filter(i => i.id !== req.params.id);
  return res.json({
    data: movies,
  });
});
 */

export default router;
