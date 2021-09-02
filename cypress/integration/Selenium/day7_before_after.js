/*

before:Bloktaki tüm testlerden önce sadece bir kere çalışır. Mesala en başta bir kere google git
        set up datalar için kullanılır, yada database bağlantı
beforeEach:Bloktaki tüm testlerden önce yani her bir testen önce çalışır.üç test varsa üçkez çalışır.

after: Bloktaki tüm testlerden sonra sadece bir kere çalışır. Test dataları temizlemek için
Aftereach: Bloktakş her bir testten sonra çalışır.
*/

describe("",()=>{

    beforeEach(()=>{
        
        cy.visit("https://www.google.com.tr/")
    })
   
    it("test1",()=>{
    cy.contains("Gizlilik").click()
    })

    it("test2",()=>{
    cy.contains("Reklam").click()
    })
   


})