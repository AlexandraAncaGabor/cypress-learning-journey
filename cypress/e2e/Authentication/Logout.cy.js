describe('Logout Test', () => {
  it('Login and logout flow', () => {


       cy.visit('https://www.saucedemo.com/')  // Open login page
   cy.get('[data-test="username"]').type('standard_user') // Enter valid username
   cy.get('[data-test="password"]').type('secret_sauce') // Enter valid password


    cy.get('[data-test="login-button"]').click() // Click login button

    // Verify that the dashboard has loaded
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')

        // Logout process
    cy.get('#react-burger-menu-btn').click() // Open menu
    cy.get('#logout_sidebar_link').click() // Click logout link

    // Verify that we are back on the login page
    cy.url().should('include', 'saucedemo.com')
    
     cy.screenshot('login+logout_flow') // Take screenshot
  })
})