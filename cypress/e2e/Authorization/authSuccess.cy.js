describe("authorization admin page", () => {
  const auth = require("../../fixtures/auth");
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("login and pass validation", () => {
    cy.login(auth.emailValid, auth.passwordValid);
    cy.contains(auth.authorizationName).should("be.visible");
  });
});
