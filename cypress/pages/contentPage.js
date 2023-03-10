class contentPage {

    elements = {
  
      //Log In Selectors
      newProjectButton: () => cy.get('.menuDropDown').contains('New Project'),
      newRstudioProjectButton: () => cy.get('.newRStudioProject'),
      continueButton: () => cy.get('button[type="submit"]').contains('Continue'),
      logInButton: () => cy.get('button[type="submit"]').contains('Log In')
  
    }
  }
  
  module.exports = new contentPage()