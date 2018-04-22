import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import styles from './styles.scss';

const Poster = ({ src, title }) => (
  <div className={styles.root} style={{ backgroundImage: `url(${src})` }} alt={title} />
);

Poster.propTypes = {
  children: PropTypes.node,
};

export default compose(
  withStyles(styles)
)(Poster);
