//1Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter.

describe("show all weekendays", () => {
  it("can i see all days", () => {
    cy.visit("/");
    cy.get(".day-view").contains("Måndag").should("be.visible");
    cy.get(".day-view").contains("Tisdag").should("be.visible");
    cy.get(".day-view").contains("Onsdag").should("be.visible");
    cy.get(".day-view").contains("Torsdag").should("be.visible");
    cy.get(".day-view").contains("Fredag").should("be.visible");
    cy.get(".day-view").contains("Lördag").should("be.visible");
    cy.get(".day-view").contains("Söndag").should("be.visible");
  });
});
