import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchMovies } from '@/redux/data/movies';
import { getMovies } from '@/reducers';

import MovieCard from '@/containers/blocks/MovieCard';
import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesListPage = ({ movies = [] }) => (
  <div className={styles.root}>
    { movies.map(movie => (
      <div className={styles.item} key={movie.id}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);

export default compose(
  withStyles(styles),
  provideHooks({
    fetch: ({ dispatch, setProps }) => dispatch(fetchMovies()).then((response) => {
      setProps({ moviesIds: response.payload.result });
    }),
  }),
  connect((state, ownProps) => ({
    movies: getMovies(state, ownProps.moviesIds || []),
  }))
)(MoviesListPage);
