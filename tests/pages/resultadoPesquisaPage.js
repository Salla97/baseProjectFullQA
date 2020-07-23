/**
 * File: resultadoPesquisaPage.js
 * Autor: Gabriel Salla
 * Data: 17/07/2020
 */
const expect = require('chai').expect;

class ResultadoPesquisaPage {
    // define os elementos
    get resultadoBuscaLbl() { return $('div#search span.a-color-state.a-text-bold'); }
    get filtroBtn() { return $('span#a-autoid-0-announce > span.a-dropdown-label'); }
    get selectProdMaisNovo() { return $('a#s-result-sort-select_4'); }
    get firstProductImg() { return $('div#search div:nth-child(1) > div > span > div > div > div:nth-child(2) > div[class*="sg-col-4-of"] > div > div > span > a > div > img'); }
    get firstProductLink() { return $('div#search div:nth-child(1) > div > span > div > div > div:nth-child(2) > div[class*= "sg-col-4"] > div > div:nth-child(1) > div > div > div:nth-child(1) > h2 > a > span'); }
    get firstPriceLbl() { return $('div#search div:nth-child(1) > div > span > div > div > div:nth-child(2) > div[class*="sg-col-4-of-12"] > div > div:nth-child(2) > div[class*="sg-col-4-of-24"] > div > div.a-section.a-spacing-none.a-spacing-top-small > div > div > a > span > span:nth-child(2) > span.a-price-whole'); }
    get firstPriceCentLbl() { return $('div#search div:nth-child(1) > div > span > div > div > div:nth-child(2) > div[class*="sg-col-4-of-12"] > div > div:nth-child(2) > div[class*="sg-col-4-of-24"] > div > div.a-section.a-spacing-none.a-spacing-top-small > div > div > a > span > span:nth-child(2)  > span:nth-child(3)'); }

    //Metodos dos elementos de ação
    resultadoBusca(texto) {
        this.resultadoBuscaLbl.waitForDisplayed();
        expect(this.resultadoBuscaLbl.getText()).to.equal('"'+texto +'"');
    }

    firstProductValue() {
        this.firstProductLink.waitForDisplayed();
        return this.firstProductLink.getText();
    }

    firstPriceValue() {
        this.firstPriceLbl.waitForDisplayed();
        return this.firstPriceLbl.getText();
    }

    firstPriceCentValue() {
        this.firstPriceCentLbl.waitForDisplayed();
        return this.firstPriceCentLbl.getText();
    }

    selecionarProduto() {
        this.filtroBtn.waitForDisplayed();
        this.filtroBtn.click();
        this.selectProdMaisNovo.waitForDisplayed();
        this.selectProdMaisNovo.click();
        this.firstProductImg.waitForDisplayed();
        this.firstProductImg.click();
    }
}

module.exports = ResultadoPesquisaPage;