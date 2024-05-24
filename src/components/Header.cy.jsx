import React from "react";
import Header from "./Header";
import { useStore } from "../data/store";

//6 Som en student vill jag kunna starta nästa vecka genom att alla todo items markeras som oavslutade, så att jag inte behöver lägga in alla todo items igen.
//6.1 det ska finnas en knapp som restartar veckans todos (så de inte är i checkade)

describe("<Header />", () => {
  const testTodos = [
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

  it("contains a restart week buttun", () => {
    useStore.setState({ todos: testTodos });

    cy.mount(<Header />);

    cy.get('[data-cy="restart-btn" ]').should("be.visible");
    cy.get('[data-cy="restart-btn" ]').click();
    cy.then(() => {
      const todos = useStore.getState().todos;
      todos.forEach((todo) => {
        expect(todo.done).to.equal(false);
      });
    });
  });
});
