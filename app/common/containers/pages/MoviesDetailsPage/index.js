import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { fetchMovie, deleteMovie } from '@/redux/data/movies';
import { getMovie } from '@/redux';

import Poster from '@/components/Poster';
import Button from '@/components/Button';

import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesDetailsPage = ({
  movie = {},
  t,
  onEditMovieHandler,
  onDeleteMovieHandler,
}) => (
  <div className={styles.root}>
    <div className={styles.poster}>
      <Poster
        isFavorite={movie.isFavorite}
        src={movie.poster}
        title={movie.title}
      />
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
        <br />
        <Button color="green" onClick={onEditMovieHandler}>
          {t('Edit movie')}
        </Button>
        <Button color="red" onClick={onDeleteMovieHandler}>
          {t('Delete movie')}
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
    {
      deleteMovieAction: deleteMovie,
    },
  ),
  withHandlers({
    onEditMovieHandler: ({ router, movieId }) => () => {
      router.push(`/movies/${movieId}/edit`);
    },
    onDeleteMovieHandler: ({
      deleteMovieAction,
      router,
      params,
    }) => async () => {
      await deleteMovieAction(params.id);
      router.push('/movies');
    },
  }),
)(MoviesDetailsPage);
