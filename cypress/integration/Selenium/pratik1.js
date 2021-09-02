/// <reference types="cypress" />
describe('pratik1', () => {
    it.skip('test01', () => {
        cy.visit("https://glebbahmutov.com/blog/tags/cypress/")
        cy.get("h1>.archive-article-title")
        .each((el,index)=>{cy.wrap(el).invoke("attr","href").then(href=>console.log(href))})
   
    })


    it.skip('test02', () => {
        cy.visit("https://glebbahmutov.com/blog/tags/cypress/")
        cy.get("h1>.archive-article-title")
        .each((el,index)=>{cy.wrap(el).invoke("attr","href")
        .then(href=>cy.writeFile('sample1.txt',href+'\n',{flag: 'a+'}))})
      //cy.writeFile('sample.txt',el.text()+'\n',{flag: 'a+'})
    })
    

    it.skip('test03', () => {
        cy.visit("https://filiphric.com/blog")
        cy.get(".font-mono")
        .each((el,index)=>{cy.wrap(el).invoke("attr","href")
        .then(href=>cy.writeFile('sample2.txt',href+'\n',{flag: 'a+'}))})
      //cy.writeFile('sample.txt',el.text()+'\n',{flag: 'a+'})
    })
    

    it('test04', () => {
        cy.visit("https://www.w3schools.com/html/html_links.asp")
        cy.contains("Try it Yourself").invoke("removeAttr","target").click()
        cy.get("a[title='Save']").first().click()
        cy.contains("Cancel").click()
   
    })

})