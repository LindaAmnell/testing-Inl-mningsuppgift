//2 Som en student vill jag kunna ta bort en todo item, eftersom saker kan ändras.
// 2.1 Ska finnas en knapp som raderar
// 2.2 Ska kunna klicka på knappen så todon tas bort

describe("delete btn, and change todo", () => {
  it("can i delete a todo", () => {
    cy.visit("/");
    cy.get('[data-cy="delete"]').then(($delete) => {
      const todolist = $delete.length;
      cy.get('[data-cy="delete"]').first().click();
      cy.get('[data-cy="delete"]').should("have.length", todolist - 1);
    });
  });

  // 3 Som en student vill jag kunna ändra texten för en todo item, så att jag kan uppdatera den om något nytt händer.
  //3.1 Det ska finnas en knapp till att ändra todon
  //3.2 Det ska finnas ett inputfält när man klickat på knappen, så man kan skriva ny text
  //3.3 Det ska finnas en spara knapp så man kan spara ändringen
  //3.4 Man ska se todon man sökt efter

  it("change a todo", () => {
    const inputValue = "Övning 2";
    cy.visit("/");
    cy.get('[data-cy="change"]').first().click();
    cy.get('[data-cy="input-change"]').clear().type(inputValue);
    cy.get('[data-cy="save"]').click();
    cy.get("label").first().contains(inputValue).should("be.visible");
  });
});
