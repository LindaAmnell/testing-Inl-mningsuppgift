//6 Som en student vill jag kunna starta nästa vecka genom att alla todo items markeras som oavslutade, så att jag inte behöver lägga in alla todo items igen.
//6.1 det ska finnas en knapp som restartar veckans todos (så de inte är i checkade)
//6.2 när man klickar på knappen ska alla checkboxar bli ur klickade

describe("restart all todo of the weekend, when push restart button", () => {
  it("push restart button, and uncheck the checkboxes", () => {
    cy.visit("/");
    cy.get('[data-cy="restart-btn" ]').click();
    cy.get('[data-cy="toggle-input"]').then(($checkboxes) => {
      let checkedBoxes = $checkboxes.filter(":checked");
      checkedBoxes = checkedBoxes.length;

      expect(checkedBoxes).to.equal(0);
    });
  });
});
