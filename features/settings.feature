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


    Scenario Outline: Enable or disable Translation suggestions to project

        Given launch Scripture forge
        When I click the on the project "<project>"
        Then I should be redirected inside the project
        When I click on the settings
        Then I should be navigated to settings page
        When I click on the Translation suggestions checkbox to "<enable/disable>" suggestions

        Examples:
            | project | enable/disable |
            | PDR     | enable        |


    Scenario Outline: Enable or disable Community checking to project

        Given launch Scripture forge
        When I click the on the project "<project>"
        Then I should be redirected inside the project
        When I click on the settings
        Then I should be navigated to settings page
        When I click on the Community checking checkbox to "<enable/disable>" feature

        Examples:
            | project | enable/disable |
            | PDR     | enable        |

    @TestRun
    Scenario Outline: Enable or disable Biblical Terms to project

        Given launch Scripture forge
        When I click the on the project "<project>"
        Then I should be redirected inside the project
        When I click on the settings
        Then I should be navigated to settings page
        When I click on the Biblical terms checkbox to "<enable/disable>" feature

        Examples:
            | project | enable/disable |
            | PDR     | enable        |