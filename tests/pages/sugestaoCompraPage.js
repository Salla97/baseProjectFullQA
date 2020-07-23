/**
 * File: sugestaoCompraPage.js
 * Autor: Gabriel Salla
 * Data: 23/07/2020
 */
const assert = require('chai').assert;
const expect = require('chai').expect;


class SugestaoCompraPage {
    // define os elementos
    get produtoImgLink() { return $('div[id*="huc-v2-order-row-item"] > div[class="a-box-inner"]'); }
    get addCarrinhoLbl() { return $('div#huc-v2-order-row-confirm-text > h1'); }
    get subTotalLbl() { return $('div#hlb-subcart span.a-color-price.hlb-price.a-inline-block.a-text-bold'); }
    get carinhoBtn() { return $('a#hlb-view-cart-announce'); }
    get fecharPedidoBtn() { return $('a#hlb-ptc-btn-native'); }

    //Metodos dos elementos de ação
    visualizarProdutoAdd() {
        this.produtoImgLink.waitForDisplayed();
        assert.equal(this.produtoImgLink.isDisplayed(), true);
        expect(this.addCarrinhoLbl.getText()).to.equal("Adicionado ao carrinho");
    }

    visualizarSubTotal(){
        this.subTotalLbl.waitForDisplayed();
        return this.subTotalLbl.getText();
    }

    carrinhoClick(){
        this.carinhoBtn.waitForDisplayed();
        this.carinhoBtn.click();
    }

    fecharPedidoClick(){
        this.fecharPedidoBtn.waitForDisplayed();
        this.fecharPedidoBtn.click();
    }
}

module.exports = SugestaoCompraPage;