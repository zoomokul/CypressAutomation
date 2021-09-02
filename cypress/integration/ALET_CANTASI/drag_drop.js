describe('each examples', () => {
  
    it.only('First', () => {
      cy.visit("https://uppy.io/examples/dragdrop/")
      cy.get('.uppy-DragDrop-inner').first().attachFile('example.json', { subjectType: 'drag-n-drop' });
      
   })
  
   it('Second', () => {
    cy.visit("https://uppy.io/examples/dragdrop/")
    cy.get('.uppy-DragDrop-inner').last().attachFile('example.json', { subjectType: 'drag-n-drop' });
    cy.get('button[class=upload-button]').click()
    
 })



  })