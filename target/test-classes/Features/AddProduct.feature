Feature: Add product scenarios

 
  Scenario Outline: Validate products in basket
    Given I am on login screen
    And I am logged in
    Then I click on food category
    Then I click on add icon for food product title "<title>" and price of "<price>"
    And I navigate to back
    Then I navigate to milk category detail page
    And I click on add icon for milk product title "<title>" and price of "<price>"
    And I navigate to back
    And I scroll down for baby category
    Then I navigate to baby category detail page
    And I click on add icon for baby product title "<title>" and price of "<price>"
    And I click on basket icon from tool menu
    Then I verify total amount of my products
    And I delete my products

    Examples: 
      | title   | price |
      | Ürün 25 |    25 |
      | Ürün 49 |    49 |
      | Ürün 97 |    97 |

  Scenario Outline: Validate add more products in basket
    Given I am on login screen
    And I am logged in
    Then I click on food category
    Then I click on add icon for food product title "<title>" and price of "<price>"
    And I navigate to back
    Then I navigate to milk category detail page
    And I click on add icon for milk product title "<title>" and price of "<price>"
    And I navigate to back
    And I scroll down for baby category
    Then I navigate to baby category detail page
    And I click on add icon for baby product title "<title>" and price of "<price>"
    And I click on basket icon from tool menu
    Then I verify total amount of my products
    And I add one more food product title "<title>" and price of "<price>"
    And I add one more milk product title "<title>" and price of "<price>"
    And I add one more baby product title "<title>" and price of "<price>"
    Then I verify total amount of my products
    And I navigate to payment page
    Then I verify total amount of my products from payment page
    And I navigate to back
    And I delete my products

    Examples: 
      | title   | price |
      | Ürün 25 |    25 |
      | Ürün 49 |    49 |
      | Ürün 97 |    97 |
