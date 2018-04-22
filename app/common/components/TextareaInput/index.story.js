import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextareaInput from './index';

storiesOf('components/TextareaInput', module)
  .add('General', () => (
    <TextareaInput value="input value" onChange={action('change')} />
  ));
