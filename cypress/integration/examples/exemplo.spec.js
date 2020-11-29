const { createYield } = require("typescript")

describe ('Primeiro Teste', () => {
  it('Exemplos Cypress', () => {
    cy.visit('http://example.cypress.io')
    expect (true).to.equal (true)
  })
})