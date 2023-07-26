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
//testing home page navbar
it('should have a nav bar', () => {
  cy.url().should('include', '/')
  .get('.nav-container').find('.logo').should('be.visible')
  .get('.nav-container').find('.home-page').should('be.visible')
  .get('.nav-container').find('.saved-art').should('be.visible')
})
it('should have art visible on the homepage', () => {
  cy.get('.art-cards-container').should('be.visible')
  .get('.art-cards-container').should('have.length', 1)
  .get('.art-cards-container').find('.frame-container').find('.image-container').find('.image').should('be.visible')
  .get('.details-container').should('be.visible')
  .get('.details-container').find('.details').find('.title')
  .get('.details').find('.artist')
  .get('.details').find('.date')
  .get(':nth-child(1) > .details-container > .fave-container > div').find('.fave-icon').click().should('have.attr', 'src').should('include', '/static/media/saved.3e19432c4a0f740d5575.png')
  .get(':nth-child(1) > .details-container > .fave-container > div').find('.fave-icon').click().should('have.attr', 'src')
})
it('Should have different route paths going from homepage to saved page and back', () => {
  cy.url().should('include', '/')
  .get('.nav-container').find('.saved-art').click()
  .url().should('include', '/saved')
  .get('.nav-container').find('.home-page').click()
  .url().should('include', '/')
})