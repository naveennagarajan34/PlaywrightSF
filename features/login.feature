# features/login.feature
Feature: Login to Scripture Forge

    Scenario: Valid login
        Given I launch Scripture Forge
        When I login with "naveen.n@ecgroup-intl.com" and "naveT23LMN#23"
        Then I should be redirected to the project dashboard
    Scenario: Logout
        Given I launch Scripture Forge
        When I login with "naveen.n@ecgroup-intl.com" and "naveT23LMN#23"
        Then I should be redirected to the project dashboard
        Then logout the application