import homePage from '../support/pages/home.page';
import productsPage from '../support/pages/products.page';

describe('Suíte de Testes: Produtos e Navegação', () => {
  beforeEach(() => {
    homePage.visitar();
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    homePage.productsMenuButton.click();
    productsPage.titleAllProducts.should('contain.text', 'All Products');
    productsPage.productsList.should('be.visible');
    
    productsPage.viewFirstProductButton.click();
    
    productsPage.productNameDetail.should('be.visible');
    productsPage.productCategoryDetail.should('be.visible');
    productsPage.productPriceDetail.should('be.visible');
    productsPage.productAvailabilityDetail.should('be.visible');
    productsPage.productConditionDetail.should('be.visible');
    productsPage.productBrandDetail.should('be.visible');
  });

  it('Test Case 9: Search Product', () => {
    homePage.productsMenuButton.click();
    productsPage.titleAllProducts.should('contain.text', 'All Products');
    
    productsPage.pesquisarProduto('Dress');
    productsPage.searchedProductsHeader.should('contain.text', 'Searched Products');
    productsPage.productNames.should('have.length.greaterThan', 0);
  });

  it('Test Case 10: Verify Subscription in home page', () => {
    cy.scrollTo('bottom');
    homePage.subscriptionEmailInput.type('subscriber_test@mail.com');
    homePage.subscribeButton.click();
    homePage.successSubscribeAlert.should('contain.text', 'You have been successfully subscribed!');
  });
});