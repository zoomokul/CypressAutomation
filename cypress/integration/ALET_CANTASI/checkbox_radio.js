describe('Online tickets selling app', () => {
  it('successfully orders a ticket', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
   

      // Hepsinde gezdi
     cy.get('input[name=gender]')
     .each((el,index,list)=>{cy.get(el).click({force: true})}) 
  
  })

  it('successfully orders a ticket', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#gender-radio-3')
        .click({force: true})
  })

  it('successfully orders a ticket', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('input[name=gender]')
    .then((x)=>{
      x[1].click()
      //cy.log(x[0])---->> x bir dizi.
    })
  })

  it('successfully orders a ticket', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('input[type=checkbox]').check({force: true})
        //
        //
  })

  it('successfully orders a ticket', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('input[type=checkbox]').check('3',{force: true})
  })

  it('successfully orders a ticket', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('input[type=checkbox]').check(['1','3'],{force: true})
  })
 
  it('successfully orders a ticket', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('input[type=checkbox]')
    .each((el,index,list)=>{cy.get(el).click({force: true})}) 
  })

  })