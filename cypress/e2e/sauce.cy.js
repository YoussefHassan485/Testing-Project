import project from "../support/POM/proj-POM";  
const test = new project();
describe('SOS', () => {

    beforeEach(function(){
    cy.visit('https://advantageonlineshopping.com/#/')
    })


        it('[1] test if Username is valid and password is invalid', () => {
        cy.personLink()
        cy.userName().type("ppppp")
        cy.passWord().type("Youssof1234")
        cy.submitButton()
        
    });

    
        it('[2] test if Username is invalid and password is valid', () => {
        cy.personLink()
        cy.userName().type("pppppa")
        cy.passWord().type("Youssof123")
        cy.submitButton()
        
    });
        
        it.only('[3] test if Username and password are correct', () => {
        cy.personLink()
        test.personalDetails()
        cy.submitButton()
        cy.url().should('eq','https://advantageonlineshopping.com/#/')
        
    });


        it('[4] Add item to cart', () => {
            cy.productIMG()
            cy.url().should('eq','https://advantageonlineshopping.com/#/category/Speakers/4')
            cy.product()
            cy.url().should('eq','https://advantageonlineshopping.com/#/product/20')
            cy.cartButton()

         });

        it('[5] Remove item from cart', () => {
            cy.productIMG()
            cy.url().should('eq','https://advantageonlineshopping.com/#/category/Speakers/4')
            cy.product()
            cy.url().should('eq','https://advantageonlineshopping.com/#/product/20')
            cy.cartButton()
            cy.removeButton()
        
    });

    it.only('[6] test checkout', () => {
        cy.personLink()
        test.personalDetails()
        cy.submitButton()
        cy.productIMG()
        cy.product()
        cy.cartButton()
        cy.checkOut()
        cy.nextButton()

        
    });

    it('[7] test payment', () => {
        cy.personLink()
        test.personalDetails()
        cy.submitButton()
        cy.productIMG()
        cy.product()
        cy.cartButton()
        cy.checkOut()
        cy.nextButton()
        cy.safepayName().type("44444")
        cy.safepayPassword().type("Youssof123")
        cy.payNow()

        
    });

    it('[8] test payment with wrong username', () => {
        cy.personLink()
        test.personalDetails()      
        cy.submitButton()
        cy.productIMG()
        cy.product()
        cy.cartButton()
        cy.checkOut()
        cy.nextButton()
        cy.safepayName().type("44")
        cy.safepayPassword().type("Youssof123")
        cy.payNow()

        
    });

    it('[9] test payment with wrong password', () => {
        cy.personLink()
        test.personalDetails()  
        cy.submitButton()
        cy.productIMG()
        cy.product()
        cy.cartButton()
        cy.checkOut()
        cy.nextButton()
        cy.safepayName().type("44444")
        cy.safepayPassword().type("Youssof")
        cy.payNow()

        
    });

        it('[10] test chatbot', () => {
        cy.personLink()
        test.personalDetails()
        cy.submitButton()
        cy.chatBot()
        cy.chating().type("Hello")
       

        
    });

        it('[11] test twitter', () => {
        cy.personLink()
        test.personalDetails()  
        cy.submitButton()
        cy.twit()
        
       

        
    });



    

        

            

      });