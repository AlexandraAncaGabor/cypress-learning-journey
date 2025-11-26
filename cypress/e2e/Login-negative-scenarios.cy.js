describe('Login negative scenarios', () => {
  it('Error for invalid username', () => {
    cy.visit('https://www.saucedemo.com/')  // Open login page
  cy.get('[data-test="username"]').type('wrong_user') // Enter invalid username
   cy.get('[data-test="password"]').type('secret_sauce') // Enter valid password

  cy.get('[data-test="login-button"]').click() // Click login button

  // Verify error message is displayed
  cy.get('[data-test="error"]').should('be.visible')
  cy.screenshot('saucedemo-login-error') // Take screenshot
  })

  it('Error for invalid password', () => {

    cy.visit('https://www.saucedemo.com/')  // Open login page
    cy.get('[data-test="username"]').type('standard_user') // Enter valid username
    cy.get('[data-test="password"]').type('wrong_password') // Enter invalid password

    cy.get('[data-test="login-button"]').click() // Click login button

    // Verify error message is displayed
    cy.get('[data-test="error"]').should('be.visible')
    cy.screenshot('saucedemo-login-error-password') // Take screenshot
  })

  it('Error for empty credentials', () => {
    cy.visit('https://www.saucedemo.com/')  // Open login page

    cy.get('[data-test="login-button"]').click() // Click login button without entering credentials

    // Verify error message is displayed
    cy.get('[data-test="error"]').should('be.visible')
    cy.screenshot('saucedemo-login-error-empty') // Take screenshot
  })  
})