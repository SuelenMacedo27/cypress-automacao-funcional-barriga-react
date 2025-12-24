/// <reference types="cypress" />

import home_page_commands from '../support/home_page_commands'
import register_page_commands from '../support/register_page_commands'

describe('Functional Level', () => {

    beforeEach('Accessing the login screen',() => { //Acessando a tela de login
        cy.acessHomePageLogin()
        cy.LogandoApp()
        cy.resetApp()
    })
    
    it('Should create an account', () => { //Deve criar uma conta
        cy.menuSettings()
        cy.accountOption()
        cy.inputAccountName('Conta de teste 01')
        cy.btnSave()
        cy.message('Conta inserida com sucesso!')
    })

    it('Should edit an account', () => { //Deve alterar/editar uma conta existente
        cy.menuSettings()
        cy.accountOption()
        cy.inputAccountName('Conta de teste 01')
        cy.btnSave()
        cy.btnEdit()
        cy.updateAccountName('Conta de teste 01 alterada')
        cy.btnSave()
        cy.message('Conta atualizada com sucesso!')
    })    

    it.only('Should not create an account with same name', () => { //Não deve criar uma conta com o mesmo nome
        cy.menuSettings()
        cy.accountOption()
        cy.inputAccountName('Conta de teste 01')
        cy.btnSave()
        cy.message('Conta inserida com sucesso!')
        cy.inputAccountName('Conta de teste 01')
        cy.btnSave()
        cy.message('Erro: Error: Request failed with status code 400')
    })

    
})