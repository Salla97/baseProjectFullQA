/**
 * File: detalhesProdutoPage.js
 * Autor: Gabriel Salla
 * Data: 17/07/2020
 */
const assert = require('chai').assert;

class DetalhesProdutoPage {
    // define os elementos
    get productNameLbl() { return $('span#productTitle'); }
    get priceLbl() { return $('span#priceblock_saleprice'); }
    get qtdeValorParcelaLbl() { return $('div#installmentCalculator_feature_div > span.a-text-bold'); }
    get comprarAgoraBtn() { return $('input#buy-now-button'); }
    get addCarrinhoBtn() { return $('input#add-to-cart-button'); }
    get calculadoraPrestacaoLink() { return $('span#InstallmentCalculatorTrigger > a'); }
    get duasVezesSJurosLbl() { return $('table#InstallmentCalculatorTable tr:nth-child(2) > td.a-text-left.a-nowrap'); }
    get valorDuasVezesSJurosLbl() { return $('table#InstallmentCalculatorTable tr:nth-child(2) > td:nth-child(2)'); }

    //Metodos dos elementos de ação
    visualizarProductName(texto) {
        this.productNameLbl.waitForDisplayed();
        expect(this.productNameLbl.getText()).to.equal(texto);
    }

    priceValue() {
        this.priceLbl.waitForDisplayed();
        return this.priceLbl.getText();
    }

    qtdeValorParcelaValue() {
        this.qtdeValorParcelaLbl.waitForDisplayed();
        return this.qtdeValorParcelaLbl.getText();
    }

    duasVezesSJurosValue() {
        this.calculadoraPrestacaoLink.waitForDisplayed();
        this.calculadoraPrestacaoLink.click();
        this.duasVezesSJurosLbl.waitForDisplayed();
        return this.duasVezesSJurosLbl.getText();
    }

    valorDuasVezesSJurosValue() {
        this.calculadoraPrestacaoLink.waitForDisplayed();
        this.calculadoraPrestacaoLink.click();
        this.valorDuasVezesSJurosLbl.waitForDisplayed();
        return this.valorDuasVezesSJurosLbl.getText();
    }

    comprarAgoraClick() {
        this.comprarAgoraBtn.waitForDisplayed();
        this.comprarAgoraBtn.click();
    }

    addCarrinhoClick() {
        this.addCarrinhoBtn.waitForDisplayed();
        this.addCarrinhoBtn.click();
    }
}

module.exports = DetalhesProdutoPage;