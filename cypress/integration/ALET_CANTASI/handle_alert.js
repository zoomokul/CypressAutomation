
//https://www.youtube.com/watch?v=zjBaLMmd_HI
describe('TS', () => {
    it.skip('Alert window', () => {

      cy.visit('http://codenboxautomationlab.com/practice/')
      cy.get('#alertbtn').click() // normalde cypress alert windowları otomatik kapatır.
      cy.on('window:alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page who love to learn automation')
        }
      )
 
    })

    it('confirm window', () => {
      cy.visit('http://codenboxautomationlab.com/practice/')
      cy.get('#confirmbtn').click() 
      cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
      )
   
    })

  })