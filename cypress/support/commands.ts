/// <reference types="cypress" />

Cypress.Commands.add('savePieces', () => {
  return cy.get(".fave-icon").first()
    .click()
    .get(".saved-art")
    .click()
});