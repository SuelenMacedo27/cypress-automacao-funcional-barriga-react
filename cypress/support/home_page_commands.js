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

Cypress.Commands.add('acessHomePageLogin', () => {
    cy.visit('/')
        .get('.navbar')
        
    cy.get('[data-test="email"]').type('27@teste.com')
    cy.get('[data-test="passwd"]').type('2727')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain','Bem vindo')
})


