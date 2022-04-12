/// <reference types='Cypress' />

import HomePage from "./pageObjects/HomePage";

const homePage = new HomePage();
const arr = [];

//Function to get all language options and verify if existing languages
Cypress.Commands.add('verifyLanguageOptionExists', function ($testdata) {
  homePage.getLanguageOptions()
    .each(($el, index, $list) => {
      arr.push($el.text());
    })
    .then(() => {
      $testdata.forEach((data) => {
        expect(arr).to.include(data);
      });
    });
});

//Function to get all language options and verify if non-existing languages
Cypress.Commands.add('verifyLanguageOptionNotExists', function ($testdata) {
  homePage.getLanguageOptions()
    .each(($el, index, $list) => {
      arr.push($el.text());
    })
    .then(() => {
      $testdata.forEach((data) => {
        expect(arr).to.not.include(data).and.to.not.include(undefined);
      });
    });
});

//Function to verify page url
Cypress.Commands.add('verifyPageURL', function ($url) {
  cy.url().should("eq", $url);
});

// //Function to click on careers link
// Cypress.Commands.add('clickCareersLink', function () {
//   homePage.getCareersLink().click();
// })

// //Function to scroll down
// Cypress.Commands.add('scrollToBottom', function () {
//   cy.scrollTo("bottom");
// })

// //Function to click on language selector
// Cypress.Commands.add('clickLanguageSelector', function () {
//   homePage.getLanguageSelector().click();
// })