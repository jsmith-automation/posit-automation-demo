// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

const homePage = require("../pages/homePage");
const loginPage = require("../pages/loginPage");

Cypress.Commands.add('Login',()=>{
    cy.visit('/')
    homePage.elements.logInButton().click()
    loginPage.elements.emailInputField().type(Cypress.env('positUserName'))
    loginPage.elements.continueButton().click()
    loginPage.elements.passwordInputField().type(Cypress.env('positUserPass'))
    loginPage.elements.logInButton().click()
})

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
