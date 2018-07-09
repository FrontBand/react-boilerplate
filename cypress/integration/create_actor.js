describe('Create a new actor', () => {
  it('Successfully creating movie', () => {
    cy.visit('/actors/create');

    cy.get('input[name=name]').type('Chris Evans');

    cy.get('input[name=photo]').type(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/5_Dec._2016_CJCS_USO_Holiday_Tour_-_Incirlik_Air_Base_161205-D-PB383-044_%2831430825446%29_%28cropped%29_%28cropped%29.jpg/220px-5_Dec._2016_CJCS_USO_Holiday_Tour_-_Incirlik_Air_Base_161205-D-PB383-044_%2831430825446%29_%28cropped%29_%28cropped%29.jpg',
    );

    cy.get('textarea[name=description]').type('Test description');

    cy.get('input[name=year]').type('1981');

    cy.get('input[name=movies]').type('Avengers');

    cy.get('label').click();

    cy.get('button').click();
    cy.screenshot();
  });
});
