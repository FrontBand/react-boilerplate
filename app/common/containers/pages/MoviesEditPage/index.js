import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { updateMovie, fetchMovie } from '@/redux/data/movies';
import { getMovie } from '@/reducers';

import MovieForm from '@/containers/forms/MovieForm';

import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesDetailsPage = ({ onSubmit, movie = {} }) => (
  <div className={styles.root}>
    <MovieForm initialValues={movie} onSubmit={onSubmit} />
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  provideHooks({
    fetch: ({ dispatch, params, setProps }) =>
      dispatch(fetchMovie(params.id)).then((response) => {
        setProps({
          movieId: response.payload.result,
        });
      }),
  }),
  connect(
    (state, ownProps) => ({
      movie: getMovie(state, ownProps.movieId),
    }),
    { updateMovie }
  ),
  withHandlers({
    onSubmit: ({ updateMovie, router }) => async (formValues) => {
      const response = await updateMovie(formValues.id, formValues);
      router.push(`/movies/${response.payload.result}`);
    },
  })
)(MoviesDetailsPage);
