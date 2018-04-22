import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classnames from 'classnames';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import styles from './styles.scss';

const Button = ({ block, to, ...rest }) => (
  React.createElement(
    to ? Link : 'button',
    {
      className: classnames(styles.root, block && styles.isBlock),
      to,
      ...rest,
    }
  )
);

Button.propTypes = {
  block: PropTypes.bool,
};

export default compose(
  withStyles(styles)
)(Button);
