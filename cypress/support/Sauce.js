Cypress.Commands.add('personLink', () => { cy.get('#menuUserLink').click() })

Cypress.Commands.add('userName', () => { cy.get('input[name="username"]').click() })

Cypress.Commands.add('passWord', () => { cy.get('input[name="password"]').click() }) 

Cypress.Commands.add('submitButton', () => { cy.get('#sign_in_btn').click() })

Cypress.Commands.add('productIMG', ()=> { cy.get('#speakersImg').click() })

Cypress.Commands.add('product', ()=> { cy.get('#20').click() })

Cypress.Commands.add('cartButton', ()=> { cy.get('[name="save_to_cart"]').click() })

Cypress.Commands.add('menucart', ()=> { cy.get('#cartButton').click() })

Cypress.Commands.add('removeButton', ()=> { cy.get('.removeProduct.iconCss.iconX').click() })  

Cypress.Commands.add('checkOut', ()=> { cy.get('#checkOutPopUp').click() })

Cypress.Commands.add('nextButton', ()=> { cy.get('#next_btn').click() })

Cypress.Commands.add('safepayName', ()=> { cy.get('[name="safepay_username"]').click() })

Cypress.Commands.add('safepayPassword', ()=> { cy.get('[name="safepay_password"]').click() })

Cypress.Commands.add('payNow', ()=> { cy.get('#pay_now_btn_SAFEPAY').click() })

Cypress.Commands.add('chatBot', ()=> { cy.get('#chatLogo').click() })

Cypress.Commands.add('chating', ()=> { cy.get('#textMessage').click() })

Cypress.Commands.add('twit', ()=> { cy.get('[name="follow_twitter"]').click() })