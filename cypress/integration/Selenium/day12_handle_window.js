


describe('handle window', () => {
   

    it('test01', () => {
        // launch the application
      cy.visit("https://accounts.google.com/signup");
      // grab the href prop with prop() JQuery method
      
      cy.contains("Yardım").then(function(l) {
          const txt=l.prop("href");
          cy.log(txt);
          cy.visit(txt)
         
      })

    })


    it("Handling child tabs and browser controls", function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false;
        });
        cy.visit("https://chercher.tech/java/index-selenium-webdriver");
        cy.get(":nth-child(17) > .alsosee > a")
          .invoke("removeAttr", "target")
          .click();
      });
})