/// <reference types="cypress" />
describe("day9_dropdown",()=>{



    it("test1",()=>{
        cy.visit("https://www.amazon.com.tr/")
        cy.get("input[name='accept']").click()
        cy.get("select[id='searchDropdownBox']").children().should('have.length',21)
        .each((el,index)=>{
            if(index==2)
                {
                cy.log(el.text())
                }
         })
        
        
        
        //cy.get("select[id='searchDropdownBox']").should('have.length',1).should('have.value','search-alias=aps')
        //cy.get("select[id='searchDropdownBox']").select('Hediye Kartları').should('have.value','search-alias=gift-cards')
        //cy.get("select[id='searchDropdownBox']").select('search-alias=computers').should('have.value','search-alias=computers')
  
     })










    })
