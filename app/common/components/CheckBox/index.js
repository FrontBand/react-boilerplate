import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import styles from './styles.scss';

const Input = ({ ...rest }) => (
  <input type="checkbox" className={classnames(styles.input)} {...rest} />
);

Input.propTypes = {
  label: PropTypes.string,
};

export default compose(withStyles(styles))(Input);
