/* global describe, it, cy, beforeEach */

describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
  });

  it("successfully submits Create Set form", () => {
    cy.get("[data-cy=toggle_form]").click();
    cy.get("[data-cy=set_form]").within(() => {
      cy.get("input[name=titleInput]").type("New Set");
      cy.get("input[type=submit]").click();
    });
    cy.contains("New Set");
  });

  it("shows error for empty Create Set form", () => {
    cy.get("[data-cy=toggle_form]").click();
    cy.get("[data-cy=set_form]").within(() => {
      cy.get("input[type=submit]").click();
    });
    cy.contains("TITLE CANNOT BE EMPTY");
  });

  it("successfully submits Add Card form", () => {
    cy.get("[data-cy='1']").click();
    cy.get("[data-cy=toggle_form]").click();
    cy.get("[data-cy=card_form]").within(() => {
      cy.get("input[name=termInput]").type("New Term");
      cy.get("input[name=descriptionInput]").type("New Description");
      cy.get("input[type=submit]").click();
    });
    cy.contains("New Term");
  });

  it("shows error for empty Add Card form", () => {
    cy.get("[data-cy='1']").click();
    cy.get("[data-cy=toggle_form]").click();
    cy.get("[data-cy=card_form]").within(() => {
      cy.get("input[type=submit]").click();
    });
    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY");
  });
});
