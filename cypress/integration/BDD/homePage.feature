Feature: This feature is for task A, B, C

    This feature contains scenarios to validate the homepage

    Scenario: Task A: Verify languages found in the language dropdown
    Given I navigate to AMCS homepage
    When I click on English or any predefined language
    Then Verify included languages in the dropdown options

    Scenario: Task B: Verify languages not found in the language dropdown
    Given I navigate to AMCS homepage
    When I click on English or any predefined language
    Then Verify not included languages in the dropdown options

    Scenario: Task C: Verify careers link when clicked
    Given I navigate to AMCS homepage
    When I scroll to the bottom of the page
    And I click on the Careers link
    Then Verify that I am redirected to the careers link