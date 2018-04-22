import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import classnames from 'classnames';
import { compose } from 'recompose';
import styles from './styles.scss';

const TextareaInput = ({ error, ...rest }) => (
  <textarea className={classnames(styles.root, error && styles.isError)} {...rest} />
);

TextareaInput.propTypes = {
  error: PropTypes.bool,
};

export default compose(
  withStyles(styles)
)(TextareaInput);
