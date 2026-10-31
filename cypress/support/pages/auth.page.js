class AuthPage {
  // Seletores da tela de cadastro/login
  get signupNameInput() { return cy.get('[data-qa="signup-name"]'); }
  get signupEmailInput() { return cy.get('[data-qa="signup-email"]'); }
  get signupButton() { return cy.get('[data-qa="signup-button"]'); }

  get loginEmailInput() { return cy.get('[data-qa="login-email"]'); }
  get loginPasswordInput() { return cy.get('[data-qa="login-password"]'); }
  get loginButton() { return cy.get('[data-qa="login-button"]'); }
  get loginErrorMessage() { return cy.get('.login-form p'); }
  get signupErrorMessage() { return cy.get('.signup-form p'); }

  // Seletores do formulário de cadastro completo
  get titleMr() { return cy.get('#id_gender1'); }
  get passwordInput() { return cy.get('[data-qa="password"]'); }
  get daysSelect() { return cy.get('[data-qa="days"]'); }
  get monthsSelect() { return cy.get('[data-qa="months"]'); }
  get yearsSelect() { return cy.get('[data-qa="years"]'); }
  get firstNameInput() { return cy.get('[data-qa="first_name"]'); }
  get lastNameInput() { return cy.get('[data-qa="last_name"]'); }
  get addressInput() { return cy.get('[data-qa="address"]'); }
  get countrySelect() { return cy.get('[data-qa="country"]'); }
  get stateInput() { return cy.get('[data-qa="state"]'); }
  get cityInput() { return cy.get('[data-qa="city"]'); }
  get zipcodeInput() { return cy.get('[data-qa="zipcode"]'); }
  get mobileNumberInput() { return cy.get('[data-qa="mobile_number"]'); }
  get createAccountButton() { return cy.get('[data-qa="create-account"]'); }
  get accountCreatedHeader() { return cy.get('[data-qa="account-created"]'); }
  get continueButton() { return cy.get('[data-qa="continue-button"]'); }

  // Métodos com as ações reutilizáveis
  iniciarCadastro(nome, email) {
    this.signupNameInput.type(nome);
    this.signupEmailInput.type(email);
    this.signupButton.click();
  }

  realizarLogin(email, senha) {
    this.loginEmailInput.type(email);
    this.loginPasswordInput.type(senha);
    this.loginButton.click();
  }

  preencherFormularioCadastro(dados) {
    this.titleMr.check();
    this.passwordInput.type(dados.senha);
    this.daysSelect.select('15');
    this.monthsSelect.select('August');
    this.yearsSelect.select('1995');
    this.firstNameInput.type(dados.nome);
    this.lastNameInput.type(dados.sobrenome);
    this.addressInput.type(dados.endereco);
    this.countrySelect.select('United States');
    this.stateInput.type(dados.estado);
    this.cityInput.type(dados.cidade);
    this.zipcodeInput.type(dados.cep);
    this.mobileNumberInput.type(dados.telefone);
    this.createAccountButton.click();
  }
}

export default new AuthPage();