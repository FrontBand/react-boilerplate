import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { fetchMovie, deleteMovie } from '@/redux/data/movies';
import { fetchActors } from '@/redux/data/actors';
import { getMovie, getAllActors } from '@/redux';

import Poster from '@/components/Poster';
import Button from '@/components/Button';

import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesDetailsPage = ({
  movie = {},
  actors = [],
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
        <h1 className={styles.actorsList}>{t('Actors list')}</h1>
        <ul>
          {actors
            .filter(x => movie.actors.includes(x.id))
            .map((actor, idx) => <li key={idx}>{actor.name}</li>)}
        </ul>
        <hr />
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
      dispatch(fetchMovie(params.id))
        .then((res) => {
          setProps({
            movieId: res.payload.result,
          });
        })
        .then(() => {
          dispatch(fetchActors()).then((res) => {
            setProps({
              actorsIds: res.payload.result,
            });
          });
        }),
  }),
  connect(
    (state, ownProps) => ({
      movie: getMovie(state, ownProps.movieId),
      actors: getAllActors(state),
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
