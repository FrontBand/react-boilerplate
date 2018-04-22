import React from 'react';
import { storiesOf } from '@storybook/react';

import Component from './index';

storiesOf('components/_Component_', module)
  .add('General', () => (
    <Component>Sample component</Component>
  ));
