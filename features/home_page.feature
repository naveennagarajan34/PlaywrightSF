Feature: Home page footer link navigations

    @home
    Scenario: Help footer link
        Given I launch Scripture forge
        When click on help in the footer
        Then verify the user is redirected to help page

    @home
    Scenario: Learn more footer link
        Given I launch Scripture forge
        When click on learn more in the footer
        Then verify the user is redirected to learn more page