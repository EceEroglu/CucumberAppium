Feature: Login scenarios

  @Before
  Scenario Outline: Login with invalid username
    Given I am on login screen
    When I enter username as "<username>"
    When I enter password as "<password>"
    And I click on submit button
    Then I should get toast message

    Examples: 
      | username    | password |
      | ece@ece.com |    12345 |


  Scenario Outline: Login and Logout with valid credentials
    Given I am on login screen
    When I enter username as "<username>"
    When I enter password as "<password>"
    And I click on submit button
    And I click on profile Icon
    And I click on logout button
    Then I navigate to login page

    Examples: 
      | username        | password |
      | hello@getir.com | hello    |
