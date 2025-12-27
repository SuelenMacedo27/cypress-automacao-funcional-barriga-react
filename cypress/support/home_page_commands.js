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

// ELEMENTS 

const locators_home = {
    login: {
        user: '[data-test="email"]',
        password: '[data-test="passwd"]',
        btnLogin: '.btn'
    },
    messageLog: '.toast-message'
}

// COMMANDS

Cypress.Commands.add('acessHomePageLogin', () => { //Acessando a tela de login
    cy.visit('/')
        .get('.navbar')
})

Cypress.Commands.add('LogandoApp', () => { //Realizando login no aplicativo
    cy.get(locators_home.login.user).type('27@teste.com')
    cy.get(locators_home.login.password).type('2727')
    cy.get(locators_home.login.btnLogin).click()
    cy.get(locators_home.messageLog).should('contain','Bem vindo')
})


