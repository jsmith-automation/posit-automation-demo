class homePage {

    elements = {
  
      //Navigation Buttons
      signUpButton: () => cy.get('.menuItems').contains('Sign Up')
  
    }
  }
  
  module.exports = new homePage()