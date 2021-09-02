// kaynak-->https://dev.to/walmyrlimaesilv/how-to-identify-an-element-by-its-text-with-cypress-16pg



describe('ex02', () => {



    // first block
    it('first block', () => {
      
      cy.visit('https://www.google.com/')
      
      const termsToSearchFor=['java','python']
      termsToSearchFor.forEach(term => {
        cy.get('input[name=q]')
          .should('be.visible')
          .type(term+' ')
         // güzel kod ama çalışmadı

        
      })
      cy.get('.gNO89b').last().click({force: true})
    
    })

  
 
  })
