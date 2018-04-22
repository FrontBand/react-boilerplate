import React from 'react';
import { compose } from 'recompose';
import { translate } from 'react-i18next';
import { ErrorMessages, ErrorMessage } from 'react-nebo15-validate';

const ErrorMessagesTranslated = ({ children, t, ...rest }) => (
  <ErrorMessages {...rest}>
    {children}
    <ErrorMessage when="required">{t('Required field')}</ErrorMessage>
  </ErrorMessages>
);

export default compose(
  translate()
)(ErrorMessagesTranslated);
