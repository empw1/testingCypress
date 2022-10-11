import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/loginPage");

Given("Um navegador da web está na página de login do saucelabs", () => {
  cy.visit("/");
});

When("Um usuário insere o nome de usuário {string}, e password {string}, e clica no botão de login", (username,password) => {
  loginPage.submitLogin(username,password)
});
When("Um usuário fornece credenciais incorretas e clica no botão de login", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)
  });
});
Then("o URL conterá o subdiretório de inventário", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("deve exibir mensagem de erro {string} é mostrada", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
