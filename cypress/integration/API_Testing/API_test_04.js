/// <reference types="cypress" />
describe('API_Testing', () => {

   Cypress.config("baseUrl","http://dummy.restapiexample.com/api/v1")
    it('test01', () => {
       cy.request("GET","/employees").then((res)=>{
           expect(res.status).to.eq(200)
       })
    
    })
   
    it('test02', () => {

        const item={

                    "employee_name": "Ahmet",
                    "employee_salary": 5000,
                    "employee_age": 20
        }
        cy.request("POST","/create",item).then((res)=>{
            expect(res.body.data[0]).has.property("employee_age",20)
        })
     
     })



        
})
  
   


    

