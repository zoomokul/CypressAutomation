describe('hover', () => {
    it('test1', () => {
      cy.visit('https://www.kitapyurdu.com/')  
      cy.get(" ul[class='lvl1 active']> li")    //#mainNav > div.nav-content > ul > li
      .each((el,index,list)=>{

        
        cy.get(el).trigger('mouseover',{ timeout: 5000 })
        


      })
    })
  })