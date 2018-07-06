import Express from 'express';
import uuid from 'uuid/v4';
import { find, findIndex, omit } from 'lodash';

let { movies } = require('./data');
let { actors } = require('./data'); // eslint-disable-line

const router = new Express.Router();
router.use(Express.json());

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

router.get('/actors', (req, res) => {
  res.json({
    data: actors,
  });
});

router.post('/actors', (req, res) => {
  const newActor = {
    ...req.body.actor,
    id: uuid(),
  };
  actors.push(newActor);

  res.json({
    data: newActor,
  });
});

router.get('/actors/:id', (req, res) => {
  const actor = find(actors, { id: req.params.id });
  if (!actor) {
    return res.sendStatus(404);
  }
  return res.json({
    data: actor,
  });
});

/*
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
