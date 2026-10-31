import homePage from '../support/pages/home.page';
import authPage from '../support/pages/auth.page';
import checkoutPage from '../support/pages/checkout.page';

describe('Suíte de Testes: Checkout e Pedidos', () => {
  beforeEach(() => {
    homePage.visitar();
  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    const timestamp = new Date().getTime();
    const email = `test_user_${timestamp}@mail.com`;

    // 1. Registar utilizador
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
    authPage.continueButton.click();

    // 2. Adicionar produto ao carrinho
    checkoutPage.addToCartButton.click();
    checkoutPage.viewCartModalLink.click();

    // 3. Efetuar Checkout
    checkoutPage.proceedToCheckoutButton.click();
    checkoutPage.textAreaComment.type('Pedido de teste automatizado.');
    checkoutPage.placeOrderButton.click();

    // 4. Pagamento
    checkoutPage.preencherPagamento({
      nome: 'QA Tester',
      numero: '4111111111111111',
      cvc: '123',
      mes: '12',
      ano: '2028'
    });

    checkoutPage.successMessage.should('be.visible');

    // 5. Limpeza
    homePage.deleteAccountButton.click();
    homePage.accountDeletedHeader.should('be.visible');
  });

  it('Test Case 16: Place Order: Login before Checkout', () => {
    const timestamp = new Date().getTime();
    const email = `test_user_${timestamp}@mail.com`;

    // 1. Registar e fazer logout para preparar o teste
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
    authPage.continueButton.click();
    homePage.logoutButton.click();

    // 2. Fazer Login antes do Checkout
    homePage.loginMenuButton.click();
    authPage.realizarLogin(email, 'Password123!');

    // 3. Adicionar produto e ir para o Checkout
    checkoutPage.addToCartButton.click();
    checkoutPage.viewCartModalLink.click();
    checkoutPage.proceedToCheckoutButton.click();
    checkoutPage.textAreaComment.type('Pedido de teste automatizado.');
    checkoutPage.placeOrderButton.click();

    // 4. Pagamento
    checkoutPage.preencherPagamento({
      nome: 'QA Tester',
      numero: '4111111111111111',
      cvc: '123',
      mes: '12',
      ano: '2028'
    });

    checkoutPage.successMessage.should('be.visible');

    // 5. Limpeza
    homePage.deleteAccountButton.click();
    homePage.accountDeletedHeader.should('be.visible');
  });
});