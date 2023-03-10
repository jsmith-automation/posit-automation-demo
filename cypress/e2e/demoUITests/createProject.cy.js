import contentPage from "../../pages/contentPage";

describe('Create Projects within a Space', () => {

  beforeEach(() => {
    cy.Login()
    cy.trashRecentTestProject()
  })
  it('Create a Project within a Space and ASSERT the Posit IDE loads', () => {
    contentPage.elements.newProjectButton().click()
    contentPage.elements.newRstudioProjectButton().click()
    cy.intercept('POST', '**/events/get_events').as('ideLoaded')
    cy.wait('@ideLoaded').its('response.statusCode').should('equal', 200)
  })
})