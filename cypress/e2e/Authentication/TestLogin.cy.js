describe('Login Test', () => {
  it('Visits the login page and logs in', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    // Enter username and password
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')

    // Click the login button
    cy.get('button[type="submit"]').click()

    // Verify that the dashboard has loaded
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
     cy.screenshot('login_flow') // Take screenshot
  })
})