describe('Should successfully edit movie', () => {
  it('Creating a New Movie', () => {
    cy.visit('/movies/create');
    cy.screenshot();

    cy.get('input[name=title]').type('Test title');

    cy.get('input[name=poster]').type(
      'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    );

    cy.get('textarea[name=description]').type('Test description');

    cy.get('input[name=year]').type('Test year');

    cy.get('input[name=director]').type('Test director');

    cy.get('label').click();

    cy.get('button').click();
  });
  it('should display list', () => {
    cy.visit('/movies');
    cy.screenshot();
  });
  it('should enter edit movie page', () => {
    cy.get(
      '.item__app-common-containers-pages-MoviesListPage-styles__1cJgl:last',
    ).click();
    cy.get('button:first').click();
    cy.screenshot();
  });
  it('should enter edit movie page', () => {
    cy.get('input[name=title]')
      .clear()
      .type('Another Test title');

    cy.get('input[name=poster]')
      .clear()
      .type('https://image.tmdb.org/t/p/w500/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg');

    cy.get('textarea[name=description]')
      .clear()
      .type('Another test description');

    cy.get('input[name=year]')
      .clear()
      .type('2188');

    cy.get('input[name=director]')
      .clear()
      .type('Another Test director');

    cy.get('label').click();

    cy.get('button').click();
  });
});
