import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import CareersPage from "../../../support/pageObjects/CareersPage"

const careersPage = new CareersPage();

Given('I navigate to AMCS careers page', ()=>{    
    cy.visit(Cypress.env('url')+"careers/#");
})

Then('Verify included Countries filter', function(){
    cy.verifyCountryFilterExists(this.data.countries);
})

And('Verify not included Countries filter', function(){
    cy.verifyCountryFilterNotExists(this.data.notIncludedcountries);
})

Then('Verify included Categories filter', function(){
    cy.verifyCategoryFilterExists(this.data.categories);
})

And('Verify not included Categories filter', function(){
    cy.verifyCategoryFilterNotExists(this.data.notIncludedCategories);
})

When('I click on Ireland in the countries filter', function(){
    cy.filterByCountry(this.data.selectCountry);
})

Then('Verify filter is appended to the URL', function(){
    cy.verifyFilterInURL(this.data.selectCountry, this.data.careersPage1);
})