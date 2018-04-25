import React from 'react';
import { compose } from 'recompose';
import { reduxForm, Field } from 'redux-form';
import { translate } from 'react-i18next';

import Form, { FormRow } from '@/components/Form';
import FormField from '@/components/FormField';
import TextInput from '@/components/TextInput';
import TextareaInput from '@/components/TextareaInput';
import Button from '@/components/Button';

import { reduxFormValidate } from 'react-nebo15-validate';
import '@/services/validation';

const MovieForm = ({ handleSubmit, t }) => (
  <Form onSubmit={handleSubmit}>
    <FormRow label={t('Title')}>
      <Field component={FormField} inputComponent={TextInput} name="title" />
    </FormRow>
    <FormRow label={t('Poster url')}>
      <Field component={FormField} inputComponent={TextInput} name="poster" type="url" />
    </FormRow>
    <FormRow label={t('Description')}>
      <Field component={FormField} inputComponent={TextareaInput} name="description" />
    </FormRow>
    <FormRow label={t('Year')}>
      <Field component={FormField} inputComponent={TextInput} name="year" type="number" />
    </FormRow>
    <FormRow label={t('Director')}>
      <Field component={FormField} inputComponent={TextInput} name="director" />
    </FormRow>
    <FormRow>
      <Button type="submit">{t('Create')}</Button>
    </FormRow>
  </Form>
);

export default compose(
  translate(),
  reduxForm({
    form: 'movie-form',
    initialValues: {},
    validate: reduxFormValidate({
      title: {
        required: true,
      },
      poster: {
        validFileFormat: true,
        required: true,
      },
      description: {
        required: true,
      },
      year: {
        required: true,
        min: 1910,
        max: new Date().getFullYear(),
      },
      director: {
        required: true,
      },
    }),
  })
)(MovieForm);
