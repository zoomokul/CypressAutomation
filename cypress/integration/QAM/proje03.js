describe('Kitap Liste', () => {
    it.skip('Kitap İsmi', () => {
      cy.visit('https://www.kitapyurdu.com/')
      cy.get('.has-open-menu:contains(Tüm Kitaplar)').last().trigger('mouseover',{force: true})
      cy.contains('Bilgisayar').click({force: true})
      cy.get('select').last().select('100')
      cy.get("div[class='name ellipsis']")    //div[class='price']   //div[class='author']
      .each((el,index,list)=>{

        cy.log(el.text())
      })
      
    
    
    
    })

    it.skip('Kitap İsmi', () => {
        cy.visit('https://www.kitapyurdu.com/index.php?route=product/category&filter_category_all=true&path=1&filter_in_stock=1&sort=purchased_365&order=DESC&limit=100')
       
        cy.get("div[class='name ellipsis']")    //div[class='price']   //div[class='author']
        .each((el,index,list)=>{
  
          cy.log(el.text())
        })
        
      
      
      
      })
      it.skip('Kitap İsmi', () => {

        for (var index = 1; index < 10; index++) {
            cy.visit('https://www.kitapyurdu.com/index.php?route=product/category&filter_category_all=true&path=1&filter_in_stock=1&sort=purchased_365&order=DESC&limit=100&page='+index+'')
            cy.get("div[class='name ellipsis']")   
            .each((el,index,list)=>{
      
              cy.log(el.text())
            })
        }
      
      
      
      
      })

      it.skip('writefile', () => {
        cy.visit('https://www.kitapyurdu.com/index.php?route=product/category&filter_category_all=true&path=1&filter_in_stock=1&sort=purchased_365&order=DESC&limit=100')
       
        cy.get("div[class='name ellipsis']")    //div[class='price']   //div[class='author']
        .each((el,index,list)=>{

          cy.writeFile('sample.txt',el.text()+'\n',{flag: 'a+'})
  
          //cy.log(el.text())
        })
        
      
      
      
      })

      it('reading', () => {

        var kitaplar=[]
   
          cy.readFile('sample.txt')
         
          .then(function (params) {
           cy.log(params)
          })
         
      
      
      })
  })