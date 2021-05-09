describe('Online tickets selling app', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form')
    })
  
    it('successfully orders a ticket', () => {
        cy.get('#firstName')
        .should('be.visible')
        .type('John')

        cy.get('#lastName')
        .should('be.visible')
        .type('Doe')

        cy.get('#userEmail')
        .should('be.visible')
        .type('john-doe@example.com')

        /*
        cy.get('input[name=gender]')
        .each((el,index,list)=>{cy.get(el).click({force: true})}) 
        */
        /*
        cy.get('#gender-radio-3')
        .click({force: true})
        */
        cy.get('input[name=gender]')
        .then((x)=>{x[1].click()})

        cy.get('#userNumber')
        .should('be.visible')
        .type('12345678')

        cy.get('.css-1g6gooi')
        .first()
        .type('Cypress')

        cy.get('input[type=checkbox]')
        .first().
        click({force: true}) //{ multiple: true },{force: true} çalışmadılar

        //2. yol
        cy.get('input[type=checkbox]')
        .each((el,index,list)=>{cy.get(el).click({force: true})}) 
/*
        //3 yol
        cy.get('input[type=checkbox]')  //=====>>> bu kısım çalışmadı 
        
        .check(['Sports']);
*/
        cy.get('#currentAddress')
        .should('be.visible')
        .type('Hello!!!!!')

        cy.get('#uploadPicture').as('fileInput')
        .attachFile('example.json')

        


        /*

        cy.get('input[type="file"]')
      .as('fileInput')
      .attachFile('square.png')
        */


  
      //cy.contains('You will receive an email to finish the purchase.')
       // .should('be.visible')
    })
  })