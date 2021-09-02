/// <reference types="cypress" />
describe("ders1",()=>{
    it("visit",()=>{
        
        //cy.visit("https://www.youtube.com/")
        //cy.url().should("eq","https://www.youtube.com/")
        //cy.url().should("contain","youtube")
        //cy.url().should("include","youtube")
        //cy.location("href").should("include","youtube")
        //cy.location().its("href").should("include","youtube")

        cy.visit("https://www.amazon.com/")
        cy.title().should("include","Computers")
       
        

    })
})