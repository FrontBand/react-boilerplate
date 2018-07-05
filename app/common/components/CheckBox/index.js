import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'withStyles';
import { compose } from 'recompose';

import styles from './styles.scss';

const Input = ({ label = 'Favorite', error, ...rest }) => (
  <label className={styles.root}>
    <input
      type="checkbox"
      className={classnames(styles.input, error && styles.isError)}
      {...rest}
    />
    {label && <span className={styles.checkbox}>{label}</span>}
  </label>
);

Input.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
};

export default compose(withStyles(styles))(Input);
