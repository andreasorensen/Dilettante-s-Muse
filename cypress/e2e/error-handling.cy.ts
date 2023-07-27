/// when there is a server error, the user is shown a message telling them so

   // -- initial fetch 

   // -- while navigating to saved

// when the user attempts to go to a nonexistent route, they are taken to another page, giving them a 404 error.

describe("Server-side error handling", () => {

  it("Handles 5XX error during initial fetch of paintings", () => {

    cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getArt');

    cy.visit('http://localhost:3000/')

    cy.contains("Sorry, we encountered a server error. Please try again later.").should("be.visible");
  })

  

})