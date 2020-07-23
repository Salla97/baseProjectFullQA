/**
 * File: meuCarrinhoPage.js
 * Autor: Gabriel Salla
 * Data: 17/07/2020
 */
const assert = require('chai').assert;

class MeuCarrinhoPage {
    // define os elementos
    get nomeProdutoLink() { return $('form#activeCartViewForm span.a-size-medium.sc-product-title.a-text-bold'); }
    get qtdeProdutoLbl() { return $('span#a-autoid-0-announce > span:nth-child(2)'); }
    get valorProdutoUnLbl() { return $('form#activeCartViewForm p > span'); }
    get subTotalProdutoLbl() { return $('span#sc-subtotal-amount-activecart > span'); }
    get subTotalCarrinhoLbl() { return $('span#sc-subtotal-amount-buybox > span'); }
    get fecharPedidoBtn() { return $('input[name="proceedToRetailCheckout"]'); }

    //Metodos dos elementos de ação
    nomeProdutoValue() {
        this.nomeProdutoLink.waitForDisplayed();
        return this.nomeProdutoLink.getText();
    }
    qtdeProdutoValue() {
        this.qtdeProdutoLbl.waitForDisplayed();
        return this.qtdeProdutoLbl.getValue();
    }
    valorProdutoUnValue() {
        this.valorProdutoUnLbl.waitForDisplayed();
        return this.valorProdutoUnLbl.getText();
    }
    subTotalProdutoValue() {
        this.subTotalProdutoLbl.waitForDisplayed();
        return this.subTotalProdutoLbl.getText();
    }
    subTotalCarrinhoValue() {
        this.subTotalCarrinhoLbl.waitForDisplayed();
        return this.subTotalCarrinhoLbl.getText();
    }
    fecharPedidoClick() {
        this.fecharPedidoBtn.waitForDisplayed();
        this.fecharPedidoBtn.click();
    }
}

module.exports = MeuCarrinhoPage;