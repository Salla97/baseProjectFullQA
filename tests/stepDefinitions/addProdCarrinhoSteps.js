/**
 * File: addProdCarrinhoSteps.js
 * Author: Gabriel Salla
 * Date: 22/07/2020
 */
const { Given, When, Then } = require('cucumber');

const PaginaPrincipalPage = require('../pages/paginaPrincipalPage');
const ResultadoPesquisaPage = require('../pages/resultadoPesquisaPage');
const DetalhesProdutoPage = require('../pages/detalhesProdutoPage');
const MeuCarrinhoPage = require('../pages/meuCarrinhoPage');
const IdentificacaoPage = require('../pages/identificacaoPage');

const paginaPrincipalPage = new PaginaPrincipalPage();
const resultadoPesquisaPage = new ResultadoPesquisaPage();
const detalhesProdutoPage = new DetalhesProdutoPage();
const meuCarrinhoPage = new MeuCarrinhoPage();
const identificacaoPage = new IdentificacaoPage();


Given(/^que eu estou na página inicial$/, () => {
    paginaPrincipalPage.open();
    paginaPrincipalPage.isPreviousVisible();
});

When(/^eu realizo a pesquisa do produto desejado "([^"]*)"$/, (nomeProduto) => {

});

When(/^eu seleciono o produto pelas especificações desejadas$/, () => {
    
});

When(/^eu calculo o frete de acordo com o meu CEP "([^"]*)"$/, (cep) => {

});

When(/^eu visualizo as formas de pagamento$/, () => {
    
});

When(/^eu visualizo meu produto no carrinho de compras$/, () => {
    
});

When(/^eu visualizo as formas de pagamento$/, () => {
    
});

When(/^eu visualizo as formas de pagamento$/, () => {
    
});