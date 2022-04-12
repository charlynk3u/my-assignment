beforeEach(function(){
    cy.fixture("careersPage.json").then(function (data) {
      this.data = data;
    });
})