Cypress.Commands.add('firstName', () => { cy.get('[name="first_name"]') })



Cypress.Commands.add('lastName', () => { cy.get('[name="last_name"]') })

Cypress.Commands.add('submitButton', () => { cy.get('[type="submit"]').click() })