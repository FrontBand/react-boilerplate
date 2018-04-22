import React from 'react';
import { storiesOf } from '@storybook/react';

import Form, { FormRow } from './index';

storiesOf('components/Form', module)
  .add('General', () => (
    <Form>
      <FormRow>row 1</FormRow>
      <FormRow label="row with title">row 2</FormRow>
    </Form>
  ));
