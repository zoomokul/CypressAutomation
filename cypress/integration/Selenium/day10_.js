/// <reference types="cypress" />
describe("day10_dropdown",()=>{
    /*
    Yeni bir Class Olusturun : D10_SoftAssertTest
1. “http://zero.webappsecurity.com/” Adresine gidin
2. Sign in butonuna basin   li>#signin_button
3. Login kutusuna “username” yazin div>#user_login
4. Password kutusuna “password.” yazin  div>#user_password
5. Sign in tusuna basin
6. Pay Bills sayfasina gidin
7. “Purchase Foreign Currency” tusuna basin
8. “Currency” drop down menusunden Eurozone’u secin
9. soft assert kullanarak "Eurozone (Euro)" secildigini test edin
10. soft assert kullanarak DropDown listesinin su secenekleri oldugunu test edin "Select One",
"Australia (dollar)", "Canada (dollar)","Switzerland (franc)","China (yuan)","Denmark
(krone)","Eurozone (euro)","Great Britain (pound)","Hong Kong (dollar)","Japan (yen)","Mexico
(peso)","Norway (krone)","New Zealand (dollar)","Sweden (krona)","Singapore (dollar)","Thailand
(baht)"
    */



    it("test1",()=>{
        cy.visit("http://zero.webappsecurity.com")
        cy.get("li>#signin_button").click();
        cy.get("div>#user_login").type("username")
        cy.get("div>#user_password").type("password")
        cy.get("input[value='Sign in']").click()
        cy.visit("http://zero.webappsecurity.com/bank/account-summary.html")
        cy.contains("Pay Bills").click();
        cy.contains("Purchase Foreign Currency").click()
        cy.get("#pc_currency").select("EUR").should("have.value","EUR")
        //.find("option").should("include",["EUR"])
        //.should('have.length',16)
        //should('contain','EUR')
        
        /*
        cy.get("#pc_currency").each((el,index)=>{
            cy.log(el.text())
        })
        */
        //cy.get("#pc_currency").select("EUR").should("have.value","EUR")

  
     })










    })
