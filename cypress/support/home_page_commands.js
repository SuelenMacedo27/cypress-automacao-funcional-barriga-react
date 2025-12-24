// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

const locators_home = {
    login: {
        user: '[data-test="email"]',
        password: '[data-test="passwd"]',
        btn: '.btn'
    },
    messageLogin: '.toast-message'
}

Cypress.Commands.add('acessHomePageLogin', () => { //Acessando a tela de login
    cy.visit('/')
        .get('.navbar')
})

Cypress.Commands.add('LogandoApp', () => { //Realizando login no aplicativo
    cy.get(locators_home.login.user).type('27@teste.com')
    cy.get(locators_home.login.password).type('2727')
    cy.get(locators_home.login.btn).click()
    cy.get(locators_home.messageLogin).should('contain','Bem vindo')
})


