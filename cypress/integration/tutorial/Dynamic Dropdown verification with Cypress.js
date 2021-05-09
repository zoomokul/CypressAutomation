// test suite
describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case1', function (){
       // test step to launch a URL
       cy.visit("https://www.tutorialspoint.com/videotutorials/index.php");
       // enter test in the dynamic dropdown
       cy.get("#search-strings").type("Java");
       // wait for some time
       cy.wait(3000);
       // assertion to validate the number of search results
       cy.get('.clsHeadQuestion'). should('have.length',20);
       // iterate through the suggested options
       cy.get('.clsHeadQuestion').each(($el, index, $list) => {
          // condition matching check
          if($el.text() ==="JavaScript"){
             // click() on that option for selection
             cy.get($el).click();
          }
       })
       // assertion to check if correct option is selected
      cy.get("#search-strings").click(); //.should("have.value","Java")
    });
 });