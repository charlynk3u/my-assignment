import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "./../../../support/pageObjects/HomePage"

const homePage = new HomePage();

Given('I navigate to AMCS homepage', ()=>{    
    cy.visit(Cypress.env('url'));
})

When('I click on English or any predefined language', ()=>{ 
    homePage.getLanguageSelector().click();
})

Then('Verify included languages in the dropdown options', function(){
    cy.verifyLanguageOptionExists(this.data.languanges);
})

Then('Verify not included languages in the dropdown options', function(){
    cy.verifyLanguageOptionNotExists(this.data.nonExistingLanguanges);
})

When('I scroll to the bottom of the page', ()=>{ 
    cy.scrollTo("bottom");
})

And('I click on the Careers link', ()=>{ 
    homePage.getCareersLink().click();
})

Then('Verify that I am redirected to the careers link', function(){
    cy.verifyPageURL(this.data.careersPage);
})
