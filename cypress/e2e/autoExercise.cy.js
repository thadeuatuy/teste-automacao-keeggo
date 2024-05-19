// Testes relacionados à funcionalidade de login
describe('Testes de Login', () => {
  // Teste para verificar se a página de login carrega corretamente
  it('Carrega a página de login corretamente', () => {
    cy.visit('https://www.automationexercise.com/login')
    cy.url().should('include', '/login') // Verifica se a URL inclui '/login'
    cy.get('h2').contains('Login to your account') // Verifica se o título da página é 'Login to your account'
    cy.get('.signup-form > h2').contains('New User Signup') // Verifica se há um link para cadastro de novo usuário
  })

  // Teste para verificar se é possível fazer login com credenciais corretas
  it('Deve logar com sucesso usando credenciais corretas', () => {
    cy.visit('https://www.automationexercise.com/login')
    cy.get('input[data-qa="login-email"]').type('teste2021@teste.com.br') // Insere o email
    cy.get('input[data-qa="login-password"]').type('teste') // Insere a senha
    cy.get('button[data-qa="login-button"]').click() // Clica no botão de login
    cy.get('li a').contains('Logged in as') // Verifica se o usuário está logado
  })
})

// Testes relacionados à funcionalidade de busca e adição ao carrinho
describe('Testes de Busca e Adição ao Carrinho', () => {
  // Teste para buscar um produto e verificar se é exibido corretamente
  it('Encontra e clica no link "Products"', () => {
    cy.visit('https://www.automationexercise.com/products')
    cy.url().should('include', '/products') // Verifica se a URL inclui '/products'
    cy.get('#search_product').type('Winter top') // Insere o termo de busca
    cy.get('#submit_search').click() // Clica no botão de busca
    cy.get('.productinfo.text-center').find('p').should('have.text', 'Winter Top') // Verifica se o produto buscado é exibido corretamente
  })

  // Teste para adicionar um produto ao carrinho e verificar se foi adicionado corretamente
  it('Adiciona produto ao carrinho e verifica', () => {
    cy.visit('https://www.automationexercise.com/products')
    cy.url().should('include', '/products') // Verifica se a URL inclui '/products'
    cy.get('a[data-product-id="5"].add-to-cart').eq(0).click() // Clica no botão "Add to cart" do produto desejado
    cy.get('u').click() // Clica no link para visualizar o carrinho
    cy.url().should('include', '/view_cart') // Verifica se a URL inclui '/view_cart'
    cy.get('.cart_description h4').should('contain', 'Winter Top') // Verifica se o produto adicionado está no carrinho
  })
})
