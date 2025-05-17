Feature: Login functionality on Advantage Online Shopping

  Scenario: User tries to login with valid credentials
    Given I open the Advantage Online Shopping website
    When I open the login page
    And I enter the username "ppppp"
    And I enter the password "Youssof1234"
    And I click the login button
    Then I should remain on the login page


  Scenario: User tries to login with invalid username and valid password
    Given I open the Advantage Online Shopping website
    When I open the login page
    And I enter the username "pppppa"
    And I enter the password "Youssof123"
    And I click the login button
    Then I should remain on the login page

