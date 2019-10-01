Feature: Base Test

  Scenario: Testing simple app
    Given I want to sum an unknown number with: 10
    When I send the numbers
    Then The sum is greater than the original number
