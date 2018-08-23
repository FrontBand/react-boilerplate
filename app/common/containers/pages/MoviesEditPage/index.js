import React from 'react';
import { withRouter } from 'react-router';
import { updateMovie, fetchMovie } from '@/redux/data/movies';
import MovieForm from '@/containers/forms/MovieForm';
import { provideHooks } from 'redial';
import { getMovie } from '@/redux';
import { translate } from 'react-i18next';

import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

const MoviesEditPage = ({ onSubmit, movie, t }) => (
  <div>
    <div>
      {t('Edit movie')}
    </div>
    <div>
      <MovieForm initialValues={movie} onSubmit={onSubmit} />
    </div>
  </div>
);

export default compose(
  withRouter,
  translate(),
  provideHooks({
    fetch: ({ dispatch, params, setProps }) => dispatch(fetchMovie(params.id)).then((response) => {
      setProps({
        movieId: response.payload.result,
      });
    }),
  }),
  connect((state, ownProps) => ({
    movie: getMovie(state, ownProps.movieId),
  }), {
    updateMovieAction: updateMovie,
  }),
  withHandlers({
    onSubmit: ({ updateMovie, movieId, router }) => async (formValues) => {
      await updateMovie(movieId, formValues);
      router.push('/movies');
    },
  })
)(MoviesEditPage);
