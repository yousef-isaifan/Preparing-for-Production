/* global describe, it, cy, beforeEach */

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("navigates to Card Sets page", () => {
    cy.get("#cardSetPage").click();
    cy.contains("Study Set Library");
  });

  it("navigates to About page", () => {
    cy.get("#aboutPage").click();
    cy.contains("About Study Night");
  });

  it("navigates to Home page", () => {
    cy.get("#homePage").click();
    cy.contains("Study Night");
  });
});
