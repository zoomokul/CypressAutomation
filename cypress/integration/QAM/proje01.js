describe('Loops', () => {
  
          it('third', () => {
              cy.visit("https://www.memurlar.net/")
              var i;
              i=Math.floor((Math.random() * 10)) + 4;
              cy.log(i)
              cy.get('#GlobalHeader > div.Main > div > a:nth-child('+i+')')
                .then((x)=>{
                cy.log(x.text())
                })
                .click()
              //cy.get('#GlobalHeader > div.Main > div > a:nth-child('+i+')').click()
              
              /*cy.contains('Öğretmen').click()
              cy.go('back')
              
             
              cy.contains('Becayiş').click()
              cy.go('back')
              */
           
           
          
              
  
  
  
        
     })
    
    
  
  
    })