describe("add a new todo", () => {
  it("can i add a new todo", () => {
    let newTodo = "dansa kl 13";
    let newTodo2 = "besöka föräldrarna";
    cy.visit("/");
    cy.get('[data-cy="new-todo"]').first().click();
    cy.get('[ data-cy="input-new-todo"]').type(newTodo);
    cy.get('[data-cy="spara-todo"]').click();
    cy.get(".item").first().next().children().contains(newTodo);
    cy.get('[data-cy="new-todo"]').last().click();
    cy.get('[ data-cy="input-new-todo"]').type(newTodo2);
    cy.get('[data-cy="spara-todo"]').click();
    cy.get(".item").first().next().children().contains(newTodo);
  });
});
