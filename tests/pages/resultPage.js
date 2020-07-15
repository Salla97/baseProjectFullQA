/**
 * File: resultPage.js
 * Autor: Fernanda Ferreira
 * Data: 13/07/2020
 */

class ResultPage {
    // define os elementos
    get resultadoLbl() { return $('div#rso div:nth-child(1) > div > div.r > a > h3') }

    //Metodos dos elementos de ação
    resultado(){
        this.resultadoLbl.waitForDisplayed();
        return this.resultadoLbl.getText();
    }
}

module.exports = ResultPage;