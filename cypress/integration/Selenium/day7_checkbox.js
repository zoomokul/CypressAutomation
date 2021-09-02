/// <reference types="cypress" />
describe("day7_checkbox",()=>{



        it("test1",()=>{
            cy.visit("https://example.cypress.io/commands/actions")
            //cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
            //.check().should('be.checked')

            cy.get(".action-checkboxes").find("input[type='checkbox']")
            .check(["checkbox1","checkbox3"])
          
        })
         })