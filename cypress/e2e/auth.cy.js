import homePage from '../support/pages/home.page';
import authPage from '../support/pages/auth.page';

describe('Suíte de Testes: Autenticação e Usuário', () => {
  beforeEach(() => {
    homePage.visitar();
  });

  it('Test Case 1: Register User', () => {
    const timestamp = new Date().getTime();
    const email = `test_user_${timestamp}@mail.com`;

    homePage.loginMenuButton.click();
    authPage.iniciarCadastro('QA Tester', email);
    
    authPage.preencherFormularioCadastro({
      senha: 'Password123!',
      nome: 'QA',
      sobrenome: 'Tester',
      endereco: 'Rua das Flores, 123',
      estado: 'SP',
      cidade: 'São Paulo',
      cep: '01000-000',
      telefone: '11999999999'
    });

    authPage.accountCreatedHeader.should('be.visible');
    authPage.continueButton.click();
    homePage.loggedInUserText.should('be.visible');
    
    homePage.deleteAccountButton.click();
    homePage.accountDeletedHeader.should('be.visible');
  });

  it('Test Case 2: Login User with correct email and password', () => {
    const timestamp = new Date().getTime();
    const email = `test_user_${timestamp}@mail.com`;

    // Cadastro prévio para efetuar login
    homePage.loginMenuButton.click();
    authPage.iniciarCadastro('User Test', email);
    authPage.preencherFormularioCadastro({
      senha: 'Password123!',
      nome: 'QA',
      sobrenome: 'Tester',
      endereco: 'Rua das Flores, 123',
      estado: 'SP',
      cidade: 'São Paulo',
      cep: '01000-000',
      telefone: '11999999999'
    });
    authPage.continueButton.click();
    homePage.logoutButton.click();

    // Execução do Test Case 2
    homePage.loginMenuButton.click();
    authPage.realizarLogin(email, 'Password123!');
    homePage.loggedInUserText.should('be.visible');

    // Limpeza
    homePage.deleteAccountButton.click();
    homePage.accountDeletedHeader.should('be.visible');
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    homePage.loginMenuButton.click();
    authPage.realizarLogin('incorreto@mail.com', 'senhaErrada123');
    authPage.loginErrorMessage.should('contain.text', 'Your email or password is incorrect!');
  });

  it('Test Case 4: Logout User', () => {
    const timestamp = new Date().getTime();
    const email = `test_user_${timestamp}@mail.com`;

    homePage.loginMenuButton.click();
    authPage.iniciarCadastro('User Test', email);
    authPage.preencherFormularioCadastro({
      senha: 'Password123!',
      nome: 'QA',
      sobrenome: 'Tester',
      endereco: 'Rua das Flores, 123',
      estado: 'SP',
      cidade: 'São Paulo',
      cep: '01000-000',
      telefone: '11999999999'
    });
    authPage.continueButton.click();

    homePage.logoutButton.click();
    cy.url().should('include', '/login');
  });

  it('Test Case 5: Register User with existing email', () => {
    const timestamp = new Date().getTime();
    const email = `test_user_${timestamp}@mail.com`;

    // Cria o utilizador uma primeira vez
    homePage.loginMenuButton.click();
    authPage.iniciarCadastro('User Test', email);
    authPage.preencherFormularioCadastro({
      senha: 'Password123!',
      nome: 'QA',
      sobrenome: 'Tester',
      endereco: 'Rua das Flores, 123',
      estado: 'SP',
      cidade: 'São Paulo',
      cep: '01000-000',
      telefone: '11999999999'
    });
    authPage.continueButton.click();
    homePage.logoutButton.click();

    // Tenta registar novamente com o mesmo e-mail
    homePage.loginMenuButton.click();
    authPage.iniciarCadastro('User Duplicate', email);
    authPage.signupErrorMessage.should('contain.text', 'Email Address already exist!');
  });
});