import { createPost } from './helpers/createPost';

describe('Should successfully edit movie', () => {
  it('Creating a New Movie', () => {
    createPost(cy);
  });
  it('should display list', () => {
    cy.visit('/movies');
    cy.screenshot();
  });
  it('should enter edit movie page', () => {
    cy.get(
      '.item__app-common-containers-pages-MoviesListPage-styles__1cJgl:last',
    ).click();
    cy.get('.green__app-common-components-Button-styles__OyApa').click();
    cy.screenshot();
  });
  it('should enter edit movie page', () => {
    cy.get('input[name=title]').clear().type('Another Test title');

    cy.get('input[name=poster]').clear().type(
      'https://image.tmdb.org/t/p/w500/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg',
    );

    cy.get('textarea[name=description]').clear().type('Another test description');

    cy.get('input[name=year]').clear().type('2188');

    cy.get('input[name=director]').clear().type('Another Test director');

    cy.get('button').click();
  });
});
