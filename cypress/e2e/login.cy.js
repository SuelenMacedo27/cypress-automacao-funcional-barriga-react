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
        cy.inputAccountName('Conta alterada')
        cy.btnSaveAccount()
        cy.message('Conta inserida com sucesso!')
    })

    it.only('Should edit an account', () => { //Deve alterar/editar uma conta existente
        cy.menuSettings()
        cy.accountOption()
        cy.inputAccountName('Conta alterada')
        cy.btnSaveAccount()
        cy.btnEdit()
        cy.updateAccountName('Conta alterada para teste')
        cy.btnSaveAccount()
        cy.message('Conta atualizada com sucesso!')
    })    

    it('Should not create an account with same name', () => { //Não deve criar uma conta com o mesmo nome
        cy.menuSettings()
        cy.accountOption()
        cy.inputAccountName('Conta alterada')
        cy.btnSaveAccount()
        cy.message('Conta inserida com sucesso!')
        cy.inputAccountName('Conta alterada')
        cy.btnSaveAccount()
        cy.message('Erro: Error: Request failed with status code 400')
    })

   it('Should create a transaction', () => { //Deve criar uma movimentação, transação
        cy.menuSettings()
        cy.accountOption()
        cy.inputAccountName('Conta alterada')
        cy.btnSaveAccount()
        cy.message('Conta inserida com sucesso!')
        cy.createMovement()
        cy.inputMovementDetails('teste 1', '100', 'Interessado teste')
        cy.selectAccount('Conta alterada')
        cy.btnStatus()
        cy.btnSaveMovement()
        cy.message('Movimentação inserida com sucesso!') // 1° validação
        cy.linesLength() // 2° validação
   })

   it('Should get balance', () => { //Deve validar o saldo
        cy.menuSettings()
        cy.accountOption()
        cy.inputAccountName('Conta alterada')
        cy.btnSaveAccount()
        cy.message('Conta inserida com sucesso!')
        cy.createMovement()
        cy.inputMovementDetails('teste 1', '100', 'Interessado teste')
        cy.selectAccount('Conta alterada')
        cy.btnStatus()
        cy.btnSaveMovement()
        cy.message('Movimentação inserida com sucesso!') // 1° validação
        cy.linesLength() // 2° validação
        cy.acessHome()
        cy.getBalanceAccount('Conta alterada')
   })
    
})