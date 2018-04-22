import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import styles from './styles.scss';

const Component = ({ children }) => (
  <div className={styles.root}>
    { children }
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export default compose(
  withStyles(styles)
)(Component);
