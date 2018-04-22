import React from 'react';
import { compose } from 'recompose';
import withStyles from 'withStyles';
import { reduxForm, Field } from 'redux-form';
import Form, { FormRow } from '@/components/Form';
import FormField from '@/components/FormField';
import TextInput from '@/components/TextInput';
import TextareaInput from '@/components/TextareaInput';
import Button from '@/components/Button';

import { reduxFormValidate } from 'react-nebo15-validate';

import styles from './styles.scss';

const MovieForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <FormRow label="Title">
      <Field component={FormField} inputComponent={TextInput} name="title" />
    </FormRow>
    <FormRow label="Poster url">
      <Field component={FormField} inputComponent={TextInput} name="poster" />
    </FormRow>
    <FormRow label="Description">
      <Field component={FormField} inputComponent={TextareaInput} name="description" />
    </FormRow>
    <FormRow label="Year">
      <Field component={FormField} inputComponent={TextInput} name="year" type="number" />
    </FormRow>
    <FormRow label="Director">
      <Field component={FormField} inputComponent={TextInput} name="director" />
    </FormRow>
    <FormRow>
      <Button type="submit">Create</Button>
    </FormRow>
  </Form>
);

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'movie-form',
    initialValues: {},
    validate: reduxFormValidate({
      title: {
        required: true,
      },
      poster: {
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
  })
)(MovieForm);
