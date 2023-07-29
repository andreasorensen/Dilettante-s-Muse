describe("User should be able to save art", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting",
      {
        statusCode: 200,
        body: { objectIDs: [1, 2, 3] },
      }
    ).as("object-fetch");
    cy.intercept(
      "GET",
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/1",
      {
        statusCode: 200,
        fixture: "object1",
      }
    ).as("object1");
    cy.intercept(
      "GET",
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/2",
      {
        statusCode: 200,
        fixture: "object2",
      }
    ).as("object2");
    cy.intercept(
      "GET",
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/3",
      {
        statusCode: 200,
        fixture: "object3",
      }
    )
      .as("object3")
      .visit("http://localhost:3000/");
  });

  it("should be able to go to my favorite pieces section and be able to see saved art pieces on saved art section", () => {
    cy.get(".saved-art")
      .click()
      .get(".saved-header")
      .should("have.text", "My Favorite Pieces")
      .get(".saved-text")
      .should("have.text", "There are no saved pieces")
      .get(".home-page")
      .click();
    cy.savePieces();
    cy.get(".art-card").should("have.length", 1);
  });

  it("should have filled in hearts for saved pieces", () => {
    cy.savePieces();
    cy.get(
      ":nth-child(1) > .details-container > .fave-container > div > .fave-icon"
    )
      .should("have.attr", "src")
      .should("include", "/static/media/saved.3e19432c4a0f740d5575.png");
  });

  it("should be able to delete saved pieces", () => {
    cy.savePieces();
    cy.get(".art-card")
      .click()
      .should("have.length", 1)
      .get(".fave-icon")
      .click()
      .get(".art-card")
      .should("have.length", 0);
  });
});
