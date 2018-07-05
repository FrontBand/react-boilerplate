import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import styles from './styles.scss';

const Poster = ({ isFavorite, src, title }) => (
  <React.Fragment>
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${src})` }}
      alt={title}
    >
      {isFavorite && <span className={styles.isFavorite} />}
    </div>
  </React.Fragment>
);

Poster.propTypes = {
  isFavorite: PropTypes.bool,
  children: PropTypes.node,
};

export default compose(withStyles(styles))(Poster);
