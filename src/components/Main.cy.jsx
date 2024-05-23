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
  let weekday = [
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
    "Söndag",
  ];
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />);
  });

  it("should contain all the days", () => {
    cy.mount(<Main />);
    cy.get(".day-view").contains(weekday[0]).should("be.visible");
    cy.get(".day-view").contains(weekday[1]).should("be.visible");
    cy.get(".day-view").contains(weekday[2]).should("be.visible");
    cy.get(".day-view").contains(weekday[3]).should("be.visible");
    cy.get(".day-view").contains(weekday[4]).should("be.visible");
    cy.get(".day-view").contains(weekday[5]).should("be.visible");
    cy.get(".day-view").contains(weekday[6]).should("be.visible");
  });
});
