// test suite
describe('Tutorialspoint Test', function () {
    // test case
    it.skip('Test Case1', function (){
       // test step to launch a URL
       cy.visit("https://www.tutorialspoint.com/videotutorials/index.php");
       // enter test in the dynamic dropdown
       cy.get("#search-strings").type("python");
       // wait for some time
       cy.wait(3000);
       // assertion to validate the number of search results
       cy.get('.clsHeadQuestion'). should('have.length',20);
       // iterate through the suggested options
       cy.get('.clsHeadQuestion').each(($el, index, $list) => {
          // condition matching check
          if($el.text() ==="Pandas with Python"){
             // click() on that option for selection
             cy.get($el).click();
          }
       })
       // assertion to check if correct option is selected
      cy.get("#search-strings").click(); //.should("have.value","Java")
    });


    it('Test Case1', function (){

      var javascript_kitaplar=[]
     cy.visit('https://www.kitapyurdu.com/')
     cy.get('#search-input').type('javascript')
     cy.wait(3000)

     cy.get('.fast-type-multi')
     //.should('have.length',9) //--->> sıkıntı çıkardı bazen sekiz bazen dokuz var
     .each((el,index,list)=>{
        //cy.log(list.length)
        cy.log(index,el.text())
        javascript_kitaplar.push(el.text())
/*
        if (el.text()==='javascript') {
           cy.get(el).click()
           
        }
        */
     })

     cy.log(javascript_kitaplar)
     console.log(javascript_kitaplar)


   });
   //================BU BLOK ÇALIŞMIYOR==========================
   it.skip('Test Case2', function (){
      cy.visit('https://demoqa.com/automation-practice-form');
      //cy.get('#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').type('Haryana')
      cy.get('#state').type('Haryana')
      cy.get('#city').type('Karnal').click({force: true})
     
     
     
      /* .each((el,index,list)=>{
         if(el.text()==='Haryana')
         {cy.get(el).click()}

      })
      */

   });

   it('third', () => {

      cy.visit('https://demoqa.com/automation-practice-form')
      cy.get('#state').type('Haryana {enter}')  
      cy.get('#city').type('Karnal {enter}') 
      cy.get('#submit').click()
      })



 });