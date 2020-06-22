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
  "keyword": "When "
});
formatter.step({
  "name": "I click on food category",
  "keyword": "And "
});
formatter.step({
  "name": "I click on add icon for food product",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to milk category",
  "keyword": "And "
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
  "name": "I scroll and select baby category",
  "keyword": "And "
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
  "keyword": "When "
});
formatter.match({
  "location": "AddProductStepDef.ı_am_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on food category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_food_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add icon for food product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_food_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to milk category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_milk_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add icon for milk product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_milk_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll and select baby category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_scroll_and_select_baby_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add icon for baby product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_baby_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_basket_icon_from_tool_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.ı_verify_total_amount_of_my_products()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:751)\r\n\tat org.testng.Assert.assertEquals(Assert.java:761)\r\n\tat pages.Basket.isBasketPageLoaded(Basket.java:53)\r\n\tat stepdefs.AddProductStepDef.ı_verify_total_amount_of_my_products(AddProductStepDef.java:99)\r\n\tat ✽.I verify total amount of my products(classpath:Features/AddProduct.feature:15)\r\n",
  "status": "failed"
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
  "keyword": "And "
});
formatter.step({
  "name": "I click on add icon for food product",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.step({
  "name": "I navigate to milk category",
  "keyword": "And "
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
  "name": "I scroll and select baby category",
  "keyword": "And "
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
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_food_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add icon for food product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_food_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to milk category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_milk_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add icon for milk product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_milk_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_navigate_to_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll and select baby category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_scroll_and_select_baby_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add icon for baby product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_add_icon_for_baby_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_click_on_basket_icon_from_tool_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"\u003ctotal amount\u003e\" of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_of_my_products(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add one more food product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_add_one_more_food_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add one more milk product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_add_one_more_milk_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add one more baby product",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.ı_add_one_more_baby_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"342\" of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_of_my_products(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.TextView[@text\u003d\u0027Total Amount : 171 ₺\u0027]})\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.getText(\u003cgenerated\u003e)\r\n\tat pages.Basket.verifyTotalAmount(Basket.java:74)\r\n\tat stepdefs.AddProductStepDef.i_verify_of_my_products(AddProductStepDef.java:114)\r\n\tat ✽.I verify \"342\" of my products(classpath:Features/AddProduct.feature:39)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@39ce27f2 (tried for 1 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.getText(\u003cgenerated\u003e)\r\n\tat pages.Basket.verifyTotalAmount(Basket.java:74)\r\n\tat stepdefs.AddProductStepDef.i_verify_of_my_products(AddProductStepDef.java:114)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.TextView[@text\u003d\u0027Total Amount : 171 ₺\u0027]})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C0IFO17\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 45 more\r\n",
  "status": "failed"
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