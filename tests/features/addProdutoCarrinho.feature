Feature: Adicionar produto no carrinho de compras da loja Ponto Frio
    Como cliente do portal da loja Ponto Frio
    Eu desejo adicionar um produto no meu carrinho de compras
    Para que eu possa realizar minha compra com sucesso

    Scenario: Adicionar produto no carrinho sem logar
        Given que eu estou na página inicial
        When eu realizo a pesquisa do produto desejado "Pipoqueira Elétrica"
        And eu seleciono o produto pelas especificações desejadas
        And eu calculo o frete de acordo com o meu CEP "04180-112"
        And eu visualizo as formas de pagamento
        And eu visualizo meu produto no carrinho de compras
        And eu realizo o meu cadastro
        Given eu estou na página de identificação do portal
        When eu preencho os dados obrigatórios do dados pessoais
        And eu preencho os dados obritórios dos dados de acesso do Ponto Frio
        And eu preencho os dados de endereço
        And eu preencho os dados de pagamento
        Then eu recebo a confirmação da compra do produto desejado

