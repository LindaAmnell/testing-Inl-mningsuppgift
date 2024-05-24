import React from "react";
import Main from "./Main";
import { useStore } from "../data/store";

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

  //7. Som en student vill jag kunna se en sammanställning av totala antalet todos och hur många som inte är klara, så att jag får en överblick över min produktivitet. (Ex.: "15/20 klara")
  //7.1 det borde finnas en text där det står hur många man har klarat av och hur många det finns

  it("should show how many todos that are completed", () => {
    const testTodos = [
      {
        id: 1,
        day: "mo",
        done: true,
        late: false,
        text: "Göra klart inlämning",
      },
      {
        id: 2,
        day: "ti",
        done: true,
        late: false,
        text: "Lektion i skolan 9-16",
      },
      { id: 3, day: "ti", done: false, late: true, text: "Övning 1" },
      {
        id: 4,
        day: "on",
        done: false,
        late: false,
        text: "Repetera lektionen",
      },
      { id: 5, day: "on", done: true, late: false, text: "Övning 2" },
      {
        id: 6,
        day: "to",
        done: false,
        late: false,
        text: "Distanslektion 9-16",
      },
      { id: 7, day: "lo", done: true, late: false, text: "Dansa" },
      { id: 8, day: "so", done: false, late: false, text: "Träna" },
    ];
    useStore.setState({ todos: testTodos });

    cy.mount(<Main />);
    cy.get('[data-cy="total-todos"]').should("be.visible");
    cy.get('[data-cy="total-todos"]').contains("4 / 8").should("be.visible");
  });
});
