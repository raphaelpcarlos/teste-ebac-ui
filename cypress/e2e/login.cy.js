/// <reference types= 'Cypress' />

describe('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
  });

  after(()=>{
    cy.clearCookies() // Clear cookies for the currrent domain

  })

  afterEach(()=>{
    cy.screenshot()
  })

  it('Deve fazer login com sucesso', () => {

    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.page-title').should('contain', 'Minha conta')
  })
  
  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('aluno_ebacteste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.woocommerce-error > li').should('contain', 'Erro')
  })

  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {

    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('testeeste.com')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.woocommerce-error > li').should('contain', 'Erro')
  })
})