import React from "react";
import PrioList from "./PrioList";

//4Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.
//4.1 Det behövs ett inputfält, som man kan söka i
//4.2 Det ska vissas vad man sökt efter

describe("<PrioList />", () => {
  it("renders", () => {
    cy.mount(<PrioList />);
  });

  it("should check if there is a input field", () => {
    cy.mount(<PrioList />);
    cy.get('[data-cy="filter-input"]').should("exist");
  });

  it("can i type in input field", () => {
    cy.mount(<PrioList />);
    cy.get('[data-cy="filter-input"]').type("Övning 1");
    cy.get('[data-cy="filter-input"]').should("have.value", "Övning 1");
  });
  it("should check if the list contains the search todo", () => {
    cy.mount(<PrioList />);
    cy.get('[data-cy="filter-input"]').type("Övning 1");
    cy.get(".prio-items").should("contain.text", "Övning 1");
  });
});
