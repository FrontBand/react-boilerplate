import React from 'react';
import { compose } from 'recompose';
import { translate } from 'react-i18next';
import { ErrorMessages, ErrorMessage } from 'react-nebo15-validate';

const ErrorMessagesTranslated = ({ children, t, ...rest }) => (
  <ErrorMessages {...rest}>
    {children}
    <ErrorMessage when="required">{t('Required field')}</ErrorMessage>
    <ErrorMessage when="minLength">{t('Min length 4')}</ErrorMessage>
    <ErrorMessage when="min">{t('Number must be from 1910')}</ErrorMessage>
    <ErrorMessage when="max">{t(`Number must be before ${new Date().getFullYear()}`)}</ErrorMessage>
    <ErrorMessage when="validFileFormat">{t('File format must be jpg, jpeg, png')}</ErrorMessage>
  </ErrorMessages>
);

export default compose(translate())(ErrorMessagesTranslated);
