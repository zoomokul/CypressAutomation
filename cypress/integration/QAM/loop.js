describe('Loops', () => {
    
    it.skip('Loop1', () => {
        var dizi=[]
        cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
        cy.get('a')
        .last()
        .each((el)=>{
            dizi.push(el.text())
        
        }
        )   
        cy.log(dizi)
    })
    it.skip('Loop2', () => {
        cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
        var arr2=[];
        cy.get('a')
        .each((el,index,list)=>{
            
          //cy.log(el.text())
          arr2.push(el.text()) //bunlar calışmıyor
          
        })
       console.log(arr2[1])
    })

    it('third', () => {
        cy.visit("https://react-redux.realworld.io/#/login?_k=5jewux")
        var arr=[]
        var arr2=[]
        cy.get('a').each((el)=>{
            
            arr.push(el.text())
           arr.forEach(x=>arr2.push(x))
            //console.log("döngü sonu")
           // cy.log('dizinin uzunluğu',arr.length)

         
          
          
  
        }
        )
        arr2.forEach(x=>console.log(x))
        cy.log('dizinin uzunluğu2',arr.length)
       /* for (let index = 0; index < arr.length; index++) {
          console.log(arr[index]);
       
        }*/

}

)



  })