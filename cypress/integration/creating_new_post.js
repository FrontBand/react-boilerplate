// describe('Create a new post test', () => {
//   it('Successfully creating movie', () => {
//     cy.visit('/movies/create');

//     cy.get('input[name=title]').type('Test title');

//     cy.get('input[name=poster]').type(
//       'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
//     );

//     cy.get('textarea[name=description]').type('Test description');

//     cy.get('input[name=year]').type('2007');

//     cy.get('input[name=director]').type('Test director');

//     cy.get('label').click();

//     cy.get('button').click();
//     cy.screenshot();
//   });
//   it('Successfully creating favorite movie', () => {
//     cy.visit('/movies/create');

//     cy.get('input[name=title]').type('Test title');

//     cy.get('input[name=poster]').type(
//       'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
//     );

//     cy.get('textarea[name=description]').type('Test description');

//     cy.get('input[name=year]').type('2007');

//     cy.get('input[name=director]').type('Test director');

//     cy.get('button').click();

//     cy.screenshot();
//   });
//   it('should not create movie with wrong url and year values', () => {
//     cy.visit('/movies/create');

//     cy.get('input[name=title]').type('Test title');

//     cy.get('input[name=poster]').type('qwerty');

//     cy.get('textarea[name=description]').type('Test description');

//     cy.get('input[name=year]').type('123');

//     cy.get('input[name=director]').type('Test director');

//     cy.get('button').click();

//     cy.screenshot();
//   });
// });
