import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { fetchMovie, deleteMovie } from '@/redux/data/movies';
import { getMovie } from '@/reducers';

import Poster from '@/components/Poster';
import Button from '@/components/Button';

import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesDetailsPage = ({ onDelete, movie = {}, t }) => (
  <div className={styles.root}>
    <div className={styles.poster}>
      <Poster src={movie.poster} title={movie.title} />
    </div>
    <div className={styles.content}>
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.info}>
        <p>{movie.year}</p>
        <p>{movie.description}</p>
        <p>{movie.director}</p>
        <p>
          <Link to="/movies">{t('Back to the list of movies')}</Link>
        </p>

        <Button edit to={`/movies/${movie.id}/edit`}>
          {t('Edit')}
        </Button>

        <Button remove onClick={onDelete}>
          {t('Remove')}
        </Button>
      </div>
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
          movieId: response.payload.result,
        });
      }),
  }),
  connect(
    (state, ownProps) => ({
      movie: getMovie(state, ownProps.movieId),
    }),
    { deleteMovie }
  ),
  withHandlers({
    onDelete: ({ deleteMovie, movieId, router }) => async () => {
      await deleteMovie(movieId);
      router.push('/movies');
    },
  })
)(MoviesDetailsPage);
