import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';
import { compose, withProps, pure } from 'recompose';
import ErrorMessages from '@/components/ErrorMessages';
import styles from './styles.scss';

const FormField = ({ input, meta, showError, inputComponent: InputComponent }) => (
  <div className={styles.root}>
    <div className={styles.input}>
      <InputComponent {...input} error={showError && meta.error} />
    </div>
    { showError && (
      <div className={styles.error}>
        <ErrorMessages error={meta.error} />
      </div>
    )}
  </div>
);

FormField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  inputComponent: PropTypes.func.isRequired,
  showError: PropTypes.bool,
};

export default compose(
  withStyles(styles),
  withProps(({ meta }) => ({
    showError: !!((meta.submitFailed || (meta.touched && !meta.active)) && meta.error),
  })),
  pure
)(FormField);
