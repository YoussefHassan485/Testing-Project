import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Advantage Online Shopping website", () => {
  cy.visit("https://advantageonlineshopping.com/#/");
});

When("I open the login page", () => {
  cy.personLink();
});

When("I enter the username {string}", (username) => {
  cy.userName().type(username);
});

When("I enter the password {string}", (password) => {
  cy.passWord().type(password);
});

When("I click the login button", () => {
  cy.submitButton();
});

Then("I should remain on the login page", () => {
  cy.get('#signInResultMessage').should('be.visible');
});



