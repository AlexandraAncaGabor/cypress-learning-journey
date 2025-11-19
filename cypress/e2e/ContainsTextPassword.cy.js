describe('Contains text Password on Login page', () => {
  it('Contains Text Password', () => {
    
    //Open the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    // // Verify text "Password" exists
  cy.contains('Password').should('be.visible')
  })
})