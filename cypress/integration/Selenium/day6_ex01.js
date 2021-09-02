/// <reference types="cypress" />
describe("day6_extra",()=>{

        it.skip("test1",()=>{
            cy.visit("https://www.kitapyurdu.com/")
            cy.get(".allCategories").click()
            cy.get("h2").each((element)=>{
               cy.log(element.text())
                 
            })
        })

        /*
        1.http://zero.webappsecurity.com/
        2. Signin buttonuna tiklayin
        3. Login alanine “username” yazdirin
        4. Password alanine “password” yazdirin
        5. Sign in buttonuna tiklayin
        6. Pay Bills sayfasina gidin
        7. amount kismina yatirmak istediginiz herhangi bir miktari yazin
        8. tarih kismina “2020-09-10”

        9. Pay buttonuna tiklayin
        10. “The payment was successfully submitted.” mesajinin ciktigini control edin
        */
        it("http://zero.webappsecurity.com/",()=>{
            cy.visit("http://zero.webappsecurity.com/")
            cy.get(".icon-signin").click()
            cy.get("#user_login").type("username")
            cy.get("#user_password").type("password")
            //cy.get("input[type='submit']").click()
            
        })




})