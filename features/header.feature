Feature: Header Functionalities

  Scenario Outline: Click on SF logo redirect to projects page
    Given user is on projects page
    When I click the on the project "<project>"
    Then I should be redirected inside the project
    When I click on the sf logo in the header
    Then I should be redirected to the projects page

    Examples:
      | project |
      | TLP     |

  Scenario Outline: Change the application UI
    Given user is on projects page
    When user clicks on UI icon
    Then click on the "<language>" locale

    Examples:
      | language     |
      | English (UK) |
