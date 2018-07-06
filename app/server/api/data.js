import uuid from 'uuid/v4';

export const movies = [
  {
    id: uuid(),
    title: 'The Shawshank Redemption',
    year: 1994,
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    director: 'Frank Darabont',
    genres: ['Crime', 'Drama'],
    isFavorite: false,
  },
  {
    id: uuid(),
    title: 'The Godfather',
    year: 1972,
    poster:
      'https://ia.media-imdb.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    director: 'Francis Ford Coppola',
    genres: ['Crime', 'Drama'],
    isFavorite: true,
  },
  {
    id: uuid(),
    title: 'The Dark Knight',
    year: 2008,
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    genres: ['Action', 'Crime', 'Drama'],
    isFavorite: false,
  },
];

export const actors = [
  {
    id: uuid(),
    name: 'Patrick West',
    year: 1994,
    photo: 'https://randomuser.me/api/portraits/men/95.jpg',
    movies: ['one', 'two'],
    isFavorite: false,
  },
  {
    id: uuid(),
    name: 'Chloe Holmes',
    year: 1988,
    photo: 'https://randomuser.me/api/portraits/women/26.jpg',
    movies: ['one', 'two', 'three'],
    isFavorite: true,
  },
  {
    id: uuid(),
    name: 'Miguel Adams',
    year: 1980,
    photo: 'https://randomuser.me/api/portraits/men/26.jpg',
    movies: ['one', 'three'],
    isFavorite: false,
  },
];
