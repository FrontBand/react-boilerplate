import { combineReducers } from 'redux';

import movies from './movies';
import actors from './actors';

export default combineReducers({
  movies,
  actors,
});
