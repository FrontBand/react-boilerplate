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
    actors: ['John Doe'],
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
    isFavorite: false,
    actors: ['Jane Doe'],
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
    isFavorite: true,
    actors: [
      'Christian Bale',
      'Michael Caine',
      'Heath Ledger',
      'Gary Oldman',
      'Aaron Eckhart',
      'Maggie Gyllenhaal',
      'Morgan Freeman',
    ],
  },
  {
    id: uuid(),
    title: 'The Dark Knight rises',
    year: 2012,
    poster:
      'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    genres: ['Action', 'Crime', 'Drama'],
    isFavorite: true,
    actors: [
      'Christian Bale',
      'Michael Caine',
      'Gary Oldman',
      'Anne Hathaway',
      'Tom Hardy',
      'Marion Cotillard',
      'Joseph Gordon-Levitt',
      'Morgan Freeman',
    ],
  },
];

export const actors = [
  {
    id: uuid(),
    name: 'Crtistian Bale',
    year: 1974,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Christian_Bale_2014_%28cropped%29.jpg/220px-Christian_Bale_2014_%28cropped%29.jpg',
    movies: ['The Dark Knight', 'The Dark Knight rises'],
    isFavorite: true,
  },
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
    name: 'Jane Doe',
    year: 1988,
    photo: 'https://randomuser.me/api/portraits/women/26.jpg',
    movies: ['one', 'two', 'three'],
    isFavorite: true,
  },
  {
    id: uuid(),
    name: 'John Doe',
    year: 1980,
    photo: 'https://randomuser.me/api/portraits/men/26.jpg',
    movies: ['one', 'three'],
    isFavorite: false,
  },
];