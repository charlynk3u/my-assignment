///  <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';

const homePage = new HomePage();

describe("This is a test suite for task A, B, C.", function () {
  beforeEach(function () {
    cy.fixture("homePage.json").then(function (data) {
      this.data = data;
    });

    cy.visit(Cypress.env('url'));
  });

  it("Task A: Verify language dropdown value exists.", function () {
    homePage.getLanguageSelector().click();
    cy.verifyLanguageOptionExists(this.data.languanges);
  });

  it("Task B: Verify language dropdown values not exists.", function () {
    homePage.getLanguageSelector().click();
    cy.verifyLanguageOptionNotExists(this.data.nonExistingLanguanges);
  });

  it("Task C: Click careers link and verify url.", function () {
    cy.scrollTo("bottom");
    homePage.getCareersLink().click();
    cy.verifyPageURL(this.data.careersPage);
  });

});
