describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos login corretamente e autenticar o usuário na pagina', () => {
      
      cy.login('j2.wick123@email.com', 'Senha123')
  
    })
  })          