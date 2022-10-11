import {
    Given,
    When,
    defineStep as And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const comprasPage = require("../../pages/comprasPage");

  Given("Usuário acessa website da saucelabs para comprar um produto", () => {
    cy.visit("/");
  });

  And("Usuário insere o nome de usuário {string}, e password {string}, e clica no botão de login", (username,password) => {
    comprasPage.submitLogin(username,password)
  });

  When("Usuário escolhe produto, e clica no carrinho", () => {
    comprasPage.addProdutoNoCarrinhoEConfirmar();
  });

  And("Preenche nome do usuário {string}, e {string}, e o {string} e clica em finalizar", (primeiroNome, segundoNome, cep) => {
    comprasPage.completandoTransacao(primeiroNome, segundoNome, cep);
  });

  Then("Deve exibir mensagem validando que a compra foi efetuada", () =>{
    cy.url().should("contains", "/checkout-complete.html");
  });

  