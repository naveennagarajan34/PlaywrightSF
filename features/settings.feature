Feature: Settings page functionalities

    Scenario Outline: Add source to project

        Given launch Scripture forge
        When I click the on the project "<project>"
        Then I should be redirected inside the project
        When I click on the settings
        Then I should be navigated to settings page
        When I click on the source project field and select "<source>" as source

        Examples:
            | project | source |
            | PDR     | EASY   |

    @TestRun
    Scenario Outline: Enable Translation suggestions to project

        Given launch Scripture forge
        When I click the on the project "<project>"
        Then I should be redirected inside the project
        When I click on the settings
        Then I should be navigated to settings page
        When I click on the Translation suggestions checkbox "<enable/disable>" suggestions

        Examples:
            | project | enable/disable |
            | PDR     | disable        |
