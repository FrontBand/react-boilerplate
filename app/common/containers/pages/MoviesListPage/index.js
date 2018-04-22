import React from 'react';
import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { provideHooks } from 'redial';

const MoviesListPage = ({ movies = [] }) => (
  <ul>
    { movies.map(movie => <li key={movie.id}>{ movie.title }</li>)}
  </ul>
);

export default compose(
  // provideHooks({
  //   fetch: ({ dispatch }) => dispatch(fetchTemplates()),
  // }),
  // connect(state => ({
  //   ...state.pages.TemplateListPage,
  //   templates: getTemplates(state, state.pages.TemplateListPage.templates),
  // }))
)(MoviesListPage);
