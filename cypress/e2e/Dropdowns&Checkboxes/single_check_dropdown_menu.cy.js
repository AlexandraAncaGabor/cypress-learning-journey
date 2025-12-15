describe('Carturesti Dropdown - Single Option Test', () => {

  it('Select a single option from Produse dropdown', () => {

    cy.visit('https://carturesti.ro/');
    
    // Check that the dropdown 'Produse' is visible and contains the correct text
    cy.get('.mega-menu-container.ng-scope').find('span')
      .should('be.visible')
      .and('contain.text', 'Produse');

    // Open the dropdown
    cy.get('.mega-menu-container.ng-scope').click();

    // Select 'Carte' option and force click if covered
    cy.get('.md-list-item-text a').contains('Carte').click({ force: true });

    // Verify the URL has changed correctly after selection
    cy.url().should('include', '/raft/carte-109');

    cy.screenshot('produse_dropdown_selection'); // Take screenshot
  });

  })

