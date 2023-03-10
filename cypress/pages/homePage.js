class homePage {

    elements = {
  
      //Navigation Buttons
      signUpButton: () => cy.get('.menuItems').contains('Sign Up'),
      logInButton: () => cy.get('.menuItems').contains('Log In')
  
    }
  }
  
  module.exports = new homePage()