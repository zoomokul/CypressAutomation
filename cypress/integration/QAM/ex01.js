// kaynak-->https://dev.to/walmyrlimaesilv/how-to-identify-an-element-by-its-text-with-cypress-16pg
/*
beforeEach(() => {
    // root-level hook
    // runs before every test
    cy.visit('https://www.google.com/')
  })
*/
describe('ex01', () => {

    beforeEach(() => cy.visit('https://www.google.com/'))

    // first block
    it('first block', () => {

        cy.contains('Gizlilik').should('be.visible').click()
      
    })

    // second blok
    it('second blok', () => {
        cy.get('a:contains(Şartlar)').should('be.visible').click() // <a>.....Şartlar</a>
      })

      // third
    it('third', () => {
      cy.get('input[name=q]').should('be.visible').type('javascript {enter}')  
      })

 
  })
