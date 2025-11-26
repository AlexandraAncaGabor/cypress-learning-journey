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

1. **Verify Login Button Exists**
   [Test file](cypress/e2e/UI-elements/LoginButton-UI.cy.js)  
   - Checks that the login button is present on the page.  
   - Screenshot included. [here](cypress/screenshots/UI-elements/login-button.png)

2. **Check Text "Password" Exists**
  [Test file](cypress/e2e/UI-elements/ContainsTextPassword.cy.js)
   - Confirms that the text `Password` is visible on the login page.  
   - Screenshot included. [here](cypress/screenshots/UI-elements/password_text.png)

**II. Authentication Tests**
1. **Login Functionality**
    [Test file](cypress/e2e/Authentication/TestLogin.cy.js)
   - Tests that a user can log in with valid credentials.  
   - Screenshot included. [here](cypress/screenshots/Authentication/login_flow.png)

2. **Negative scenarios for login**
[Test file](cypress/e2e/Authentication/Logout.cy.js)
- Tests that the login functionality properly handles invalid inputs and prevents unauthorized access.
- This includes: invalid username, invalid password, and empty credentials.
- Error messages are displayed appropriately for each scenario.
- Screenshots are included: 
    - [saucedemo-login-error-empty](cypress/screenshots/Authentication/saucedemo-login-error-empty.png)   
    - [saucedemo-login-error-wrong-password](cypress/screenshots/Authentication/saucedemo-login-error-password.png)  
    - [saucedemo-login-error-wrong-user](cypress/screenshots/Authentication/saucedemo-login-error.png) 

3. **Logout flow**
[Test file](cypress/e2e/Authentication/Logout.cy.js)
- Tests the logout flow
- Screenshot included. [here](cypress/screenshots/Authentication/logout_flow.png)

**III. Cart flow tests**
1. **Add To Cart**
[Test file](cypress/e2e/Cart/AddToCartCarturesti.cy.js)
- Add to cart a specific book ("Poveste de Craciun")
- Verifies the cart 
- Screenshot included [here](cypress/screenshots/Cart/carturesti-add-to-cart.png)

**🔧 Tech Stack**
- Cypress
- JavaScript
- GitHub

***Notes: More tests will be added as I continue progressing with learning the testing framework.**

_✨ Guided by curiosity, committed to quality._
