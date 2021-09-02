
//https://www.youtube.com/watch?v=zjBaLMmd_HI
describe('TS', () => {
    it('custom command', () => {

      cy.visit('http://codenboxautomationlab.com/wp-login.php')
      cy.wait(2000)
      cy.login('ab','123').should('contain','ERROR')
    
      
    
 
    })



  })