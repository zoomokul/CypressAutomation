
//https://www.youtube.com/watch?v=sHlhuwb59Vk&list=PLN9RL2PyZc184ita-eXbAMlErM0eVNUMj&index=27

/*
1-resmi sayfasındaki işlemleri yapıyoruz
2-
*/
describe('TS', () => {
    it('download', () => {
      cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

      //https://ogmmateryal.eba.gov.tr/panel/upload/files/mznv4a5i1m1.pdf

    
      
    
 
    })
    it('download1', () => {
      cy.downloadFile('https://ogmmateryal.eba.gov.tr/panel/upload/files/mznv4a5i1m1.pdf','mydownloads','example.pdf')

      //https://ogmmateryal.eba.gov.tr/panel/upload/files/mznv4a5i1m1.pdf
      
    
      
    
 
    })



  })