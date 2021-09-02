

describe('Loops', () => {

    it.only("google.com",()=>{
      cy.visit("https://www.google.com.tr/")
      cy.get("a")
      .each((el,index,list)=>{
       cy.log(el.text(),index,list)

       if (el.text() === '') {
        // stop iteration
        return false
      }
    
     
      })

    })
 
 
    
      it('Second', () => {
        cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
        var arr2=[];
        cy.get('a')
        .each((el,index,list)=>{


         var text= el.text()
        cy.contains(text).click()
        cy.wait(3000)
        cy.go("back")
        })
        
        
        
      })
       
        it('third', () => {
            cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
            //var arr=[]
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