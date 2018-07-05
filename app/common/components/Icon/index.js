import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'withStyles';
import styles from './icons.font';

export const icons = [
  'arrow-left',
  'arrow-left-large',
  'arrow-right',
  'arrow-down',
  'check-right',
  'add',
  'doc',
  'trash',
  'eye',
  'arrows-expand',
  'arrows-reduce',
  'favorite',
];

const Icon = ({ name }) => React.createElement('i', {
  className: classnames(styles.icon, styles[`icon-${name}`]),
});

Icon.propTypes = {
  name: PropTypes.oneOf(icons).isRequired,
};

export default withStyles(styles)(Icon);
