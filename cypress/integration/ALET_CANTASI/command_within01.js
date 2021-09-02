/// <reference types="cypress" />

describe('command within', () => {
    it.skip('Does not do much!', () => {
        cy.visit("https://www.kitapyurdu.com/index.php?route=account/register")
        cy.get("table").first()
        .within(()=>{
                    cy.get("input[name='firstname']").type("zoom")
                    cy.get("input[name='lastname']").type("zoom")
                     })
      
        
    })

    it('Does not do much!', () => {
        cy.visit("https://www.kitapyurdu.com/index.php?route=account/register")
        cy.get("table").first().children("tbody").children("tr")
        .within(($td)=>{
            cy.get("input[name='firstname']").type("zoom")
            cy.get("input[name='lastname']").type("zoom")
                    })
        
       
      
        
    })


  })