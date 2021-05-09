//.navbar-nav>li

describe('My First Test', () => {

    // first it block
    it('first!', () => {
      cy.visit('http://demo.automationtesting.in/Register.html')

      cy.get('.navbar-nav>li').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        //if ($el.someMethod() === 'something')
          // wrap this element so we can
          // use cypress commands on it
          //cy.wrap($el).click()
          //cy.log($el)
          //console.log($el)
          //cy.log(index)
          cy.log($el.text())
      
      })
      .then(($el)=>{
       
        cy.wrap($el).last().click()  // get ile de çalışıyor
       // cy.go(-1) 
        // cy.wrap($el).click({ multiple: true })  //{ multiple: true }-----> çalışmadı.
  
      })
    })

    // second it block
    it('second!', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
  
        cy.get('.navbar-nav>li').each(($el, index, $list) => {
            if(index==7){
                cy.get($el).click()
                //cy.go(-1) 
            }
        
        })
      
      })
      //// third it block
      it('third!', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
  
        cy.get('.navbar-nav>li').each(($el, index, $list) => {
            if($el.text()==='WebTable'){  // düzhün çalışmıyor
                cy.get($el).click()
               
             }
        
        })
      
      })


  })