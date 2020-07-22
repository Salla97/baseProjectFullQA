/**
 * File: meuCarrinhoPage.js
 * Autor: Gabriel Salla
 * Data: 17/07/2020
 */
const assert = require('chai').assert;

class MeuCarrinhoPage {
    // define os elementos
    get nomeProdutoLbl() { return $('section#sectionContent a > strong'); }
    get qntProdutoLbl() { return $('input[data-id="qtdeSku"'); }
    get tipoPrazoFreteLbl() { return $('span[data-id="disponibilidade"]'); }
    get valorFreteLbl() { return $('span[data-id="valor"]'); }
    get valorProdutoUnitLbl() { return $('section#sectionContent ins.precoPorValorUnitario'); }
    get valorTotalProdutoLbl() { return $('td[data-id="precoTotal"]'); }
    get valorSubTotalProdutoLbl() { return $('td[data-id="subTotalProdutos"]'); }
    get freteConsultadoLbl() { return $('input#Cep'); }
    get subTotalFreteLbl() { return $('td[data-id="valorFrete"]'); }
    get cupomDescontoLbl() { return $('section#sectionContent td.couponValue'); }
    get valorTotalCarrinhoLbl() { return $('em[data-id="valorTotal"]'); }
    get concluirCompraDownBtn() { return $('a[data-id="btnComprar"][class*="btConcluir"]'); }


    //Metodos dos elementos de ação
    nomeProdutoValue() {
        this.nomeProdutoLbl.waitForDisplayed();
        return this.nomeProdutoLbl.getText();
    }

    qnteProdutoValue() {
        this.qntProdutoLbl.waitForDisplayed();
        return this.qntProdutoLbl.getValue();
    }

    tipoPrazoFreteValue() {
        this.tipoPrazoFreteLbl.waitForDisplayed();
        return this.tipoPrazoFreteLbl.getText();
    }

    valorFreteValue() {
        this.valorFreteLbl.waitForDisplayed();
        return this.valorFreteLbl.getText();
    }

    valorProdutoUnValue() {
        this.valorProdutoUnitLbl.waitForDisplayed();
        return this.valorProdutoUnitLbl.getText();
    }

    valorTotalProdutoValue() {
        this.valorTotalProdutoLbl.waitForDisplayed();
        return this.valorTotalProdutoLbl.getText();
    }

    subTotalProdutoValue() {
        this.valorSubTotalProdutoLbl.waitForDisplayed();
        return this.valorSubTotalProdutoLbl.getText();
    }

    freteConsultadoValue() {
        this.freteConsultadoLbl.waitForDisplayed();
        return this.freteConsultadoLbl.getValue();
    }

    subTotalFreteValue() {
        this.subTotalFreteLbl.waitForDisplayed();
        return this.subTotalFreteLbl.getText();
    }

    cupomDescontoValue() {
        this.cupomDescontoLbl.waitForDisplayed();
        return this.cupomDescontoLbl.getText();
    }

    valorTotalCarrinhoValue() {
        this.valorTotalCarrinhoLbl.waitForDisplayed();
        return this.valorTotalCarrinhoLbl.getText();
    }

    concluirCompraClick() {
        this.concluirCompraDownBtn.waitForDisplayed();
        this.concluirCompraDownBtn.click(); 
    }

}

module.exports = MeuCarrinhoPage;