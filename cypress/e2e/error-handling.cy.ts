describe("Server-side error handling", () => {

  it("Handles 5XX error during initial fetch of paintings", () => {

    cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getArt');

    cy.visit('http://localhost:3000/')

    cy.contains("Sorry, we encountered a server error. Please try again later.").should("be.visible");
  })

  it("Handles 5XX errors when loading homepage art pieces", () => {

    cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting', {
      statusCode: 200, 
      body:  { objectIDs: [1, 2, 3]}  
    })

    cy.intercept(
      'GET', "https://collectionapi.metmuseum.org/public/collection/v1/objects/*", {
        statusCode: 500,
        body: "Internal Server Error"
      }).as("getArt");
  
    cy.visit('http://localhost:3000/');
  
    cy.contains("Loading...").should("be.visible");
  
    cy.contains("Sorry, we encountered a server error. Please try again later.").should("be.visible");
  })
});

describe('Displays 404 page for nonexistent routes', () => {

  it('Navigates to a 404 page when the user uses a nonexistent route', () => {

    cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting', {
      statusCode: 200, 
      body:  { objectIDs: [1, 2, 3]}
    }).as('allArt')

    cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/objects/1', {
      statusCode: 200, 
      fixture: 'object1'
    }).as('object1')

    cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/objects/2', {
      statusCode: 200, 
      fixture: 'object2'
    }).as('object2')

    cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/objects/3', {
      statusCode: 200, 
      fixture: 'object3'
    }).as('object3')

    cy.visit('http://localhost:3000/');

    cy.wait(['@allArt', '@object1', '@object2', '@object3']);

    cy.visit('http://localhost:3000/nonsense/');

    cy.contains("404 Not Found").should("be.visible");

    cy.contains("Sorry, the page you are looking for does not exist.").should("be.visible");

  });
});