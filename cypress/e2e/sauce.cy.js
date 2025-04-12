describe('SOS', () => {

    it('[1] test if username is valid and password is invalid', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauc")
        cy.submitButton()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    });

    it('[2] test if username is invalid and password is valid', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("sdcsdc")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    });

    it('[3] test if username and password is invalid', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("sdcsdc")
        cy.passWord().type("secret_sauc")
        cy.submitButton()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    });

    it('[4] test if username and password are valid', () => {
            cy.visit("https://www.saucedemo.com/")
            cy.userName().type("standard_user")
            cy.passWord().type("secret_sauce")
            cy.submitButton()
            cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    });

    it('[5] Add item to cart', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.cartButton()
        
        
    });
    it('[6] Remove item from cart', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.cartButton()
        cy.removeButton()
        
        
    });
    it('[7] View items in cart', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.cartButton()
        cy.viewcartButton()
        cy.url().should('eq','https://www.saucedemo.com/cart.html')
        
        
    });
    it('[8] Checkout', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.cartButton()
        cy.viewcartButton()
        cy.checkOut()
        cy.url().should('eq','https://www.saucedemo.com/checkout-step-one.html')
        
        
    });
    it('[9] Continue Checkout without details', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.cartButton()
        cy.viewcartButton()
        cy.checkOut()
        cy.continue()
        cy.url().should('eq','https://www.saucedemo.com/checkout-step-one.html')
        
        
    });

    it('[10] Continue Checkout with details', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.cartButton()
        cy.viewcartButton()
        cy.checkOut()
        cy.firstName().type("wefwef")
        cy.lastName().type("wefwef")
        cy.zipCode().type("wefwef")
        cy.continue()
        cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html')
        
        
    });
    it('[11] Place order', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.cartButton()
        cy.viewcartButton()
        cy.checkOut()
        cy.firstName().type("wefwef")
        cy.lastName().type("wefwef")
        cy.zipCode().type("wefwef")
        cy.continue()
        cy.finish()
        cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')
        
        
    });

    it('[12] Go back home', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.cartButton()
        cy.viewcartButton()
        cy.checkOut()
        cy.firstName().type("wefwef")
        cy.lastName().type("wefwef")
        cy.zipCode().type("wefwef")
        cy.continue()
        cy.finish()
        cy.goBack()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        
        
    });

    it('[13] Logout user', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.userName().type("standard_user")
        cy.passWord().type("secret_sauce")
        cy.submitButton()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        cy.menu()
        cy.logOut()
        cy.url().should('eq','https://www.saucedemo.com/')

});

it.only('[14] Sort items from Z to A', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.userName().type("standard_user")
    cy.passWord().type("secret_sauce")
    cy.submitButton()
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    cy.productSort_za()
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')

});
it.only('[15] Sort items from Low to High price', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.userName().type("standard_user")
    cy.passWord().type("secret_sauce")
    cy.submitButton()
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    cy.productSort_hilo()
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')

});
    

      });