class ProductsPage {
  // Seletores da página de produtos e pesquisa
  get titleAllProducts() { return cy.get('.title.text-center'); }
  get productsList() { return cy.get('.features_items'); }
  get viewFirstProductButton() { return cy.get('a[href="/product_details/1"]'); }
  get searchInput() { return cy.get('#search_product'); }
  get searchButton() { return cy.get('#submit_search'); }
  get searchedProductsHeader() { return cy.get('.title.text-center'); }
  get productNames() { return cy.get('.productinfo p'); }

  // Seletores dos detalhes do produto
  get productNameDetail() { return cy.get('.product-information h2'); }
  get productCategoryDetail() { return cy.get('.product-information p:nth-child(3)'); }
  get productPriceDetail() { return cy.get('.product-information span span'); }
  get productAvailabilityDetail() { return cy.get('.product-information p:nth-child(6)'); }
  get productConditionDetail() { return cy.get('.product-information p:nth-child(7)'); }
  get productBrandDetail() { return cy.get('.product-information p:nth-child(8)'); }

  // Métodos de Ação
  pesquisarProduto(nomeProduto) {
    this.searchInput.type(nomeProduto);
    this.searchButton.click();
  }
}

export default new ProductsPage();