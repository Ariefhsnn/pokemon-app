describe("check validation", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('[data-testid="email-error"').should("be.visible");
    cy.get('[data-testid="login-button"]').click();
  });
});
