Cypress.on('uncaught:exception', () => false);

describe('Carturesti, Produse dropdown navigation', () => {

  const options = [
    'Carte',
    'Carte straina',
    'Carte copii & adolescenti',
    'Manga',
    'Scolaresti',
    'Muzica',
    'Jocuri si Jucarii',
    'Board games',
    'ROD',
    'Home & Deco',
    'Gourmet si Vin',
    'Ceai & accesorii',
    'Papetarie, birotica',
    'Hobby, arta, DIY',
    'Fashion',
    'Gadgeturi si accesorii',
    'Film',
    'Rafturi alese',
    'Promoții și selecții'
  ];

  it('Can access every option from Produse dropdown', () => {
    cy.visit('https://carturesti.ro/');

    cy.wrap(options).each(optionText => {
      // open dropdown
      cy.get('.mega-menu-container.ng-scope').click();

      // click option
    cy.contains('.md-list-item-text a', optionText)
        .click({ force: true });

      // verify url changed
      cy.url().should('not.eq', 'https://carturesti.ro/');

      // back to homepage
      cy.visit('https://carturesti.ro/');

      cy.screenshot('produse_dropdown_selection'); // Take screenshot
    });
  });
});