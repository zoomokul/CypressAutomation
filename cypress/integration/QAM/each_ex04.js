describe('each examples', () => {
   
 
 
     it('First', () => {
         cy.visit("https://www.udemy.com/")
         cy.get('.udlite-text-sm').each(function($el,index,$list)  {
          
            //cy.log($el.text())  //metinleri almak için
 
           // cy.log($list.length)  //liste uzunluğu için
         
           //cy.log($list[index])
           
           }
           
           )
       })
 
 
 
 
   })