import React from "react";
import Item from "./Item";
// import { expect } from "vitest";

//2 Som en student vill jag kunna ta bort en todo item, eftersom saker kan ändras.
// 2.1 Ska finnas en knapp som raderar
// 2.2 Ska kunna klicka på knappen så todon tas bort

describe("<Item />", () => {
  const todoData = [
    { id: 1, day: "mo", done: true, late: false, text: "Göra klart inlämning" },
    {
      id: 2,
      day: "ti",
      done: true,
      late: false,
      text: "Lektion i skolan 9-16",
    },
    { id: 3, day: "ti", done: false, late: true, text: "Övning 1" },
    { id: 4, day: "on", done: false, late: false, text: "Repetera lektionen" },
  ];

  it("should have a delete button", () => {
    cy.mount(<Item item={todoData[0]} />);
    cy.get('[data-cy="delete"]').contains("🗑️").should("be.visible");
  });

  it("should delete the todo when button is clicked", () => {
    cy.mount(<Item item={todoData[0]} />);
    cy.get("label").contains(todoData[0].text).should("be.visible");
    cy.get('[data-cy="delete"]').click();
  });

  // 3 Som en student vill jag kunna ändra texten för en todo item, så att jag kan uppdatera den om något nytt händer.
  //3.1 Det ska finnas en knapp till att ändra todon
  //3.2 Det ska finnas ett inputfält när man klickat på knappen, så man kan skriva ny text
  //3.3 Det ska finnas en spara knapp så man kan spara ändringen
  //3.4 Man ska se todon man sökt efter

  it("should have a edit button", () => {
    cy.mount(<Item item={todoData[0]} />);
    cy.get('[data-cy="change"]').contains("✍️").should("be.visible");
  });

  it("should have a input when pressing och edit button", () => {
    cy.mount(<Item item={todoData[0]} />);
    cy.get('[data-cy="change"]').click();
    cy.get('[data-cy="input-change"]').should("be.visible");
  });

  it("should have a save button to save the new changes, when input is visible", () => {
    let newInputValue = "Övning 2";
    cy.mount(<Item item={todoData[3]} />);
    cy.get('[data-cy="change"]').click();
    cy.get('[data-cy="input-change"]').should("be.visible");
    cy.get('[data-cy="save"]').contains("💾").should("be.visible");
    cy.get('[data-cy="input-change"]').clear().type(newInputValue);
    cy.get('[data-cy="save"]').click();
  });

  // toggle funktion
  it("testing toggle input", () => {
    cy.mount(<Item item={todoData[2]} />);
    cy.get('[data-cy="toggle-input"]').should("be.visible");
    cy.get('[data-cy="toggle-input"]').click();
    cy.get('[ data-cy="toggle-input"]').should("not.be.checked");
  });
});
