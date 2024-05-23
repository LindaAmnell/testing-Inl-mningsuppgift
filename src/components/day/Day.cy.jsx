import React from "react";
import Day from "./Day";

//Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter.
// Test data för att för att se så att dagar kommer ut

describe("<Day />", () => {
  it("renders with 'Måndag' and 'Tisdag' with tasks", () => {
    const testdataMonday = [
      { id: 1, text: "Göra klart inlämning" },
      { id: 2, text: "Lektion i skolan 9-16" },
    ];
    const testdataTuesday = [{ id: 3, text: "Övning 1" }];

    // Test for Måndag
    cy.mount(<Day day={testdataMonday} dIndex={0} />);
    cy.get('[data-cy="the-day"]').contains("Måndag").should("be.visible");
    cy.get('[data-cy="item"]').should("have.length", 2);
    cy.get('[data-cy="item"]').eq(0).should("contain", "Göra klart inlämning");
    cy.get('[data-cy="item"]').eq(1).should("contain", "Lektion i skolan 9-16");

    // Test for Tisdag
    cy.mount(<Day day={testdataTuesday} dIndex={1} />);
    cy.get('[data-cy="the-day"]').contains("Tisdag").should("be.visible");
    cy.get('[data-cy="item"]').should("have.length", 1);
    cy.get('[data-cy="item"]').eq(0).should("contain", "Övning 1");
  });
});
