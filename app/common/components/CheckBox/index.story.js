import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './index';

storiesOf('components/Input', module).add('General', () => (
  <Input type="checkbox" label="Some text" onChange={action('input')} />
));
