import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { updateMovie, fetchMovie } from '@/redux/data/movies';

import MovieForm from '@/containers/forms/MovieForm';

import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesCreatePage = ({ onSubmit, t, movie }) => (
  <div className={styles.root}>
    <div className={styles.title}>{t('Edit movie')}</div>
    <div className={styles.back}>
      <Link to="/movies">{t('Back to the list of movies')}</Link>
    </div>
    <div className={styles.form}>
      <MovieForm
        initialValues={{
          title: movie.title,
          poster: movie.poster,
          description: movie.description,
          year: movie.year,
          director: movie.director,
        }}
        onSubmit={onSubmit}
      />
    </div>
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
          movie: Object.values(response.payload.entities.movies).reduce(
            (prev, next) => ({ ...prev, ...next }),
          ),
        });
      }),
  }),
  connect(
    null,
    {
      updateMovie,
    },
  ),
  withHandlers({
    onSubmit: ({ updateMovie, router, params }) => async (formValues) => {
      await updateMovie(params.id, formValues);
      router.push('/movies');
    },
  }),
)(MoviesCreatePage);
