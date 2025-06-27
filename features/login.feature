# features/login.feature
Feature: Login to Scripture Forge

    # @test
    # Scenario: Verify login
    #     Given I launch Scripture forge
    #     When I login with paratext using "naveen.n@ecgroup-intl.com" and "naveT23LMN#23"
    #     Then I should be redirected to the projects page

    Scenario Outline: Login with paratext and verify Logout
        Given I launch Scripture forge
        When I login with "<email>" and "<password>"
        Then I should be redirected to the projects page
        Then logout the applications

        Examples:
            | email                        | password |
            | naveen.n+qa@ecgroup-intl.com | test@123 |

    Scenario Outline: Login with email and password
        Given I launch Scripture forge
        When I login with "<email>" and "<password>"
        Then I should be redirected to the projects page

        Examples:
            | email                        | password |
            | naveen.n+qa@ecgroup-intl.com | test@123 |