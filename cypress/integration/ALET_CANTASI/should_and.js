
//https://www.youtube.com/watch?v=zjBaLMmd_HI
describe('TS', () => {
    it('Assign', () => {

      cy.visit('http://codenboxautomationlab.com/practice/')
      cy.get('.page-title').should('be.visible').and('contain','Automation Practice')
    
 
    })



  })