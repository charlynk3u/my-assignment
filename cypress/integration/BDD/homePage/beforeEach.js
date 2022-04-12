beforeEach(function(){
    cy.fixture("homePage.json").then(function (data) {
      this.data = data;
    });
})