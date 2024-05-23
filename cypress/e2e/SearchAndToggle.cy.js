describe("search and toggle todo", () => {
  //4Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.
  //4.1 Det behövs ett inputfält, som man kan söka i
  //4.2 Det ska vissas vad man sökt efter

  it("Search for a todo", () => {
    cy.visit("/");
    const SearchInput = "Övning 1";
    cy.get('[data-cy="filter-input"]').click();
    cy.get('[data-cy="filter-input"]').type(SearchInput);
    cy.get(".prio-items").first().contains(SearchInput).should("be.visible");
  });
  //toggla todo

  it("toggle a todo", () => {
    cy.visit("/");
    cy.get('[ data-cy="toggle-input"]').first().click();
    cy.get('[ data-cy="toggle-input"]').first().should("not.be.checked");
  });
});
