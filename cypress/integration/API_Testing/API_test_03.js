/// <reference types="cypress" />
describe('API_Testing', () => {
  ///////////////////////////////////////////////////////////  
    const resBody={
        "page": 2,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel",
                "last_name": "Howell",
                "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }
        ],
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }
   ////////////////////////////////////////////////////////////////////////////////
    it('test01', () => {
        cy.request({
            
                    method:"GET",
                    url:"https://reqres.in/api/users?page=2"
    
    
    
                     }).then((res)=>{
                         expect(res.status).to.eq(200)
                         expect(res.body).to.deep.equal(resBody)
                     })
        
    
    })
   

    it('test02', () => {
        cy.request({
            
                    method:"POST",
                    url:"https://reqres.in/api/users/",
                    body:{
                        "name":"john",
                        "job":"teacher"
                    }
    
    
    
                     }).then((res)=>{
                         expect(res.status).to.eq(201)
                         
                     })
        
    
    })
   
    it('test03', () => {
        cy.fixture("example1.json").as("ex")
        cy.get("@ex").then((myfix)=>{

            cy.request({
            
                method:"POST",
                url:"https://reqres.in/api/users/",
                body:myfix



                 })
        }).then((res)=>{
                         expect(res.status).to.eq(201)
                         
                     })
        
    
    })






        
})
  
   


    

