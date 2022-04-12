///  <reference types="Cypress" />

describe("This is a test suite for task D, E, F.", function () {
  beforeEach(function () {
    cy.fixture("careersPage.json").then(function (data) {
      this.data = data;
    });

    cy.visit(Cypress.env('url')+"careers/#");
  });

  it("Task D: Verify countries filter values in careers page.", function () {
    cy.verifyCountryFilterExists(this.data.countries);
    cy.verifyCountryFilterNotExists(this.data.notIncludedCountries);
  });

  it("Task E: Verify category filter values in careers page.", function () {
    cy.verifyCategoryFilterExists(this.data.categories);
    cy.verifyCategoryFilterNotExists(this.data.notIncludedCategories);
  });

  it("Task F: Click on a filter and verify url value.", function () {
    cy.filterByCountry(this.data.selectCountry);
    cy.verifyFilterInURL(this.data.selectCountry, this.data.careersPage1);
   });

});
