
describe('Login Tests', () => {
    it('should login successfully', () => {
        //Input username and password
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type('trial2-toko@gmail.com')
      cy.get('#password').type('password')
      cy.contains('login').click()
      cy.get('h3').should('contain', 'kasirAja')
    })
    
    it('should display validation message for invalid credentials', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type('invalidemail')
      cy.get('#password').type('testpassword123')
      cy.contains('login').click()
      cy.get('.chakra-alert').should('contain', '"email" must be a valid email')
     
    })

    it('should display validation message for invalid credentials', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type('trial2-toko@gmail.com')
        cy.get('#password').type('invalidpassword')
        cy.contains('login').click()
        cy.get('.chakra-alert').should('contain', 'Kredensial yang Anda berikan salah')
      })

      it('should display validation message for invalid credentials', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type('')
        cy.get('#password').type('testpassword123')
        cy.contains('login').click()
        cy.get('.chakra-alert').should('contain', '"email" is not allowed to be empty')
       
      })

      it('should display validation message for invalid credentials', () => {
        cy.visit('https://kasirdemo.belajarqanp.com')
        cy.get('#email').type('trial2-toko@gmail.com')
        cy.get('#password').type('')
        cy.contains('login').click()
        cy.get('.chakra-alert').should('contain', '"password" is not allowed to be empty')
       
      })
    })