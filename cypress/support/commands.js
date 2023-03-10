const homePage = require("../pages/homePage");
const loginPage = require("../pages/loginPage");

// Reusable command to complete the login flow through the UI
//  as we do not have the necessary API details to support headless auth
Cypress.Commands.add('Login',()=>{
    cy.visit('/')
    homePage.elements.logInButton().click()
    loginPage.elements.emailInputField().type(Cypress.env('positUserName'))
    loginPage.elements.continueButton().click()
    loginPage.elements.passwordInputField().type(Cypress.env('positUserPass'))
    loginPage.elements.logInButton().click()
})

// Since we do not have programmatic auth, in order to cleanup the previously created
//  project, we grab the Bearer token from the '/users/me' call
//
// Then the Bearer token is used to GET any created project ID's.
// The project ID is then used in the PATCH request to 'trash'
//  the previously created project in an effort to eliminate old test data
//  from interfering with tests.
Cypress.Commands.add('trashRecentTestProject', () => {
    cy.intercept('GET', '**/users/me').as('me')
    cy.wait('@me').then(xhr =>{
      cy.wrap(xhr.request.headers.authorization).as('bearerToken')
    })
    cy.get('@bearerToken').then(bearerToken => {
        cy.request({
            method: 'GET',
            url: 'https://api.posit.cloud/v1/workspace/content/',
            form: true,
                headers:{
                    'authorization': bearerToken
                },
            }).then((response) =>{
                if(response.body.content.includes(response.body.content[0])){
                cy.request({
                    method: 'PATCH',
                    url: 'https://api.posit.cloud/v1/projects/'+response.body.content[0].id,
                    form: false,
                        headers:{
                            'authorization': bearerToken
                        },
                    body:{
                        'state': 'trashed'
                    }
                    })
                }
            })
    })
})
