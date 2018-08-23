import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('components/Button', module)
  .add('General', () => (
    <Button>Default</Button>
  ))
  .add('Block', () => (
    <Button block>Block</Button>
  ))
  .add('Remove', () => (
    <Button remove>Remove</Button>
  ));
