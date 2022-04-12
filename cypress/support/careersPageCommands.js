/// <reference types='Cypress' />

import CareersPage from "./pageObjects/CareersPage";

const careersPage = new CareersPage();
const arr = [];

//Function to filter a country in the countries filter
Cypress.Commands.add('filterByCountry', function ($testdata) {
  careersPage.getCountriesFilterLabel().each(($el, index, $list) => {
        const cntry = $el.text().toLowerCase().trim();
        if (cntry === ($testdata).toLowerCase().trim()) {
          careersPage.getCountriesFilterCheckbox()
          .eq(index)
          .check({force: true});
        }
    });
});

//Function to verify url if filter is appended to it
Cypress.Commands.add('verifyFilterInURL', function ($testdata, $url) {
  const cntry = $testdata.toLowerCase().trim();
  cy.url().should("eq", `${$url}?countries=${cntry}`);
});

//Function to get all categories filter and verify existing categories
Cypress.Commands.add('verifyCategoryFilterExists', function ($testdata) {
  careersPage.getCategoriesFilterLabel()
    .each(($el, index, $list) => {
      arr.push($el.text().trim());
    })
    .then(() => {
      $testdata.forEach((data) => {
        expect(arr).to.include(data);
      });
    });
});

//Function to get all categories filter and verify non-existing categories
Cypress.Commands.add('verifyCategoryFilterNotExists', function ($testdata) {
  careersPage.getCategoriesFilterLabel()
    .each(($el, index, $list) => {
      arr.push($el.text().trim());
    })
    .then(() => {
      $testdata.forEach((data) => {
        expect(arr).to.not.include(data);
      });
    });
});

//Function to get all countries filter and verify existing countries
Cypress.Commands.add('verifyCountryFilterExists', function ($testdata) {
  careersPage.getCountriesFilterLabel()
  .each(($el, index, $list) => {
    arr.push($el.text().trim());
  })
  .then(() => {
    this.data.countries.forEach((data) => {
      expect(arr).to.include(data);
    });
  });
});

//Function to get all countries filter and verify non-existing countries
Cypress.Commands.add('verifyCountryFilterNotExists', function ($testdata) {
  careersPage.getCountriesFilterLabel()
  .each(($el, index, $list) => {
    arr.push($el.text().trim());
  })
  .then(() => {
    this.data.notIncludedCountries.forEach((data) => {
      expect(arr).to.not.include(data);
    });
  });
});