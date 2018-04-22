import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '@/containers/layouts/App';
import Main from '@/containers/layouts/Main';

import MoviesListPage from '@/containers/pages/MoviesListPage';
import NotFoundPage from '@/containers/pages/NotFoundPage';

export const configureRoutes = ({ store }) => { // eslint-disable-line
  // store can be used in future to check autentication of the user
  return (
    <Route component={App}>
      <Route component={Main}>
        <Route path="/">
          <Route path="movies" component={MoviesListPage} />
          <IndexRedirect to="movies" />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Route>
    </Route>
  );
};
