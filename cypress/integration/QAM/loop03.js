describe('Loops', () => {
 
     
        it('First', () => {
          cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
          let arr=[]
          cy.get('a').then((x)=>{
            
           x[0].click()
            console.log(x.text()+" ===============  ")
          
          })
        
         
    
    
  
  
    })
})