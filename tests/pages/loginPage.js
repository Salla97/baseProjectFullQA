/**
 * File: loginPage.js
 * Autor: Gabriel Salla
 * Data: 23/07/2020
 */
const assert = require('chai').assert;

class LoginPage {
    // define os elementos
    get tituloLbl() { return $('form[name="signIn"] h1'); }

    //Metodos dos elementos de ação
    visualizarTelaLogin() {
        this.tituloLbl.waitForDisplayed();
        assert.equal(this.tituloLbl.isDisplayed(), true);
    }
}

module.exports = LoginPage;