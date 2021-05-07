describe('Loops', () => {
  
          it('third', () => {
              cy.visit("https://www.memurlar.net/")
             
              cy.get('#GlobalHeader > div.Main > div')
                .each((el)=>{
            
//bu bir yorum

                //cy.log(el.text())
                cy.get(el).click()
                })
                
           
           
           
          
              
  
  
  
        
     })
    
    
  
  
    })
