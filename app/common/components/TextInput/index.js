import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import classnames from 'classnames';
import { compose } from 'recompose';

import styles from './styles.scss';

const TextInput = ({ error, ...rest }) => (
  <input className={classnames(styles.input, error && styles.isError)} {...rest} />
);

TextInput.propTypes = {
  error: PropTypes.bool,
};

export default compose(withStyles(styles))(TextInput);
