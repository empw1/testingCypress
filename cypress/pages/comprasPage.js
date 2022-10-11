class compraSaucePage {
    elements = {
        usernameInput: () => cy.get("#user-name"),
        passwordInput: () => cy.get("#password"),
        loginBtn: () => cy.get("#login-button"),
        addProduto: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        clicarCarrinho: () => cy.get('.shopping_cart_link'),
        confirmarCompra: () => cy.get('#checkout'),
        primeiroNome: () => cy.get('#first-name'),
        segundoNome: () => cy.get('#last-name'),
        cep: () => cy.get('#postal-code'),
        continuar: () => cy.get('#continue'),
        finalizandoTransacao: () => cy.get('#finish')
    }

    escreverUsername(username) {
        this.elements.usernameInput().type(username);
    }
    
    escreverPassword(password) {
        this.elements.passwordInput().type(password);
    }
    
    clickLogin() {
        this.elements.loginBtn().click();
      }

    submitLogin(username,password){
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
      }

    addProdutoNoCarrinhoEConfirmar(){
        this.elements.addProduto().click();
        this.elements.clicarCarrinho().click();
        this.elements.confirmarCompra().click();
    }

    completandoTransacao(primeiroNome, segundoNome, cep){
        this.elements.primeiroNome().type(primeiroNome);
        this.elements.segundoNome().type(segundoNome);
        this.elements.cep().type(cep);
        this.elements.continuar().click();
        this.elements.finalizandoTransacao().click();
    }
}
module.exports = new compraSaucePage();