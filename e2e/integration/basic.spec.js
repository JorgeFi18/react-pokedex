describe('Tests suite for basic behavior', () => {
  it('renders without crashing', () => {
    cy.visit('/');
  });

  it('expects to find the h1 element', () => {
    cy.visit('/')
      .get('#heading')
      .should('have.text', 'Hello world!');
  });
});