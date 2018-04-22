
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import multiMiddleware from 'redux-multi';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers';

const middlewares = [
  multiMiddleware, promiseMiddleware, apiMiddleware,
];

if (process.NODE_ENV !== 'production') {
  middlewares.push(require('redux-freeze')); // eslint-disable-line global-require
}

export function configureStore ({ history, cookies, i18n }, initialState) { // eslint-disable-line
  const createStoreWithMiddleware = compose(
    applyMiddleware.apply(this, middlewares.concat([
      routerMiddleware(history),
      thunkMiddleware.withExtraArgument({ cookies, i18n }),
    ])),
    (process.NODE_ENV !== 'production') && global.window && window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
