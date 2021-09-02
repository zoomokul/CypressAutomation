/// <reference types="cypress" />
describe("day7_ex",()=>{

    it("test1",()=>{
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
        cy.get("input[type='checkbox']").first().should("be.checked").check()
        
      
    })
     })