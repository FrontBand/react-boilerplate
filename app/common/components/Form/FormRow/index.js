import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import styles from './styles.scss';

const FormRow = ({ label, children, ...rest }) => (
  <div className={styles.root} {...rest}>
    { label && <div className={styles.label}>{ label }</div>}
    <div className={styles.content}>
      { children }
    </div>
  </div>
);

FormRow.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};

export default compose(
  withStyles(styles)
)(FormRow);
