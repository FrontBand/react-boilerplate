import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { denormalize } from 'normalizr';
import * as schemas from '@/schemas';

import loading from '@/redux/loading';

import data from '@/redux/data';

export default combineReducers({
  data,
  // external libraries
  form,
  routing,
  loading,
});

export const getLocation = state => state.routing.locationBeforeTransitions;
export const getForm = (state, formName) => state.form[formName];

// basic set of reducers for data entities
export const getMovie = (state, id) => denormalize(id, schemas.movie, state.data);
export const getMovies = (state, ids) => ids.map(id => getMovie(state, id));
export const getAllMovies = state => getMovies(state, Object.keys(state.data.movies));
