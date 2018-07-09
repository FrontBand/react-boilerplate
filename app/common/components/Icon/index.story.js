import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon, { icons } from './index';

storiesOf('components/Icon', module)
  .add('General', () => (
    <div>{icons.map(iconName => <Icon name={iconName} />)}</div>
  ))
  .add('Change color', () => (
    <div style={{ color: 'red' }}>
      {icons.map(iconName => <Icon name={iconName} />)}
    </div>
  ))
  .add('Change size', () => (
    <div style={{ fontSize: 30 }}>
      {icons.map(iconName => <Icon name={iconName} />)}
    </div>
  ));
