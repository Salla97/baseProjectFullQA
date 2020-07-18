/**
 * File: meuCarrinhoPage.js
 * Autor: Gabriel Salla
 * Data: 17/07/2020
 */
const assert = require('chai').assert;

class MeuCarrinhoPage {
    // define os elementos
    get previousBtn() { return $('div > div[class*="bnrAuto"] > button[aria-label="Previous"]'); }


    //Metodos dos elementos de ação
    isPreviousVisible() {
        this.previousBtn.waitForDisplayed();
        assert.equal(this.previousBtn.isDisplayed(), true);
    }

}

module.exports = MeuCarrinhoPage;