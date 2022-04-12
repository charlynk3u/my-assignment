class CareersPage
{

    getCountriesFilterLabel()
    {
        return cy.get("input[data-group-name='countries'] + span");
    }

    getCountriesFilterCheckbox()
    {
        return cy.get("input[data-group-name='countries']");
    }

    getCategoriesFilterLabel()
    {
        return cy.get("input[data-group-name='categories'] + span");
    }
}

export default CareersPage;