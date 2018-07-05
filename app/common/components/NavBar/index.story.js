import React from 'react';
import { storiesOf } from '@storybook/react';
import uuid from 'uuid/v4';

import NavBar from './index';

const navBarList = [
  { title: 'Movies', path: '/movies', id: uuid() },
  { title: 'Actors', path: '/actors', id: uuid() },
];

storiesOf('NavBars/_NavBar_', module)
  .add('General', () => (
    <NavBar navBarList={navBarList} />
  ));
