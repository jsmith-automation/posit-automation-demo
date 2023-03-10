import contentPage from "../../pages/contentPage";

describe('Create Projects within a Space', () => {

// Performs the command.js 'Login' and 'trashRecentTestProject' commands
//  before each test to ensure the user is authenticated
//  and the previously made project is removed prior to a new test being executed.
  beforeEach(() => {
    cy.Login()
    cy.trashRecentTestProject()
  })

// Using POM, we will create a new project within a space by selecting the
//  'New Project' button followed by the 'New RStudio Project' button.
//
// We then verify the Posit IDE is loaded by spying on the 'events/get_events' call
//  and confirming it has a 200 status code once loaded.
// 
// The '/events/get_events' call was observed to only occur with a 200 code once the IDE was fully loaded.
// With that observation, spying on the call until the 200 status returned seemed like an
//  effective way to assert the IDE was loaded and not specifically test the IDE itself.
  it('Create a Project within a Space and ASSERT the Posit IDE loads', () => {
    contentPage.elements.newProjectButton().click()
    contentPage.elements.newRstudioProjectButton().click()
    cy.intercept('POST', '**/events/get_events').as('ideLoaded')
    cy.wait('@ideLoaded').its('response.statusCode').should('equal', 200)
  })
})