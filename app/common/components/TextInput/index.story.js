import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from './index';

storiesOf('components/TextInput', module)
  .add('General', () => (
    <TextInput value="input value" onChange={action('change')} />
  ));
