import React from 'react';
import { storiesOf } from '@storybook/react';

import MovieCard from './index';

storiesOf('blocks/MovieCard', module)
  .add('General', () => (
    <MovieCard
      movie={{
        id: 'id',
        title: 'The Shawshank Redemption',
        year: 1994,
        poster: 'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        director: 'Frank Darabont',
      }}
    />
  ));
