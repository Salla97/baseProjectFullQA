Feature: Cadastro de cliente no portal Ponto Frio

    Scenario: Cadastrar pessoa Física no portal
        Given eu estou na página de identificação do portal
        When eu preencho os dados obrigatórios do dados pessoais
        And eu preencho os dados obritórios dos dados de acesso do Ponto Frio
        Then eu sou redirecionado para página principal