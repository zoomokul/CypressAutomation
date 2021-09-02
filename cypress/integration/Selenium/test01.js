/// <reference types="cypress" />
describe('', () => {
    it.skip('', () => {
     cy.visit("https://www.dokuzeylul.k12.tr/")
     Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get(".tran3s:visible").invoke("removeAttr","target").first().click()
    cy.go(-1)
   
    })

    it.skip('', () => {
      cy.visit("https://www.dokuzeylul.k12.tr/")
      Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
       // failing the test
       return false
     })
     cy.get("a").each((link)=>{
       cy.request(link.prop("href"))
       })
     })

     it("",()=>{
cy.visit("https://www.kitapyurdu.com/")
      cy.get("a")
      //.invoke('attr', 'href')
      .each(href => {
        cy.log(href.text());
      });

     })
     
    
    
  })