describe('each examples', () => {
   
     it('First', () => {
       cy.visit("https://tus.io/demo.html")
       cy.get('#js-file-input').attachFile('example.json');
  
    })
    it('Second', () => {
        cy.visit("https://tus.io/demo.html")
        cy.get('#js-file-input').attachFile('example.json');
   
     })
 
     it('Third', () => {
        cy.visit("https://tus.io/demo.html")
        cy.get('#js-file-input').attachFile(['example.json','example.json']);
   
     })
 
 
 
   })