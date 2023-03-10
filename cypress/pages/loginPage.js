class loginPage {

    elements = {
  
      //Log In Selectors
      emailInputField: () => cy.get('input[name="email"]'),
      passwordInputField: () => cy.get('input[name="password"]'),
      continueButton: () => cy.get('button[type="submit"]').contains('Continue'),
      logInButton: () => cy.get('button[type="submit"]').contains('Log In')
  
    }
  }
  
  module.exports = new loginPage()