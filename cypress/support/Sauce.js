Cypress.Commands.add('userName', () => { cy.get('#user-name').click() })

Cypress.Commands.add('passWord', () => { cy.get('#password').click() })

Cypress.Commands.add('submitButton', () => { cy.get('#login-button').click() })

Cypress.Commands.add('cartButton', ()=> { cy.get('#add-to-cart-sauce-labs-backpack').click() })

Cypress.Commands.add('removeButton', ()=> { cy.get('[data-test="remove-sauce-labs-backpack"]').click() })

Cypress.Commands.add('viewcartButton', ()=> { cy.get('.shopping_cart_link').click() })

Cypress.Commands.add('checkOut', ()=> { cy.get('#checkout').click() })

Cypress.Commands.add('continue', ()=> { cy.get('#continue').click() })

Cypress.Commands.add('firstName', ()=> { cy.get('#first-name').click() })
Cypress.Commands.add('lastName', ()=> { cy.get('#last-name').click() })
Cypress.Commands.add('zipCode', ()=> { cy.get('#postal-code').click() })

Cypress.Commands.add('finish', ()=> { cy.get('#finish').click() })

Cypress.Commands.add('goBack', ()=> { cy.get('#back-to-products').click() })

Cypress.Commands.add('logOut', ()=> { cy.get('#logout_sidebar_link').click() })

Cypress.Commands.add('menu', ()=> { cy.get('#react-burger-menu-btn').click() })

Cypress.Commands.add('productSort_za', ()=> { cy.get('.product_sort_container').select('za') })

Cypress.Commands.add('productSort_hilo', ()=> { cy.get('.product_sort_container').select('hilo') })