describe('Check Login button on Login page', () => {
  it('Should display the Login button', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')  // Open login page
    cy.get('button[type="submit"]').should('be.visible')    // Verify login button exists
    cy.screenshot('login-button') // Take screenshot
  })
})