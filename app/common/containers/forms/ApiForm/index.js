import React from 'react';
import { connect } from 'react-redux';

import withStyles from 'withStyles';
import { reduxForm, Field, FormSection, getFormValues } from 'redux-form';
import uniq from 'lodash/uniq';

import FieldInput from '@/components/reduxForm/FieldInput';
import { CheckboxGroup } from '@/components/reduxForm/FieldCheckboxGroup';
import FiledSelect from '@/components/reduxForm/FieldSelect';

import Button from '@/components/Button';
import Line from '@/components/Line';
import { H3 } from '@/components/Title';

import { reduxFormValidate } from 'react-nebo15-validate';

import styles from './styles.scss';

@withStyles(styles)
@reduxForm({
  form: 'api-form',
  initialValues: {
    request: {
      scheme: 'http',
    },
  },
  validate: reduxFormValidate({
    name: {
      required: true,
    },
    'request.host': {
      required: true,
    },
    'request.path': {
      required: true,
    },
  }),
})
@connect(state => ({
  values: getFormValues('api-form')(state),
}))
export default class ApiForm extends React.Component {
  state = {
    isConfirmed: false,
    showConfirm: false,
    location: null,
  };

  get isChanged() {
    const { values = {}, initialValues = {} } = this.props;
    return JSON.stringify(values) !== JSON.stringify(initialValues);
  }

  render() {
    const { handleSubmit, onSubmit, onDelete, isEdit, children, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Line width="280" />

        <div style={{ maxWidth: '280px' }} className={styles.row}>
          <Field name="name" labelText="Name" component={FieldInput} />
        </div>

        <H3>Request</H3>

        <Line width="280" />

        <div style={{ marginBottom: 10 }}>
          Methods
        </div>

        <FormSection name="request">
          <div className={styles.row}>
            <CheckboxGroup
              name="methods"
              options={[
                { label: 'POST', value: 'POST' },
                { label: 'PUT', value: 'PUT' },
                { label: 'GET', value: 'GET' },
                { label: 'DELETE', value: 'DELETE' },
              ]}
              format={value => uniq((value || []).map(i => i.toUpperCase()))}
              normalize={value => uniq(value.map(i => i.toUpperCase()))}
            />
          </div>

          <div className={styles.columns}>
            <div>
              <Field
                labelText="Scheme"
                name="scheme"
                component={FiledSelect}
                options={[
                  { name: 'http', title: 'http' },
                  { name: 'https', title: 'https' },
                ]}
              />
            </div>
            <div>
              <Field labelText="Host" name="host" component={FieldInput} />
            </div>
          </div>

          <div className={styles.columns}>
            <div>
              <Field labelText="Port" name="port" component={FieldInput} />
            </div>
            <div>
              <Field labelText="Path" name="path" component={FieldInput} />
            </div>
          </div>
        </FormSection>

        {
          children && <div className={styles.row}>
            {children}
          </div>
        }

        <Button type="submit" disabled={!this.isChanged}>
          {isEdit ? 'Save API' : 'Create API'}
        </Button>

        <div style={{ float: 'right' }}>
          {isEdit && <Button id="delete-api-button" type="button" onClick={onDelete} color="red">Delete API</Button>}
        </div>
      </form>
    );
  }
}
