Feature: This feature is for task D, E, F

    This feature contains scenarios to test task D, E, F in the careers page

    Scenario: Task D: Verify countries filter values
    Given I navigate to AMCS careers page
    Then Verify included Countries filter
    And Verify not included Countries filter

    Scenario: Task E: Verify categories filter values
    Given I navigate to AMCS careers page
    Then Verify included Categories filter
    And Verify not included Categories filter

    Scenario: Task F: Verify careers link when clicked
    Given I navigate to AMCS careers page
    When I click on Ireland in the countries filter
    Then Verify filter is appended to the URL