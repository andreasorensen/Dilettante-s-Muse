beforeEach(() => {
  cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting', {
    statusCode: 200, 
    body:  { objectIDs: [1, 2, 3]}  
  } )
  cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/objects/1', {
    statusCode: 200, 
    fixture: 'object1'
  })
  cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/objects/2', {
    statusCode: 200, 
    fixture: 'object2'
  })
  cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/objects/3', {
    statusCode: 200, 
    fixture: 'object3'
  })
  .visit('http://localhost:3000/')
})
it('should have a nav bar', () => {
  cy.url().should('include', '/')
  .get('.nav-container').find('.logo').should('be.visible')
  .get('.nav-container').find('.home-page').should('be.visible')
  .get('.nav-container').find('.saved-art').should('be.visible')
  // .click().url().should('include', '/saved').find('.home-page').click()
})
it('should have art visible on the homepage', () => {
  
})