# cypress-learning-journey
Learning Cypress through practical examples, from basics to intermediate.

**🌱 Learning Goals**

- Master basic Cypress commands: `cy.visit()`, `cy.get()`, `cy.click()`, etc.
- Radio buttons, Checkboxes, Test forms, buttons, dropdowns, and calendar widgets,
- Write reusable tests with fixtures and custom commands
- Understand integration with CI/CD pipelines (future goal)
- Progress from manual testing skills to automation expertise

**📂 Projects / Examples
1. **Verify Login Button Exists**
   [Test file](https://github.com/AlexandraAncaGabor/cypress-learning-journey/blob/main/cypress/e2e/CheckLoginButton.cy.js)  
   - Checks that the login button is present on the page.  
   - Screenshot included. [here](https://github.com/AlexandraAncaGabor/cypress-learning-journey/blob/main/cypress/screenshots/login-button.png)

2. **Check Text "Password" Exists**
  [Test file](https://github.com/AlexandraAncaGabor/cypress-learning-journey/blob/main/cypress/e2e/ContainsTextPassword.cy.js)
   - Confirms that the text `Password` is visible on the login page.  
   - Screenshot included. [here](https://github.com/AlexandraAncaGabor/cypress-learning-journey/blob/main/cypress/screenshots/login_flow.png)

3. **Login Functionality**
    [Test file](https://github.com/AlexandraAncaGabor/cypress-learning-journey/blob/main/cypress/e2e/TestLogin.cy.js)
   - Tests that a user can log in with valid credentials.  
   - Screenshot included. [here](https://github.com/AlexandraAncaGabor/cypress-learning-journey/blob/main/cypress/screenshots/password_text.png)

4. **Add To Cart**
[Test file](https://github.com/AlexandraAncaGabor/cypress-learning-journey/blob/main/cypress/e2e/AddToCartCarturesti.cy.js)
- Add to cart a specific book ("Poveste de Craciun")
- Verifies the cart 
- Screenshot included [here](https://github.com/AlexandraAncaGabor/cypress-learning-journey/blob/main/cypress/screenshots/carturesti-add-to-cart%20(2).png)

5. **Error message for invalid credentials**
[Test file]/Users/alexandrag/Desktop/cypress-learning-journey/cypress/e2e/Login-negative-scenarios.cy.js
- Tests that the login functionality properly handles invalid inputs and prevents unauthorized access. This includes: invalid username, invalid password, and empty credentials. Error messages are displayed appropriately for each scenario.
-  Screenshots are included. 
- [saucedemo-login-error-empty](cypress/screenshots/saucedemo-login-error-empty.png)   
- [saucedemo-login-error-password](cypress/screenshots/saucedemo-login-error-password.png)  
- [saucedemo-login-error](cypress/screenshots/saucedemo-login-error.png) 

**🔧 Tech Stack**
- Cypress
- JavaScript
- GitHub

_✨ Guided by curiosity, committed to quality._
