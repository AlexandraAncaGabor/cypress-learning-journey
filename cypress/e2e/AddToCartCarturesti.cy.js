describe('Add to Cart on Carturesti', () => {
  it('Add "Poveste de Craciun" to the cart', () => {
    cy.visit('https://carturesti.ro/') 


    cy.get('.cartu-grid-tile.ng-scope') // Search for the book tile
      .contains('Poveste de Craciun')
      .click()  // Click on the book link

    
    cy.get('.cartCard.ng-scope._md') // Go to the book detail card
      .contains('Adaugă în coș')
      .click() //Click on Add to cart button

    cy.get('[data-ng-click="openCart()"]') // Select the cart button
      .click({ force: true }) // Click to open the cart

   
    cy.get('.cartProductName') // verify the book is in the cart
      .contains('Poveste de Craciun')
      .should('exist') // Assert the book is in the cart

    cy.screenshot('carturesti-add-to-cart')
  })
})