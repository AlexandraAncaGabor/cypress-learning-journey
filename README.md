# cypress-learning-journey
Learning Cypress through practical examples, from basics to intermediate.

**🌱 Learning Goals**

- Master basic Cypress commands: `cy.visit()`, `cy.get()`, `cy.click()`, etc.
- Radio buttons, Checkboxes, Test forms, buttons, dropdowns, and calendar widgets,
- Write reusable tests with fixtures and custom commands
- Understand integration with CI/CD pipelines (future goal)
- Progress from manual testing skills to automation expertise

**📂 Examples

**I. UI- tests:**

**1. Verify Login Button Exists**
   [Test file](cypress/e2e/UI-elements/LoginButton-UI.cy.js)  
   - Checks that the login button is present on the page.  
   - Screenshot included. [here](cypress/screenshots/UI-elements/login-button.png)

**2. Check Text "Password" Exists**
  [Test file](cypress/e2e/UI-elements/ContainsTextPassword.cy.js)
   - Confirms that the text `Password` is visible on the login page.  
   - Screenshot included. [here](cypress/screenshots/UI-elements/password_text.png)

**II. Authentication Tests**
**1. Login Functionality**
    [Test file](cypress/e2e/Authentication/TestLogin.cy.js)
   - Tests that a user can log in with valid credentials.  
   - Screenshot included. [here](cypress/screenshots/Authentication/login_flow.png)

**2. Negative scenarios for login**
[Test file](cypress/e2e/Authentication/Logout.cy.js)
- Tests that the login functionality properly handles invalid inputs and prevents unauthorized access.
- This includes: invalid username, invalid password, and empty credentials.
- Error messages are displayed appropriately for each scenario.
- Screenshots are included: 
    - [saucedemo-login-error-empty](cypress/screenshots/Authentication/saucedemo-login-error-empty.png)   
    - [saucedemo-login-error-wrong-password](cypress/screenshots/Authentication/saucedemo-login-error-password.png)  
    - [saucedemo-login-error-wrong-user](cypress/screenshots/Authentication/saucedemo-login-error.png) 

**3. Logout flow**
[Test file](cypress/e2e/Authentication/Logout.cy.js)
- Tests the logout flow
- Screenshot included. [here](cypress/screenshots/Authentication/logout_flow.png)

**III. Cart flow tests**
**1. Add To Cart**
[Test file](cypress/e2e/Cart/AddToCartCarturesti.cy.js)
- Add to cart a specific book ("Poveste de Craciun")
- Verifies the cart 
- Screenshot included [here](cypress/screenshots/Cart/carturesti-add-to-cart.png)

**IV. Dropdowns options
**1. Single check on dropdown menu**
[Test file](cypress/e2e/Dropdowns&Checkboxes/single_check_dropdown_menu.cy.js)
- Open Carturesti website dropdown menu
- Verify that selecting "Carte" redirects the user correctly. 
- Screenshot included [here](cypress/screenshots/Dropdowns and checkboxes/produse_dropdown_selection.png)

**2. Check all options from dropdown menu**
[Test file](cypress/e2e/Dropdowns&Checkboxes/All_options_check_dropdown_menu.cy.js)
- Verify that all options in the Carturesti dropdown menu are accessible.  
- Screenshot included [here](cypress/screenshots/Dropdowns and checkboxes/produse_dropdown_selection (1).png)

**🔧 Tech Stack**
- Cypress
- JavaScript
- GitHub

*Notes: More tests will be added as I continue learning the testing framework.

_✨ Guided by curiosity, committed to quality._
