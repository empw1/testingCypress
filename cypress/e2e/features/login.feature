Feature: Página de Login

    Feature A página de login funcionará dependendo das credenciais do usuário.

    Background:
        Given Um navegador da web está na página de login do saucelabs
    Scenario: Login com sucesso
        When Um usuário insere o nome de usuário "standard_user", e password "secret_sauce", e clica no botão de login
        Then o URL conterá o subdiretório de inventário
    Scenario: Login Bloqueado
        When Um usuário insere o nome de usuário "locked_out_user", e password "secret_sauce", e clica no botão de login
        Then deve exibir mensagem de erro "Epic sadface: Sorry, this user has been locked out." é mostrada
    Scenario: Login de nome de usuário incorreto
        When Um usuário fornece credenciais incorretas e clica no botão de login
            | username | password     |
            | testName | secret_sauce |
        Then deve exibir mensagem de erro "Epic sadface: Username and password do not match any user in this service" é mostrada
    Scenario: Login com senha incorreta
        When Um usuário fornece credenciais incorretas e clica no botão de login
            | username      | password     |
            | standard_user | testPassword |
        Then deve exibir mensagem de erro "Epic sadface: Username and password do not match any user in this service" é mostrada