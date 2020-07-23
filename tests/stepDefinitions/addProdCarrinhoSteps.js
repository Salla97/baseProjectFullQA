/**
 * file: addProdCarrinhoSteps.js
 * Author: Gabriel Salla
 * Date: 22/07/2020
 */

const { Given, When, Then } = require('cucumber');
const PaginaPrincipalPage = require('../pages/paginaPrincipalPage');
const ResultadoPesquisaPage = require('../pages/resultadoPesquisaPage');
const DetalhesProdutoPage = require('../pages/detalhesProdutoPage');
const MeuCarrinhoPage = require('../pages/meuCarrinhoPage');
const IdentificacaoPage = require('../pages/loginPage');

const paginaPrincipalPage = new PaginaPrincipalPage();
const resultadoPesquisaPage = new ResultadoPesquisaPage();
const detalhesProdutoPage = new DetalhesProdutoPage();
const meuCarrinhoPage = new MeuCarrinhoPage();
const identificacaoPage = new IdentificacaoPage();

Given(/^eu estou na página inicial$/, () => {
    paginaPrincipalPage.open();
    paginaPrincipalPage.isPreviousVisible();
});

When(/^eu realizo a pesquisa do produto desejado "([^"]*)"$/, (nomeProduto) => {
    paginaPrincipalPage.searchProduct(nomeProduto);
    resultadoPesquisaPage.resultadoBusca(nomeProduto);
});

When(/^eu seleciono o produto pelas especificações desejadas$/, () => {

});

When(/^eu visualizo as formas de pagamento$/, () => {

});

When(/^eu visualizo meu produto no carrinho de compra$/, () => {

});

When(/^eu clico em fechar pedido$/, () => {

});