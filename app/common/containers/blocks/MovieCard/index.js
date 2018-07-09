import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import Poster from '@/components/Poster';
import styles from './styles.scss';

const MovieCard = ({ movie, ...rest }) => (
  <div className={styles.root} {...rest}>
    <div className={styles.poster}>
      <Poster isFavorite={movie.isFavorite} src={movie.poster} title={movie.title} />
    </div>
    <div className={styles.content}>
      <div className={styles.title}>{movie.title}</div>
    </div>
  </div>
);

MovieCard.propTypes = {
  children: PropTypes.node,
};

export default compose(withStyles(styles))(MovieCard);
