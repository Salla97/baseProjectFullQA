Feature: Adicionar produto no carrinho de compras da loja Amazon
    Como cliente do portal da loja Amazon
    Eu desejo adicionar um produto no meu carrinho de compras
    Para que eu possa realizar minha compra com sucesso
    
    Scenario: Adicionar produto no carrinho sem logar
        Given eu estou na página inicial
        When eu realizo a pesquisa do produto desejado "Pipoqueira Elétrica"
        And eu seleciono o produto pelas especificações desejadas
        And eu visualizo as formas de pagamento
        And eu visualizo meu produto no carrinho de compra
        And eu clico em fechar pedido
        # And eu realizo o meu cadastro
        # And eu calculo o frete de acordo com o meu CEP "04180-112"
        # Given eu estou na página de identificação do portal
        # When eu preencho os dados obrigatórios do dados pessoais
        # And eu preencho os dados obrigatórios dos dados de acesso ao Ponto Frio
        # And eu preencho os dados de endereço
        # And eu preencho os dados de pagamento
        # Then eu recebo a confirmação da compra do produto desejado