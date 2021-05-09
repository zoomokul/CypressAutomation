
//https://www.youtube.com/watch?v=zjBaLMmd_HI
describe('TS', () => {
    it.skip('TS01', () => {

      cy.visit('http://codenboxautomationlab.com/practice/')
      
      cy.url().should('include','codenbox')
      cy.get('#opentab').invoke('removeAttr','target').click()
    })

    

    it('TS02', () => {

      cy.visit('https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/')
      
      cy.url().should('include','freecodecamp')
      cy.get('#nav-forum').invoke('removeAttr','target').click()
      
    })
  })