class homePage {

    elements = {
  
      //Navigation Buttons
      signUpButton: () => cy.get('.menuItems').contains('Sig1n Up')
  
    }
  }
  
  module.exports = new homePage()