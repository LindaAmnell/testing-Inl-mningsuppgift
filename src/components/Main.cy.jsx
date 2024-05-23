import React from "react";
import Main from "./Main";

//Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter.
// 1 det ska finnas ett element som innehåller måndag
// 2 det ska finnas ett element som innehåller tisdag
// 3 det ska finnas ett element som innehåller onsdag
// 4 det ska finnas ett element som innehåller torsdag
// 5 det ska finnas ett element som innehåller fredag
// 6 det ska finnas ett element som innehåller lördag
// 7 det ska finnas ett element som innehåller söndag

describe("<Main />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />);
  });

  it("should contain monday-sunday", () => {
    cy.mount(<Main />);
    cy.get(".day-view").contains("Måndag").should("be.visible");
    cy.get(".day-view").contains("Tisdag").should("be.visible");
    cy.get(".day-view").contains("Onsdag").should("be.visible");
    cy.get(".day-view").contains("Torsdag").should("be.visible");
    cy.get(".day-view").contains("Fredag").should("be.visible");
    cy.get(".day-view").contains("Lördag").should("be.visible");
    cy.get(".day-view").contains("Söndag").should("be.visible");
  });
});
