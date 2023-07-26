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
// it('should get a notification if the art pieces are still loading', () => {
//   cy.get('.art-cards-container')
//   .get('p').contains('Loading...')
                        
// })

it('should be able to see saved art pieces on saved art section', () => {
  cy.get(':nth-child(1) > .details-container > .fave-container > div > .fave-icon').click()
  .get(':nth-child(2) > .details-container > .fave-container > div > .fave-icon').click()
  .get('.saved-art').click()
  .get('.art-card').should('have.length', '2')              
})
it('should have filled in hearts for saved pieces', () => {
  cy.get(':nth-child(1) > .details-container > .fave-container > div > .fave-icon').click()
  .get(':nth-child(2) > .details-container > .fave-container > div > .fave-icon').click()
  .get('.saved-art').click()
  .get(':nth-child(1) > .details-container > .fave-container > div > .fave-icon').should('have.attr', 'src').should('include', '/static/media/saved.3e19432c4a0f740d5575.png')
  .get(':nth-child(2) > .details-container > .fave-container > div > .fave-icon').should('have.attr', 'src').should('include', '/static/media/saved.3e19432c4a0f740d5575.png')            
})