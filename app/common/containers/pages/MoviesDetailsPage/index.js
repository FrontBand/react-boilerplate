import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { fetchMovie } from '@/redux/data/movies';
import { getMovie } from '@/redux';

import Poster from '@/components/Poster';

import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesDetailsPage = ({ movie = {}, t }) => (
  <div className={styles.root}>
    <div className={styles.poster}>
      <Poster src={movie.poster} title={movie.title} />
    </div>
    <div className={styles.content}>
      <div className={styles.title}>
        { movie.title }
      </div>
      <div className={styles.info}>
        <p>{ movie.year }</p>
        <p>{ movie.description }</p>
        <p>{ movie.director }</p>
        <p>
          <Link to="/movies">{t('Back to the list of movies')}</Link>
        </p>
      </div>
    </div>
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  provideHooks({
    fetch: ({ dispatch, params, setProps }) => dispatch(fetchMovie(params.id)).then((response) => {
      setProps({
        movieId: response.payload.result,
      });
    }),
  }),
  connect((state, ownProps) => ({
    movie: getMovie(state, ownProps.movieId),
  })),
)(MoviesDetailsPage);
