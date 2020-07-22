/**
 * File: identificacaoPage.js
 * Autor: Gabriel Salla
 * Data: 22/07/2020
 */
const assert = require('chai').assert;

class IdentificacaoPage {
    // define os elementos
    get tituloIdentificacaoLbl() { return $('h2[data-id="titulo"]'); }
    get sectionCompraLbl() { return $('div[class="resumoContent"] > h2'); }


    //Metodos dos elementos de ação
    visualizarCompra() {
        this.tituloIdentificacaoLbl.waitForDisplayed();
        assert.equal(this.tituloIdentificacaoLbl.isDisplayed(), true);
        assert.equal(this.sectionCompraLbl.isDisplayed(), true);
    }
}

module.exports = IdentificacaoPage;