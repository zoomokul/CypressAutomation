
//https://www.youtube.com/watch?v=zjBaLMmd_HI
describe('TS', () => {
    it('TS01', () => {

      cy.visit('http://codenboxautomationlab.com/wp-login.php')
      cy.get('#user_login').as('user')
      cy.get('@user').clear()
      cy.get('@user').type('john',{delay:1000})

      cy.get('#user_pass').as('password')
      cy.get('@password').clear()
      cy.get('@password').type('1234',{delay:1000})
      
     
      
    })

    it('pause', () => {

     
      
    })

    it('TS02', () => {

     
      
    })
  })