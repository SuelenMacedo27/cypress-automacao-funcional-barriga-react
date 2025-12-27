/// <reference types="cypress" />

// ELEMENTS 

const locators_register = {
    menu: {
        home: '[data-test="menu-home"]',
        settings: '[data-test="menu-settings"]',
        account: '[href="/contas"]',
        reset:'[href="/reset"]',
        movement: '[data-test="menu-movimentacao"]',
        extract: '[data-test="menu-extrato"]'
    },
    account: {
        nameAccount: '[data-test="nome"]',
        btnSaveAccount: '.btn',
        fn_xp_btn_edit: nome => `//table//td[contains(.,'${nome}')]/..//i[@class='far fa-edit']`
    },
    movement: {
        description: '[data-test="descricao"]',
        value: '[data-test="valor"]',
        interested: '[data-test="envolvido"]',
        selectAccount: '[data-test="conta"]',
        btnStatus: '[data-test="status"]',
        btnSaveMovement: '.btn-primary'
    },
    extract: {
        linesLength: '.list-group > li',
        fn_xp_remove_element: conta => `//span[contains(., '${conta}')]/../..//i[@class='far fa-trash-alt']`
    },
    balance:{
        fn_xp_balance_account: nome => `//td[contains(., '${nome}')]/../td[2]` // Função para buscar o saldo da conta pelo nome
    },
    message: '.toast-message'
}

// COMMANDS

Cypress.Commands.add('menuSettings', () => { //Acessando o menu de configurações
    cy.get(locators_register.menu.settings)
        .click()
})

Cypress.Commands.add('accountOption', () => { //Clicando na opção de contas
    cy.get(locators_register.menu.account)
        .click()
})

Cypress.Commands.add('inputAccountName', (inputAccount) => { //Digitando o nome da conta
    cy.get(locators_register.account.nameAccount)
        .type(inputAccount)
})

Cypress.Commands.add('btnSaveAccount', () => { //Clicando no botão salvar
    cy.get(locators_register.account.btnSaveAccount)
        .click()
})

Cypress.Commands.add('message', (message) => { //Validando mensagens
    cy.get(locators_register.message)
        .should('contain', message)
})

Cypress.Commands.add('btnEdit', () => { //Clicando no botão editar da conta criada
    cy.xpath(locators_register.account.fn_xp_btn_edit('Conta alterada'))
        .click()
})

Cypress.Commands.add('updateAccountName', (updateAccount) => { //Atualizando o nome da conta
    cy.get(locators_register.account.nameAccount)
        .clear()
        .type(updateAccount)
})

Cypress.Commands.add('resetApp', () => { //Resetando o aplicativo
    cy.get(locators_register.menu.settings).click()
    cy.get(locators_register.menu.reset).click()
})

Cypress.Commands.add('createMovement', () => { // Clicando na opção de Cadastrar Movimentação
    cy.get(locators_register.menu.movement).click() 
})

Cypress.Commands.add('inputMovementDetails', (description, value, interested) => { // Inserindo os dados da movimentação
    cy.get(locators_register.movement.description).type(description)
    cy.get(locators_register.movement.value).type(value)
    cy.get(locators_register.movement.interested).type(interested)
})

Cypress.Commands.add('selectAccount', (accountName) => { //Selecionando a conta
    cy.get(locators_register.movement.selectAccount).select(accountName)
})

Cypress.Commands.add('btnStatus', () => { //Clicando no botão status da movimentação
    cy.get(locators_register.movement.btnStatus).click()
})

Cypress.Commands.add('btnSaveMovement', () => { //Clicando no botão salvar movimentação
    cy.get(locators_register.movement.btnSaveMovement).click()
})

Cypress.Commands.add('linesLength', () => { //Validando a quantidade de linhas na movimentação
    cy.get(locators_register.extract.linesLength)
        .should('have.length', 7)
})

Cypress.Commands.add('acessHome', () => { //Acessando a tela inicial/home
    cy.get(locators_register.menu.home).click()
})

Cypress.Commands.add('getBalanceAccount', (balanceAccount) => { //Buscando o saldo da conta pelo nome
    cy.xpath(locators_register.balance.fn_xp_balance_account(balanceAccount))
        .should('contain.text', '100,00')
})

Cypress.Commands.add('acessExtract', () => { //Acessando a tela de extrato
    cy.get(locators_register.menu.extract).click()
})

Cypress.Commands.add('removeMovement', (conta) => { //Removendo uma movimentação
    cy.xpath(locators_register.extract.fn_xp_remove_element(conta)).click()
})