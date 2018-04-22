import React from 'react';
import withStyles from 'withStyles';
import { compose } from 'recompose';
import styles from './styles.scss';

const Form = ({ ...rest }) => (
  <form className={styles.root} {...rest} />
);

export FormRow from './FormRow';

export default compose(
  withStyles(styles)
)(Form);
