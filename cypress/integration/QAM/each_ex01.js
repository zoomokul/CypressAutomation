describe('each examples', () => {
   
   /* it('First', () => {
      cy.visit("https://www.google.com/")

      // ilk ve son elemanını almak için
      cy.get('a[class=pHiOh]').last().click()


    })
    */

    it('First', () => {
        cy.visit("https://www.google.com/")
        cy.get('.gb_g').each(function($el,index,$list)  {
            /*
            // index arasında gezmek için 
            if(index==0){
                cy.get($el).click()
            }
            */
           //cy.log($el.text())  //metinleri almak için

           //cy.log($list.length)  //liste uzunluğu için
         
          
          }
          
          )
      })




  })