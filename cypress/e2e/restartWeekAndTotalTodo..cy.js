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

  //7. Som en student vill jag kunna se en sammanställning av totala antalet todos och hur många som inte är klara, så att jag får en överblick över min produktivitet. (Ex.: "15/20 klara")
  //7.1 det borde finnas en text där det står hur många man har klarat av och hur många det finns
  it("should show how many todos you have done ant the total todos you have", () => {
    cy.visit("/");
    cy.get('[ data-cy="toggle-input"]').first().click();
    cy.get('[data-cy="total-todos"]').contains("4 / 9");
    cy.get('[ data-cy="toggle-input"]').last().click();
    cy.get('[data-cy="total-todos"]').contains("5 / 9");
    cy.get('[data-cy="restart-btn" ]').click();
    cy.get('[data-cy="toggle-input"]').then(($checkboxes) => {
      let checkedBoxes = $checkboxes.filter(":checked");
      checkedBoxes = checkedBoxes.length;
      expect(checkedBoxes).to.equal(0);
    });
    cy.get('[data-cy="total-todos"]').contains("0 / 9");
  });
});
