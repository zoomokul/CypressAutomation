

describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case1', function (){
       cy.visit('https://demoqa.com/automation-practice-form');
      cy.get('input[type=checkbox]') //input[type=checkbox]
       //.check({force: true})
      //.first().check({force: true})
      //.last().check({force: true})
      .then(x=>x[1].click())
     
      //.each(x=>cy.get(x).click({force: true}))
      //.each(x=>cy.get(x[0]).click({force: true})) // hepsini işaretledi
      //.each((el,index,list)=>{cy.get(list[index]).click({force: true})})

      //.each((el,index,list)=>{
       //  if(index===1){
       //  cy.get(el).click({force: true})}
     // })
    
    });  //#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder
    //. css-1hwfws3

    //second
    it('Test Case2', function (){
      //cy.visit('https://demoqa.com/automation-practice-form');
      cy.get('#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').type('Haryana')
      cy.contains('Haryana')
      //.click({force: true})
     
      
     


   });
})
