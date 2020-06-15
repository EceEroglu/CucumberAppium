$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/AddProduct.feature");
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
  "name": "I click on add icon for food product title \"\u003ctitle\u003e\" and price of \"\u003cprice\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to milk category detail page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on add icon for milk product title \"\u003ctitle\u003e\" and price of \"\u003cprice\u003e\"",
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
  "name": "I click on add icon for baby product title \"\u003ctitle\u003e\" and price of \"\u003cprice\u003e\"",
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
        "title",
        "price"
      ]
    },
    {
      "cells": [
        "Ürün 25",
        "25"
      ]
    },
    {
      "cells": [
        "Ürün 49",
        "49"
      ]
    },
    {
      "cells": [
        "Ürün 97",
        "97"
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
  "location": "AddProductStepDef.i_am_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on food category",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_food_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add icon for food product title \"Ürün 25\" and price of \"25\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(String,String)"
});
