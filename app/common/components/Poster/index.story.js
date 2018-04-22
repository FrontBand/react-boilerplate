import React from 'react';
import { storiesOf } from '@storybook/react';

import Poster from './index';

const posterUrl = 'https://ia.media-imdb.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg';

storiesOf('components/Poster', module)
  .add('General', () => (
    <Poster src={posterUrl} title="The Godfather" />
  ));
