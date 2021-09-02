
//https://www.youtube.com/watch?v=zjBaLMmd_HI
describe('TS', () => {
    it('Scroll', () => {

      cy.visit('http://codenboxautomationlab.com/')
      cy.wait(2000)
      cy.contains('Contact Us').scrollIntoView()
      cy.wait(2000)
      cy.get('#post-2 > div > h3 > span').scrollIntoView()
      
    
 
    })



  })