/// <reference types="cypress" />
describe('API_Testing', () => {
    it('test01', () => {
        cy.request("https://reqres.in/api/users?page=2").then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body.data).has.length(6)
                    expect(res.body.data).to.have.length(6)
                    expect(res.body.data.length).to.eq(6)
                    expect(res.body.data[0]).has.property("id",7)
                    expect(res.body.data[1]).has.property("email","lindsay.ferguson@reqres.in")
                    expect(res.body.data[1]).not.to.have.property("adress")
                    expect(res.body.data[1]).has.to.deep.equal( {
                        "id": 8,
                        "email": "lindsay.ferguson@reqres.in",
                        "first_name": "Lindsay",
                        "last_name": "Ferguson",
                        "avatar": "https://reqres.in/img/faces/8-image.jpg"
                    })

        })
   
    })
   
    it('test02', () => {
        cy.request("/users?page=2").then((res)=>{
            expect(res.status).to.eq(200)
        })


    })



    
})
