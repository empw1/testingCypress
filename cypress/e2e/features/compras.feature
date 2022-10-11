Feature: Comprar produto

    Feature usuário deve conseguir efetuar a compra de um produto com sucesso

    Background:
        Given Usuário acessa website da saucelabs para comprar um produto
        And Usuário insere o nome de usuário "standard_user", e password "secret_sauce", e clica no botão de login
    Scenario: Comprar produto com sucesso
        When Usuário escolhe produto, e clica no carrinho
        And Preenche nome do usuário "primeiro_nome", e "segundo_nome", e o "cep" e clica em finalizar
        Then Deve exibir mensagem validando que a compra foi efetuada
        
        

