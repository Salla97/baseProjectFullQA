/**
 * File: paginaPrincipalPage.js
 * Autor: Gabriel Salla
 * Data: 17/07/2020
 */
const assert = require('chai').assert;

class PaginaPrincipalPage {
    // define os elementos
    get previousBtn() { return $('i[class*="previous"]'); }
    get searchTxt() { return $('input#twotabsearchtextbox'); }
    get okBtn() { return $('input[value="Ir"]'); }

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

    open(){
        browser.url('/');
    }
}

module.exports = PaginaPrincipalPage;