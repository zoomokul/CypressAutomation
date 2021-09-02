/// <reference types="cypress" />
describe('day06', () => {
    it('test01', () => {

        /*
        1-Test01 isimli bir class olusturun

2- https://www.walmart.com/ adresine gidin
3- Browseri tam sayfa yapin
4-Sayfayi “refresh” yapin
5- Sayfa basliginin “Save” ifadesi icerdigini control edin
6-Sayfa basliginin “Walmart.com | Save Money.Live Better” a esit oldugunu control ediniz
7- URL in walmart.com icerdigini control edin
8-”Nutella” icin arama yapiniz
9- Kac sonuc bulundugunu yaziniz
10-Sayfayi kapatin
        */
     cy.visit("https://www.amazon.com.tr/")
     //Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
     // return false
    //})
    cy.get("#sp-cc-accept").click();
   cy.get("#twotabsearchtextbox").type("samsung headphones{enter}")
   cy.log("Lİste Yazılmaya Başladı")
   cy.get("span[dir='auto']").first()
   .then(x=>{cy.log(x.text())})

   cy.get(".a-text-normal").each((el,index)=>{
    
        cy.log(index,el.text())
        
    
    
   
   })

   cy.get("a[class='a-link-normal a-text-normal']").first().click()
   
    })


})