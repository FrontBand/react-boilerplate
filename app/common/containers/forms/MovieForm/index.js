import React from 'react';
import { compose } from 'recompose';
import { reduxForm, Field } from 'redux-form';
import { translate } from 'react-i18next';

import Form, { FormRow } from '@/components/Form';
import FormField from '@/components/FormField';
import TextInput from '@/components/TextInput';
import TextareaInput from '@/components/TextareaInput';
import Button from '@/components/Button';
import CheckBox from '@/components/CheckBox';

import { reduxFormValidate } from 'react-nebo15-validate';

const MovieForm = ({ buttonText, handleSubmit, t }) => (
  <Form onSubmit={handleSubmit}>
    <FormRow label={t('Title')}>
      <Field component={FormField} inputComponent={TextInput} name="title" />
    </FormRow>
    <FormRow label={t('Poster url')}>
      <Field component={FormField} inputComponent={TextInput} name="poster" />
    </FormRow>
    <FormRow label={t('Description')}>
      <Field
        component={FormField}
        inputComponent={TextareaInput}
        name="description"
      />
    </FormRow>
    <FormRow label={t('Year')}>
      <Field
        component={FormField}
        inputComponent={TextInput}
        name="year"
        type="number"
      />
    </FormRow>
    <FormRow label={t('Director')}>
      <Field component={FormField} inputComponent={TextInput} name="director" />
    </FormRow>
    <FormRow>
      <Field component={FormField} inputComponent={CheckBox} name="isFavorite" />
    </FormRow>
    <FormRow>
      <Button type="submit">{buttonText || t('Create')}</Button>
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
        // eslint-disable-next-line
        format: /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        required: true,
      },
      description: {
        required: true,
      },
      year: {
        required: true,
      },
      director: {
        required: true,
      },
    }),
  }),
)(MovieForm);
