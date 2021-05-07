
describe('My First Test', () => {

it('click all links', () => {

    cy.visit("https://filiphric.com/")
    cy.contains('Blog').click()
    
    //cy.go('back')

    cy.contains('Courses').click()

   
  })


  it('click all links with loop', () => {

    const pages = ['Blog', 'Courses']
  
    cy.visit("https://filiphric.com/")
  
    pages.forEach(page => {
  
       
        cy.contains(page).click()
     
      cy.go('back')
  
    })
  
  });
  


  
})