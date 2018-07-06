import uuid from 'uuid/v4';
import { find, findIndex, omit } from 'lodash';

let { movies } = require('../data');

export const fetchMovies = (req, res) => {
  res.json({
    data: movies,
  });
};

export const createMovie = (req, res) => {
  const newMovie = {
    ...req.body.movie,
    id: uuid(),
  };
  movies.push(newMovie);

  res.json({
    data: newMovie,
  });
};

export const fetchMovie = (req, res) => {
  const movie = find(movies, { id: req.params.id });
  if (!movie) {
    return res.sendStatus(404);
  }
  return res.json({
    data: movie,
  });
};
export const editMovie = (req, res) => {
  const movieIndex = findIndex(movies, { id: req.params.id });

  if (movieIndex === -1) {
    return res.sendStatus(404);
  }

  const updatedMovie = omit(req.body.movie, ['id']);
  movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };

  return res.json({
    data: movies[movieIndex],
  });
};

export const deleteMovie = (req, res) => {
  const movie = find(movies, { id: req.params.id });
  if (!movie) {
    return res.sendStatus(404);
  }
  movies = movies.filter(i => i.id !== req.params.id);
  return res.json({
    data: movies,
  });
};
