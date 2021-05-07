describe('each examples', () => {
  
    it('First', () => {
      cy.visit("http://demo.t3-framework.org/joomla30/index.php/en/joomla-pages/sample-page-2/login-page")
      cy.fixture('userLoginDetail').then((user)=>{

        cy.get('#username').type(user.email)
        cy.get('#password').type(user.password)
      })
     
   
      
   })
  

  })