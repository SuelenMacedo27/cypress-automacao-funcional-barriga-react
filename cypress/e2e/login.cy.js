/// <reference types="cypress" />

import home_page_commands from '../support/home_page_commands'

describe('Functional Level', () => {

    beforeEach('Accessing the login screen',() => { //Acessando a tela de login
        cy.acessHomePageLogin()
    })
    
})