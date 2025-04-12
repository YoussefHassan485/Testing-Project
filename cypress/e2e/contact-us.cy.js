describe('Contact US', () => {
//     it.skip('[1] how cypress visit the website', () => {
//       cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
//     });
//     it.skip('[2] how to select elements by id', () => {
//         cy.visit("https://www.webdriveruniversity.com")
        
//         // select element by ID --> # + value of the ID

//         cy.get('#contact-us').click()

//         // select element by class --> dot + class name
    
//     });

//     it.skip('[3] how to select elements by class', () => {
//         cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        
//         // select element by ID --> # + value of the ID

//         cy.get('.contact_button').first().click()
//         // cy.get('.contact_button').last().click()

//         // select element by class
    
//     });

    it.only('[4] submit contact us with positive senario', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.firstName().type("cave")
        cy.lastName().type("johnson")
        cy.get('[name="email"]').type("cavejohnson@mail.com")
        cy.get('.feedback-input').eq(3).type("this is automation testing framework using cypress")
        cy.submitButton()
        cy.url().should('eq','https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
    });

    // it('[5] submit contact us with negative senario', () => {
    //     cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    //     cy.title().should('eq','WebDriver | Contact Us')
    //     cy.get('[name="first_name"]').type("cave")
    //     cy.get('[name="last_name"]').type("johnson")
    //     cy.get('[name="email"]').type("cavejohnson@mail.com")
    //     //cy.get('.feedback-input').eq(3).type("this is automation testing framework using cypress")
    //     cy.get('[type="submit"]').click()
    //     //cy.get('body').should('be.exist')
    //     cy.contains("all fields are required").should("be.exist")
    // });
  });