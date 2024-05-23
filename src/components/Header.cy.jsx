import React from "react";
import Header from "./Header";

//6 Som en student vill jag kunna starta nästa vecka genom att alla todo items markeras som oavslutade, så att jag inte behöver lägga in alla todo items igen.
//6.1 det ska finnas en knapp som restartar veckans todos (så de inte är i checkade)

describe("<Header />", () => {
  it("renders", () => {
    cy.mount(<Header />);
  });
  it("contains a restart week buttun", () => {
    cy.mount(<Header />);
    cy.get('[data-cy="restart-btn" ]').should("be.visible");
    cy.get('[data-cy="restart-btn" ]').click();
  });
});
