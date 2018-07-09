import uuid from 'uuid/v4';

export const actors = [
  {
    id: '333',
    name: 'Crtistian Bale',
    year: 1974,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Christian_Bale_2014_%28cropped%29.jpg/220px-Christian_Bale_2014_%28cropped%29.jpg',
    movies: [],
    isFavorite: true,
  },
  {
    id: '111',
    name: 'Jane Doe',
    year: 1988,
    photo: 'https://randomuser.me/api/portraits/women/26.jpg',
    movies: [],
    isFavorite: true,
  },
  {
    id: '222',
    name: 'John Doe',
    year: 1980,
    photo: 'https://randomuser.me/api/portraits/men/26.jpg',
    movies: [],
    isFavorite: false,
  },
];

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
    actors: ['111'],
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
    actors: ['222'],
    isFavorite: false,
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
    actors: ['333'],
    isFavorite: true,
  },
];
