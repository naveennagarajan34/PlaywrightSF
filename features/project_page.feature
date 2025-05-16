Feature: Projects page functionalities


    Scenario Outline: Connect the Given project
        Given launch Scripture forge
        When I click the Connect button on the project "<project>"
        Then I should be redirected inside the project

        Examples:
            | project |
            | PDR     |

    @test
    Scenario Outline: Open the given project
        Given launch Scripture forge
        When I click the on the project "<project>"
        Then I should be redirected inside the project

        Examples:
            | project |
            | PDR     |