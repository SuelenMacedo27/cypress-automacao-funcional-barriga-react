/// <reference types="cypress" />

const locators_register = {
    menu: {
        settings: '[data-test="menu-settings"]',
        account: '[href="/contas"]',
        reset:'[href="/reset"]'
    },
    account: {
        nameAccount: '[data-test="nome"]',
        btnSave: '.btn',
        xp_btn_edit: "//table//td[contains(.,'Conta de teste 01')]/..//i[@class='far fa-edit']"
    },
    message: '.toast-message'
}

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

Cypress.Commands.add('btnSave', () => { //Clicando no botão salvar
    cy.get(locators_register.account.btnSave)
        .click()
})

Cypress.Commands.add('message', (message) => { //Validando mensagens
    cy.get(locators_register.message)
        .should('contain', message)
})

Cypress.Commands.add('btnEdit', () => { //Clicando no botão editar da conta criada
    cy.xpath(locators_register.account.xp_btn_edit)
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