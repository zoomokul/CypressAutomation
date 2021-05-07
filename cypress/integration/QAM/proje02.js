describe('Loops', () => {
  
          it('third', () => {
              cy.visit("http://automationpractice.com/index.php ")
             // cy.get('.menu-content>li').first().click()

              //ürün ekleme
              //cy.get('a[data-id-product=1]').first().click()
              //cy.get("span[title='Continue shopping']").click()

              var i;
            for (i = 1; i < 7; i++) {
              cy.get('a[data-id-product='+i+']').first().click()
              cy.get("span[title='Continue shopping']").click()
            }
            cy.get("a[title='View my shopping cart']").click()
           
           /*
            1. yol  tüm eklediklerimi kaldırdı
            cy.get('.cart_quantity_delete').click({ multiple: true }) 
            
            */
            //2. yol
            cy.get('.cart_quantity_delete').each((el)=>{
              cy.get(el).click()
            })


          
    
            })
    
    
  
  
    })
