Feature: Add product scenarios

  Scenario Outline: Validate products in basket
    Given I am on login screen
    And I am logged in
    Then I click on food category
    Then I click on add icon for food product
    And I navigate to back
    Then I navigate to milk category
    And I click on add icon for milk product
    And I navigate to back
    And I scroll down for baby category
    Then I navigate to baby category detail page
    And I click on add icon for baby product
    And I click on basket icon from tool menu
    Then I verify total amount of my products
    And I delete my products

    Examples: 
      | total amount |
      |          171 |

  @E2E
  Scenario Outline: Validate add more products in basket
    Given I am on login screen
    And I am logged in
    Then I click on food category
    Then I click on add icon for food product
    And I navigate to back
    Then I navigate to milk category
    And I click on add icon for milk product
    And I navigate to back
    And I scroll down for baby category
    Then I navigate to baby category detail page
    And I click on add icon for baby product
    And I click on basket icon from tool menu
    Then I verify "<total amount>" of my products
    And I add one more food product
    And I add one more milk product
    And I add one more baby product
    Then I verify "<added total amount>" of my products
    And I navigate to payment page
    Then I verify "<added total amount>" of my products from payment page
    And I navigate to back
    And I delete my products

    Examples: 
      | added total amount |
      |                342 |
