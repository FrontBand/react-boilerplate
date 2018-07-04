import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import styles from './styles.scss';

const Input = ({ label, error, ...rest }) => (
  <label className={styles.root}>
    {label && <span>{label}</span>}
    <input
      type="checkbox"
      className={classnames(styles.input, error && styles.isError)}
      {...rest}
    />
  </label>
);

Input.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
};

export default compose(withStyles(styles))(Input);
