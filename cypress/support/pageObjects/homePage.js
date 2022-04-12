class HomePage
{

    getLanguageSelector()
    {
        return cy.get(".language-selector");
    }

    getLanguageOptions()
    {
        return cy.get("true-list-box a[role='listitem']");
    }

    getCareersLink()
    {
        return cy.get(".link").contains("Careers");
    }
}

export default HomePage;