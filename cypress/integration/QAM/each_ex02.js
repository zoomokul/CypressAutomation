describe('each examples', () => {
 
 
     it('First', () => {
         cy.visit("https://www.google.com/")
         cy.get('.pHiOh').each(function($el,index,$list)  {
            
             // indek arasında gezmek için 
             if($el.text()==='Gizlilik'){
                cy.get($el).click()
               
             }
            
            //cy.log($el.text())  //metinleri almak için
 
            //cy.log($list.length)  //liste uzunluğu için
          
           
           }
           
           )
       })
 
 
 
 
   })