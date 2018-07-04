export const createPost = (cy, isFav = false) => {
  cy.visit('/movies/create');
  cy.screenshot();

  cy.get('input[name=title]').type('Test title');

  cy.get('input[name=poster]').type(
    'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  );

  cy.get('textarea[name=description]').type('Test description');

  cy.get('input[name=year]').type('Test year');

  cy.get('input[name=director]').type('Test director');

  if (isFav) {
    cy.get('input[name=director]').click();
  }

  cy.get('button').click();
};
