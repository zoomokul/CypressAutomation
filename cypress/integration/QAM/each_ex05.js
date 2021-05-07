describe('My First Test', () => {
    it('Does not do much!', () => {
      
      cy.visit("https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fpc%3Dtopnav-about-n-en&flowName=GlifWebSignIn&flowEntry=SignUp")
     /*
      cy.get('div[jsname=Ufn6O]').first().type("java")
      cy.get('div[jsname=Ufn6O]').last().type("java")
      */
     /* cy.get('div[jsname=Ufn6O]').each(($el, index, $list) => {
     
         cy.wrap($el).type("java")
         
       
      })
      */
      /*cy.get('div[jsname=Ufn6O]').each(($el) => {
     
        cy.wrap($el).type("java")
        
      
     })*/

    })
  })