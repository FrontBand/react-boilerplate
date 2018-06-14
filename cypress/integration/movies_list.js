describe('Display movies list', () => {
  it('should display list', () => {
    cy.visit('/movies');
    cy.screenshot();
  });
});
