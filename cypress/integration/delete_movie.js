describe('Should delete movie', () => {
  it('Creating a favorite Movie', () => {
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

  it('should display list', () => {
    cy.visit('/movies');
    cy.screenshot();
  });
  it('should delete movie', () => {
    cy.visit('/movies');
    cy.get(
      '.item__app-common-containers-pages-MoviesListPage-styles__1cJgl:last',
    ).click();
    cy.screenshot();
    cy.get('button:last').click();
  });
});
