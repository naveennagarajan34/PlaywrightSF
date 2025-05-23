Feature: Settings page functionalities

  Scenario Outline: Add the given source project
    Given launch Scripture forge
    When I click the on the project "<project>"
    Then I should be redirected inside the project
    When I click on the Settings
    Then I add the source "<source>" in the Source field

    Examples:
      | project | source |
      | PDR     | EASY   |
