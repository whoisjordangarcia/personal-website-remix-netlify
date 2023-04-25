import { faker } from "@faker-js/faker";

describe("smoke tests", () => {
  it("website is running", () => {
    cy.visitAndCheck("/");

  });
});
