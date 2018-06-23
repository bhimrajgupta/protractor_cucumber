#features/test.feature
Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests for learning

  Scenario: Protractor and Cucumber Test
    Given I go to protractor
    When I go to the reference tab
    And I go to the protractor API
    Then I should see the Protractor API page