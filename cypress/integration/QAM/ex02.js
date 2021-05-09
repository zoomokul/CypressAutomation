// kaynak-->https://dev.to/walmyrlimaesilv/how-to-identify-an-element-by-its-text-with-cypress-16pg



/*
beforeEach(() => {
    // root-level hook
    // runs before every test
    cy.visit('https://www.google.com/')
  })
*/
describe('ex02', () => {



    // first block
    it('first block', () => {
      
      cy.visit('https://www.google.com/')
      
      const termsToSearchFor=['java','python']
      termsToSearchFor.forEach(term => {
        cy.get('input[name=q]')
          .should('be.visible')
          .type('${term}{enter}')   // güzel kod ama çalışmadı

        
      })
    
    })

    // second blok
    it('second blok', () => {
        
      })

      // third
    it('third', () => {
      
      })

 
  })
