import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon, { icons } from './index';

storiesOf('components/Icon', module)
  .add('General', () => (
    <div>
      { icons.map(iconName => (
        <Icon name={iconName} />
      ))}
    </div>
  ));
