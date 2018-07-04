import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { provideHooks } from 'redial';
import { fetchMovies } from '@/redux/data/movies';
import { getMovies } from '@/redux';
import { translate } from 'react-i18next';

import Button from '@/components/Button';
import CheckBox from '@/components/CheckBox';
import MovieCard from '@/containers/blocks/MovieCard';
import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesListPage = ({
  movies,
  isFavorite,
  onMovieCardClick,
  onFilterHandler,
  t,
}) => (
  <div className={styles.root}>
    <CheckBox
      label={t('Favorites')}
      checked={isFavorite}
      onClick={onFilterHandler}
    />
    <div className={styles.list}>
      {(isFavorite ? movies.filter(x => x.isFavorite) : movies).map(movie => (
        <div className={styles.item} key={movie.id}>
          <MovieCard movie={movie} onClick={() => onMovieCardClick(movie)} />
        </div>
      ))}
    </div>
    <div className={styles.action}>
      <Button to="/movies/create">{t('Add new movie')}</Button>
    </div>
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  provideHooks({
    fetch: ({ dispatch, setProps }) =>
      dispatch(fetchMovies()).then((response) => {
        setProps({ moviesIds: response.payload.result });
      }),
  }),
  connect((state, ownProps) => ({
    movies: getMovies(state, ownProps.moviesIds || []),
  })),
  // var handler defaultValue
  withState('isFavorite', 'setIsFavorite', false),
  withHandlers({
    onMovieCardClick: ({ router }) => (movie) => {
      router.push(`/movies/${movie.id}`);
    },
    onFilterHandler: ({ isFavorite, setIsFavorite }) => () => {
      setIsFavorite(!isFavorite);
    },
  }),
)(MoviesListPage);
