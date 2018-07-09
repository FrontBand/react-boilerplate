import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { denormalize } from 'normalizr';
import * as schemas from '@/schemas';

import loading from './ui/loading';
import data from './data';

const ui = combineReducers({
  loading,
});

export default combineReducers({
  data,
  // external libraries
  form,
  routing,
  ui,
});

export const getLocation = state => state.routing.locationBeforeTransitions;
export const getForm = (state, formName) => state.form[formName];

// basic set of reducers for data entities
export const getMovie = (state, id) =>
  denormalize(id, schemas.movie, state.data);
export const getMovies = (state, ids) => ids.map(id => getMovie(state, id));
export const getAllMovies = state =>
  getMovies(state, Object.keys(state.data.movies));

// actors
export const getActor = (state, id) =>
  denormalize(id, schemas.actor, state.data);
export const getActors = (state, ids) => ids.map(id => getActor(state, id));
export const getAllActors = state =>
  getActors(state, Object.keys(state.data.actors));

export const getActorsFromMovie = (state, movie) =>
  getAllActors(state).filter(actor => movie.actors.includes(actor.id));
