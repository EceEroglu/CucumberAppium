$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:Features/AddProduct.feature");
formatter.feature({
  "name": "Add product scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate products in basket",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on login screen",
  "keyword": "Given "
});
formatter.step({
  "name": "I am logged in",
  "keyword": "And "
});
formatter.step({
  "name": "I click on food category",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on add icon for food product",
  "keyword": "Then "
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to milk category",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on add icon for milk product",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.step({
  "name": "I scroll down for baby category",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to baby category detail page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on add icon for baby product",
  "keyword": "And "
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.step({
  "name": "I delete my products",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "total amount"
      ]
    },
    {
      "cells": [
        "171"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate products in basket",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.given_i_am_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_am_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on food category",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_food_category()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:751)\r\n\tat org.testng.Assert.assertEquals(Assert.java:761)\r\n\tat pages.FoodCategory.isCategoryDetailPageLoaded(FoodCategory.java:33)\r\n\tat stepdefs.AddProductStepDef.ı_click_on_food_category(AddProductStepDef.java:40)\r\n\tat ✽.I click on food category(classpath:Features/AddProduct.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on add icon for food product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_food_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to milk category",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_milk_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for milk product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_milk_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll down for baby category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_scroll_down_for_baby_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to baby category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_baby_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for baby product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_baby_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_basket_icon_from_tool_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_verify_total_amount_of_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete my products",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_delete_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate add more products in basket",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "name": "I am on login screen",
  "keyword": "Given "
});
formatter.step({
  "name": "I am logged in",
  "keyword": "And "
});
formatter.step({
  "name": "I click on food category",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on add icon for food product",
  "keyword": "Then "
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to milk category",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on add icon for milk product",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.step({
  "name": "I scroll down for baby category",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to baby category detail page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on add icon for baby product",
  "keyword": "And "
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.step({
  "name": "I verify \"\u003ctotal amount\u003e\" of my products",
  "keyword": "Then "
});
formatter.step({
  "name": "I add one more food product",
  "keyword": "And "
});
formatter.step({
  "name": "I add one more milk product",
  "keyword": "And "
});
formatter.step({
  "name": "I add one more baby product",
  "keyword": "And "
});
formatter.step({
  "name": "I verify \"\u003cadded total amount\u003e\" of my products",
  "keyword": "Then "
});
formatter.step({
  "name": "I navigate to payment page",
  "keyword": "And "
});
formatter.step({
  "name": "I verify \"\u003cadded total amount\u003e\" of my products from payment page",
  "keyword": "Then "
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.step({
  "name": "I delete my products",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "added total amount"
      ]
    },
    {
      "cells": [
        "342"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate add more products in basket",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "name": "I am on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.given_i_am_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_am_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on food category",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_food_category()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:751)\r\n\tat org.testng.Assert.assertEquals(Assert.java:761)\r\n\tat pages.FoodCategory.isCategoryDetailPageLoaded(FoodCategory.java:33)\r\n\tat stepdefs.AddProductStepDef.ı_click_on_food_category(AddProductStepDef.java:40)\r\n\tat ✽.I click on food category(classpath:Features/AddProduct.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on add icon for food product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_food_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to milk category",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_milk_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for milk product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_milk_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll down for baby category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_scroll_down_for_baby_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to baby category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_baby_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for baby product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_baby_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_basket_icon_from_tool_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify \"\u003ctotal amount\u003e\" of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_of_my_products(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more food product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_add_one_more_food_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more milk product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_add_one_more_milk_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more baby product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_add_one_more_baby_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify \"342\" of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_of_my_products(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to payment page",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_payment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify \"342\" of my products from payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_verify_of_my_products_from_payment_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete my products",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_delete_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:Features/Login.feature");
formatter.feature({
  "name": "Login scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with invalid username",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Before"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I am on login screen",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get toast message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "ece@ece.com",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with invalid username",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Before"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I am on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.given_i_am_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"ece@ece.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.when_i_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.when_i_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.i_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get toast message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.i_should_get_toast_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login and Logout with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I am on login screen",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "I click on profile Icon",
  "keyword": "And "
});
formatter.step({
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "hello@getir.com",
        "hello"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login and Logout with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I am on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.given_i_am_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"hello@getir.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.when_i_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"hello\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.when_i_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.i_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on profile Icon",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.i_click_on_profile_Icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.i_click_on_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});