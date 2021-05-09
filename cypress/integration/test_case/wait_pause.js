
//https://www.youtube.com/watch?v=zjBaLMmd_HI
describe('TS', () => {
    it('TS01', () => {

      cy.visit('http://codenboxautomationlab.com/practice/')
      
      cy.url().should('include','codenbox')
      cy.wait(3000)
      
    })

    it('pause', () => {

     cy.pause()
      
    })

    it('TS02', () => {

      cy.visit('http://codenboxautomationlab.com/practice/')
      
      cy.get('.page-title').should('have.text','Automation Practice')
      
    })
  })