Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  Scenario: Loading homepage
    Given I go on "index"
    Then the title should equal "Angular Grunt Karma Protractor"
    And the menu should contain "Home"

  Scenario: Loading tv shows
  	Given I go on "tvshows"
  	Then click the button "getShows"
  	And all shows have title "h1"