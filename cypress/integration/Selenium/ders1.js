/// <reference types="cypress" />
describe("ders1",()=>{
    it("visit",()=>{
        const sizes = ['iphone-6', 'ipad-2', 'samsung-note9']
        cy.visit("https://www.youtube.com/")
        
        /*
        sizes.forEach(size=>{
            cy.viewport(size)
            cy.wait(2000)
        })
        */

       // cy.viewport('iphone-6', 'landscape')
      cy.viewport('iphone-6')
        //cy.wait(2000)
        //cy.viewport('ipad-2')
       // cy.wait(2000)
       // cy.viewport(1024, 768)

       //cy.visit("https://www.google.com/")
        //cy.visit("https://www.youtube.com/")
        //cy.reload()
        //cy.viewport(750,750)
       // cy.viewport('samsung-note9')
       // Farklı url arasında gelip gidemeyiz.baseUrl aynı olmalı.
        //cy.visit("https://www.amazon.com/")
       // cy.visit("https://www.amazon.com/b/?node=16225015011&pf_rd_r=V00GE98RHDRCBW7BAP6Y&pf_rd_p=b97f60e4-d05c-4f94-bc63-ce035fcc0fe0")
        //cy.go("back")
        //cy.go(-1)
        //cy.go("forward");

    })
})