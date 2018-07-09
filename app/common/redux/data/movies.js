import { handleAction, combineActions } from 'redux-actions';
import { API_URL } from '@/config';
import { normalize } from 'normalizr';
import { createUrl } from '@/helpers/url';
import { movie } from '@/schemas';
import { invoke } from '@/redux/api';

export const fetchMovies = options => invoke({
  endpoint: createUrl(`${API_URL}/movies`, options),
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['movies/FETCH_LIST_REQUEST', {
    type: 'actors',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, [movie])
    ),
  }, 'movies/FETCH_LIST_FAILURE'],
});

export const fetchMovie = (movieId, options) => invoke({
  endpoint: createUrl(`${API_URL}/movies/${movieId}`, options),
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['movies/FETCH_DETAILS_REQUEST', {
    type: 'movies/FETCH_DETAILS_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, movie)
    ),
  }, 'movies/FETCH_DETAILS_FAILURE'],
});

export const createMovie = (body, options) => invoke({
  endpoint: createUrl(`${API_URL}/movies`, options),
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: {
    movie: body,
  },
  types: ['movies/CREATE_REQUEST', {
    type: 'movies/CREATE_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, movie)
    ),
  }, 'movies/CREATE_FAILURE'],
});

export const updateMovie = (movieId, body, options) => invoke({
  endpoint: createUrl(`${API_URL}/movies/${movieId}`, options),
  method: 'PUT',
  headers: {
    'content-type': 'application/json',
  },
  body: {
    movie: body,
  },
  types: ['movies/UPDATE_REQUEST', {
    type: 'movies/UPDATE_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, movie)
    ),
  }, 'movies/UPDATE_FAILURE'],
});

export const deleteMovie = (movieId, options) => invoke({
  endpoint: createUrl(`${API_URL}/movies/${movieId}`, options),
  method: 'DELETE',
  headers: {
    'content-type': 'application/json',
  },
  types: ['movies/DELETE_REQUEST', 'movies/DELETE_SUCCESS', 'movies/DELETE_FAILURE'],
});

export default handleAction(
  combineActions(
    'actors',
    'movies/FETCH_DETAILS_SUCCESS',
    'movies/CREATE_SUCCESS',
    'movies/UPDATE_SUCCESS'
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.movies,
  }),
  {}
);
