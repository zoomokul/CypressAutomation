
https://www.velotio.com/engineering-blog/full-stack-qa-testing-using-cypress

describe('Example to demonstrate API Testing in cypress', function () {

    it('Hit an API End point and validate its response status code and body', () => {
        cy.request({
            method: 'GET',
            url: 'https://randomuser.me/api/',
            qs: 'results=1'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('info')
            expect(response.body.info).to.have.property('version', '1.3')
        })
    })

    it('verify request returns JSON', () => {
        cy.request('https://jsonplaceholder.typicode.com/todos/1').its('headers').its('content-type').should('include', 'application/json')
      })
    
      it('verify request returns JSON', () => {
        cy.request('https://jsonplaceholder.typicode.com/todos/1').its('status').should('be.equal', 200)
      })
      it('verify request returns JSON', () => {
        cy.request('https://jsonplaceholder.typicode.com/todos/1').its('body').should('have.length', 1)
      })




})