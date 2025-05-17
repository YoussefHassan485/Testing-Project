import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Advantage Online Shopping homepage', () => {
  cy.visit('https://advantageonlineshopping.com/#/');
});

When('I click on the Speakers category image', () => {
  cy.productIMG();
});

Then('I should be on the Speakers category page', () => {
  cy.url().should('eq', 'https://advantageonlineshopping.com/#/category/Speakers/4');
});

When('I select a product with id {string}', (productId) => {
  cy.get(`#${productId}`).click();
});

Then('I should be on the product detail page', () => {
  cy.url().should('eq', 'https://advantageonlineshopping.com/#/product/20');
});

When('I add the product to the cart', () => {
  cy.cartButton();
});

When('I remove the product from the cart', () => {
  cy.removeButton();
});

