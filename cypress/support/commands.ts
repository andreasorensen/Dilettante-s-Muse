/// <reference types="cypress" />

Cypress.Commands.add('savePieces', () => {
  return cy.get(":nth-child(1) > .details-container > .fave-container > div > .fave-icon")
    .click()
    .get(".saved-art")
    .click()
});