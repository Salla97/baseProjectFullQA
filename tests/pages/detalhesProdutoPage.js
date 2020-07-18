/**
 * File: detalhesProdutoPage.js
 * Autor: Gabriel Salla
 * Data: 17/07/2020
 */
const assert = require('chai').assert;

class DetalhesProdutoPage {
    // define os elementos
    get productNameLbl() { return $('div#ctl00_Conteudo_PanelMaster h1 > b'); }
    get priceLbl() { return $('strong#ctl00_Conteudo_ctl00_precoPorValue > i'); }
    get qntParcelaLbl() { return $('span#ctl00_Conteudo_ctl00_spanParcel > strong:nth-child(1)'); }
    get valorLbl() { return $('span#ctl00_Conteudo_ctl00_spanParcel > strong:nth-child(2)'); }
    get comprarBtn() { return $('a#btnAdicionarCarrinho'); }
    get cepTxt() { return $('input#ctl00_Conteudo_ctl26_txtCep'); }
    get okCepBtn() { return $('input#btnCalculoFrete'); }
    get qntDiasCepNormalLbl() { return $('td#ctl00_Conteudo_ctl26_rptTipoEntregaFrete_ctl02_lblDeliveryTime'); }
    get valorCepNormalLbl() { return $('td#ctl00_Conteudo_ctl26_rptTipoEntregaFrete_ctl02_lblValue'); }
    get duasVezesSJurosLbl() { return $('tr#ctl00_Conteudo_ctl02_rptParcelamentoCartao1_ctl02_tr > th'); }
    get valorDuasVezesSJurosLbl() { return $('tr#ctl00_Conteudo_ctl02_rptParcelamentoCartao1_ctl02_tr > td:nth-child(2)'); }
    get quatroVezesCJurosLbl() { return $('tr#ctl00_Conteudo_ctl02_rptParcelamentoCartao1_ctl04_tr > th'); }

    //Metodos dos elementos de ação

    visualizarProductName(texto) {
        this.productNameLbl.waitForDisplayed();
        expect(this.productNameLbl.getText()).to.equal(texto);
    }

    priceValue() {
        this.priceLbl.waitForDisplayed();
        return this.priceLbl.getText();
    }

    qntdParcelaValue() {
        this.qntParcelaLbl.waitForDisplayed();
        return this.qntParcelaLbl.getText();
    }

    valorParcelaValue() {
        this.valorLbl.waitForDisplayed();
        return this.valorLbl.getText();
    }

    calcularCep(cep) {
        this.cepTxt.waitForDisplayed();
        this.cepTxt.setValue(cep);
        browser.keys('Enter');
    }

    qntDiasCepNormalValue() {
        this.qntDiasCepNormalLbl.waitForDisplayed();
        return this.qntDiasCepNormalLbl.getText();
    }

    valorCepNormalValue() {
        this.valorCepNormalLbl.waitForDisplayed();
        return this.valorCepNormalLbl.getText();
    }

    duasVezesSJurosValue() {
        this.duasVezesSJurosLbl.waitForDisplayed();
        return this.duasVezesSJurosLbl.getText();
    }

    valorDuasVezesSJurosValue() {
        this.valorDuasVezesSJurosLbl.waitForDisplayed();
        return this.valorDuasVezesSJurosLbl.getText();
    }

    quatroVezesCJurosValue() {
        this.quatroVezesCJurosLbl.waitForDisplayed();
        return this.quatroVezesCJurosLbl.getText();
    }

    comprarClick() {
        this.comprarBtn.waitForDisplayed();
        this.comprarBtn.click();
    }

}

module.exports = DetalhesProdutoPage;