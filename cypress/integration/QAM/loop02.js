describe('Loops', () => {
 
     
        it('First', () => {
          cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
          let arr=[]
          cy.get('a').each((el)=>{
              
            console.log(el.text())
            arr.push(el.text())
          }).as("myarr")

          //cy.get("@myarr").first().click()
          cy.get("@myarr").then(()=>{
              console.log("dizimizin uzunluğu"+arr.length)
              console.log(arr)
          })
        
         
    
    
  
  
    })
})