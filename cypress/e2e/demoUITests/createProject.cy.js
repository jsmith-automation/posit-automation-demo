import homePage from "../../pages/homePage"

describe('Sample Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Test - Users can navigate to the Sign Up page by selecting the "Sign Up" button', () => {
    homePage.elements.signUpButton().click()
  })
})