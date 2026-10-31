class HomePage {
  // Seletores dos Menus
  get loginMenuButton() { return cy.get('a[href="/login"]'); }
  get productsMenuButton() { return cy.get('a[href="/products"]'); }
  get logoutButton() { return cy.get('a[href="/logout"]'); }
  get deleteAccountButton() { return cy.get('a[href="/delete_account"]'); }  // <-- alterado aqui
  get loggedInUserText() { return cy.get('li:contains("Logged in as")'); }
  
  // Seletores da Newsletter/Subscription
  get subscriptionEmailInput() { return cy.get('#susbscribe_email'); }
  get subscribeButton() { return cy.get('#subscribe'); }
  get successSubscribeAlert() { return cy.get('#success-subscribe'); }
  get accountDeletedHeader() { return cy.get('[data-qa="account-deleted"]'); }

  // Métodos de Ação
  visitar() {
    cy.visit('/');
  }
}

export default new HomePage();