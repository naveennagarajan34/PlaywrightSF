# features/login.feature
Feature: Login to Scripture Forge

    # @High
    # Scenario: Valid login
    #     Given I launch Scripture Forge
    #     When I login with "naveen.n@ecgroup-intl.com" and "naveT23LMN#23"
    #     Then I should be redirected to the project dashboard

    @High
    Scenario: Login Verify and Logout
        Given I launch Scripture Forge
        When I login with "naveen.n@ecgroup-intl.com" and "naveT23LMN#23"
# Then I should be redirected to the projects page
# Then logout the application