

describe('Loops', () => {
  /*
    it('First', () => {
      cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
      let arr=[]
      cy.get('a').first().each((el)=>{
          
        // metninı yazdırıyoruz.
        console.log(el.text())
        //elemanları secip işlem uygulayabiliriz.
        cy.get(el).click() 
        

      })
     */
    /*
      it('Second', () => {
        cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
        let arr=[]
        cy.get('a').each((el)=>{
            
          console.log(el.text())
          arr.push(el.text())

         
          
          
  
        })
        */
        it('third', () => {
            cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
            var arr=[]
            cy.get('a').each((el)=>{
                
                arr.push(el.text())
               //arr.forEach(x=>console.log(x))
                //console.log("döngü sonu")
                cy.log('dizinin uzunluğu',arr.length)
    
             
              
              
      
            }
            )
            cy.log('dizinin uzunluğu2',arr.length)
            for (let index = 0; index < arr.length; index++) {
              console.log(arr[index]);
              
            }
            

      
   }
 
   )
  
  


  })