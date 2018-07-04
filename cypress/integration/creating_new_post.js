describe('Create a new post test', () => {
  it('Creating movie', () => {
    cy.visit('/movies/create');
    cy.screenshot();

    cy.get('input[name=title]').type('Test title');

    cy.get('input[name=poster]').type(
      'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    );

    cy.get('textarea[name=description]').type('Test description');

    cy.get('input[name=year]').type('Test year');

    cy.get('input[name=director]').type('Test director');

    cy.get('input[name=isFavorite]').click();

    cy.get('button').click();
  });
  it('Creating favorite favorite movie', () => {
    cy.visit('/movies/create');
    cy.screenshot();

    cy.get('input[name=title]').type('Test title');

    cy.get('input[name=poster]').type(
      'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    );

    cy.get('textarea[name=description]').type('Test description');

    cy.get('input[name=year]').type('Test year');

    cy.get('input[name=director]').type('Test director');

    cy.get('button').click();
  });
});
