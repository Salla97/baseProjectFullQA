/**
 * File: paginaPrincipalPage.js
 * Autor: Gabriel Salla
 * Data: 17/07/2020
 */
const assert = require('chai').assert;

class PaginaPrincipalPage {
    // define os elementos
    get previousBtn() { return $('div > div[class*="bnrAuto"] > button[aria-label="Previous"]'); }
    get searchTxt() { return $('input#strBusca"]'); }
    get okBnt() { return $('button#btnOK"]'); }

    //Metodos dos elementos de ação
    isPreviousVisible() {
        this.previousBtn.waitForDisplayed();
        assert.equal(this.previousBtn.isDisplayed(), true);
    }

    searchProduct(item) {
        this.searchTxt.waitForDisplayed();
        this.searchTxt.setValue(item);
        browser.keys('Enter');
    }

    open() {
        browser.url('/');
    }
}

module.exports = PaginaPrincipalPage;