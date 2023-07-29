describe("Users should be able to load homepage", () => {
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
    ).as("getdata1");
    cy.intercept(
      "GET",
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/2",
      {
        statusCode: 200,
        fixture: "object2",
      }
    ).as("getdata2");
    cy.intercept(
      "GET",
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/3",
      {
        statusCode: 200,
        fixture: "object3",
      }
    )
      .as("getdata3")
      .visit("http://localhost:3000/");
  });

  it("should have a nav bar and art visible on the homepage", () => {
    cy.url()
      .should("include", "/")
      .get(".nav-container")
      .find(".logo")
      .should("be.visible")
      .get(".nav-container")
      .find(".home-page")
      .should("be.visible")
      .get(".nav-container")
      .find(".saved-art")
      .should("be.visible")
      .get(".art-cards-container")
      .should("be.visible")
      .get(".art-cards-container")
      .should("have.length", 1)
      .get(".art-cards-container")
      .find(".frame-container")
      .find(".image-container")
      .find(".image")
      .should("be.visible")
      .get(".details-container")
      .should("be.visible")
      .get(".details-container")
      .find(".details")
      .find(".title")
      .get(".details")
      .find(".artist")
      .get(".details")
      .find(".date")
      .get(":nth-child(1) > .details-container > .fave-container > div")
      .find(".fave-icon")
      .click()
      .should("have.attr", "src")
      .should("include", "/static/media/saved.3e19432c4a0f740d5575.png")
      .get(":nth-child(1) > .details-container > .fave-container > div")
      .find(".fave-icon")
      .click()
      .should("have.attr", "src");
    cy.get(".home-header")
      .should("be.visible")
      .get(".home-header")
      .should(
        "have.text",
        "Discover Paintings from the Metropolitan Museum of Art"
      );
  });

  it("Should have different route paths going from homepage to saved page and back", () => {
    cy.url()
      .should("include", "/")
      .get(".nav-container")
      .find(".saved-art")
      .click();
    cy.url()
      .should("include", "/saved")
      .get(".nav-container")
      .find(".home-page")
      .click();
    cy.url().should("include", "/");
  });
// });

  it("Should be able to get more art pieces by clicking button ", () => {
    cy.get(".more-btn").click();
    cy.get(".art-cards-container")
      .should("be.visible")
      .get(".art-cards-container")
      .should("have.length", 1)
      .get(".art-cards-container")
      .children()
      .should("have.length", 3)
      .get(".art-cards-container")
      .find(".frame-container")
      .find(".image-container")
      .find(".image")
      .should("be.visible")
      .get(".details-container")
      .should("be.visible")
      .get(".details-container")
      .find(".details")
      .find(".title")
      .get(".details")
      .find(".artist")
      .get(".details")
      .find(".date");
  });

  it("Should display loading text if art is loading", () => {
    cy.visit("http://localhost:3000/?delay=500")
      .get(".loading-text")
      .should("be.visible")
      .should("have.text", "Loading...")
      .get(".art-cards-container")
      .children()
      .should("have.length", 3);
  });
});
