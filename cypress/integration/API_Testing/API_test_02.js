/// <reference types="cypress" />
describe('API_Testing', () => {

    beforeEach(()=>{
        cy.request("https://reqres.in/api/users?page=2").as("req")
    })
    it('test01', () => {
        cy.get("@req").then((res)=>{
         expect(res.status).to.eq(200)
         cy.get("@req").its("headers").its("content-type").should("contains","application/json; charset=utf-8")
         cy.get("@req").its("status").should("equal",200)


        })
   
    })
  
   


    
})
