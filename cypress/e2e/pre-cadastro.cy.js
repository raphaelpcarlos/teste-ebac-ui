/// <reference types= 'Cypress' />

import { faker } from '@faker-js/faker';

const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

describe('Funcionalidade Login', () => {

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
  
    after(()=>{
      cy.clearCookies() // Clear cookies for the currrent domain
  
    })
  
    afterEach(()=>{
      //cy.screenshot()
    })

    it('Deve completar o pré cadastro com sucesso',()=>{
        cy.get('#reg_email').type(randomEmail)
        cy.get('#reg_password').type('!test&@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    })
   
})
