import React from 'react';
import { compose /* ,  withHandlers  */ } from 'recompose';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
// import { fetchMovie, deleteMovie } from '@/redux/data/movies';
// import { getMovie } from '@/redux';

import withStyles from 'withStyles';
import styles from './styles.scss';

const MoviesDetailsPage = ({ t }) => (
  <div className={styles.root}>
    <h1>{t('Favorites')}</h1>
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  // provideHooks({
  //   fetch: ({ dispatch, params, setProps }) =>
  //     dispatch(fetchMovie(params.id)).then((response) => {
  //       setProps({
  //         movieId: response.payload.result,
  //       });
  //     }),
  // }),
  // connect(
  //   (state, ownProps) => ({
  //     movie: getMovie(state, ownProps.movieId),
  //   }),
  //   {
  //     deleteMovieAction: deleteMovie,
  //   },
  // ),
  // withHandlers({}),
)(MoviesDetailsPage);
