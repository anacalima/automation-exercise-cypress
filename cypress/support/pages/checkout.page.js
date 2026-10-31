class CheckoutPage {
  // Seletores do Carrinho e Checkout
  get addToCartButton() { return cy.get('.add-to-cart').first(); }
  get viewCartModalLink() { return cy.get('.modal-content a[href="/view_cart"]'); }
  get proceedToCheckoutButton() { return cy.get('.btn.check_out'); }
  get textAreaComment() { return cy.get('textarea[name="message"]'); }
  get placeOrderButton() { return cy.get('a[href="/payment"]'); }

  // Seletores de Pagamento
  get nameOnCardInput() { return cy.get('[data-qa="name-on-card"]'); }
  get cardNumberInput() { return cy.get('[data-qa="card-number"]'); }
  get cvcInput() { return cy.get('[data-qa="cvc"]'); }
  get expiryMonthInput() { return cy.get('[data-qa="expiry-month"]'); }
  get expiryYearInput() { return cy.get('[data-qa="expiry-year"]'); }
  get payAndConfirmButton() { return cy.get('[data-qa="pay-button"]'); }
  get successMessage() { return cy.get('[data-qa="order-placed"]'); }

  // Métodos de Ação
  preencherPagamento(dados) {
    this.nameOnCardInput.type(dados.nome);
    this.cardNumberInput.type(dados.numero);
    this.cvcInput.type(dados.cvc);
    this.expiryMonthInput.type(dados.mes);
    this.expiryYearInput.type(dados.ano);
    this.payAndConfirmButton.click();
  }
}

export default new CheckoutPage();