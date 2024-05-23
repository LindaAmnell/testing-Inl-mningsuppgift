import React from "react";
import App from "./App";
//6 Som en student vill jag kunna starta nästa vecka genom att alla todo items markeras som oavslutade, så att jag inte behöver lägga in alla todo items igen.
//6.1 det ska finnas en knapp som restartar veckans todos (så de inte är i checkade)
//6.2 när man klickar på knappen ska alla checkboxar bli ur klickade

describe("<App />", () => {
  it("renders", () => {
    cy.mount(<App />);
  });

  it("shoult have a restar week button", () => {
    cy.mount(<App />);
    cy.get("header").should("be.visible");
    cy.get('[data-cy="restart-btn" ]').should("be.visible");
  });

  it("when i click the restart button, all checkboxes should be unchecked", () => {
    cy.mount(<App />);
    cy.get("header").should("be.visible");
    cy.get('[data-cy="restart-btn" ]').should("be.visible");
    cy.get('[data-cy="restart-btn" ]').click();
    cy.get('[data-cy="toggle-input"]').then(($checkboxes) => {
      let checkedBoxes = $checkboxes.filter(":checked");
      checkedBoxes = checkedBoxes.length;

      expect(checkedBoxes).to.equal(0);
    });
  });
});
