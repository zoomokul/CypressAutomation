/// <reference types="cypress" />
describe("day11",()=>{
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })


    it("Validate alert text",()=>{
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm', () => true);
        cy.get('#result').should("have.text","You successfully clicked an alert")
    
       })

       it('Handling JS Confirm - Click Cancel', () => {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', () => false);
        cy.get('#result').contains('You clicked: Cancel')
    })
    it('Input text in prompt, Click OK and Validate Input Text', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('ahmet')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').contains('You entered: ahmet')
    })










    })
