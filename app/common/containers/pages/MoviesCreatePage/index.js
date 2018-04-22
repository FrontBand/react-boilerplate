import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { translate } from 'react-i18next';
import { createMovie } from '@/redux/data/movies';

import MovieForm from '@/containers/forms/MovieForm';

import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesCreatePage = ({ onSubmit, t }) => (
  <div className={styles.root}>
    <div className={styles.title}>
      {t('Create new movie')}
    </div>
    <div className={styles.back}>
      <Link to="/movies">{t('Back to the list of movies')}</Link>
    </div>
    <div className={styles.form}>
      <MovieForm onSubmit={onSubmit} />
    </div>
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  connect(null, {
    createMovie,
  }),
  withHandlers({
    onSubmit: ({ createMovie, router }) => async (formValues) => {
      const response = await createMovie(formValues);
      router.push(`/movies/${response.payload.result}`);
    },
  })
)(MoviesCreatePage);
