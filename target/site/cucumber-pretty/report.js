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
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Located by By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]}) (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:58)\r\n\tat ✽.I click on add icon for food product title \"Ürün 25\" and price of \"25\"(classpath:features/AddProduct.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]})\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@5f4d427e (tried for 1 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\r\n\t... 49 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C0IFO17\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 51 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to milk category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_milk_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for milk product title \"Ürün 25\" and price of \"25\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_milk_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll down for baby category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_scroll_down_for_baby_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to baby category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_baby_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for baby product title \"Ürün 25\" and price of \"25\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_baby_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_basket_icon_from_tool_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_total_amount_of_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete my products",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_delete_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
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
  "name": "I click on add icon for food product title \"Ürün 49\" and price of \"49\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Located by By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]}) (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:58)\r\n\tat ✽.I click on add icon for food product title \"Ürün 49\" and price of \"49\"(classpath:features/AddProduct.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]})\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@5baaae4c (tried for 1 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\r\n\t... 49 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C0IFO17\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 51 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to milk category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_milk_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for milk product title \"Ürün 49\" and price of \"49\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_milk_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll down for baby category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_scroll_down_for_baby_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to baby category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_baby_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for baby product title \"Ürün 49\" and price of \"49\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_baby_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_basket_icon_from_tool_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_total_amount_of_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete my products",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_delete_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
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
  "name": "I click on add icon for food product title \"Ürün 97\" and price of \"97\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Located by By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]}) (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:58)\r\n\tat ✽.I click on add icon for food product title \"Ürün 97\" and price of \"97\"(classpath:features/AddProduct.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]})\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@724c5cbe (tried for 1 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\r\n\t... 49 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C0IFO17\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 51 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to milk category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_milk_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for milk product title \"Ürün 97\" and price of \"97\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_milk_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll down for baby category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_scroll_down_for_baby_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to baby category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_baby_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for baby product title \"Ürün 97\" and price of \"97\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_baby_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_basket_icon_from_tool_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_total_amount_of_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete my products",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_delete_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate add more products in basket",
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
  "name": "I add one more food product title \"\u003ctitle\u003e\" and price of \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I add one more milk product title \"\u003ctitle\u003e\" and price of \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I add one more baby product title \"\u003ctitle\u003e\" and price of \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.step({
  "name": "I navigate to payment page",
  "keyword": "And "
});
formatter.step({
  "name": "I verify total amount of my products from payment page",
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
  "name": "Validate add more products in basket",
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
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Located by By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]}) (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:58)\r\n\tat ✽.I click on add icon for food product title \"Ürün 25\" and price of \"25\"(classpath:features/AddProduct.feature:29)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]})\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:58)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@4760f169 (tried for 1 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\r\n\t... 49 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.ImageView[@id\u003d\u0027com.getir.casestudy.dev:id/btnAdd\u0027[1]})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C0IFO17\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 51 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to milk category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_milk_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for milk product title \"Ürün 25\" and price of \"25\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_milk_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll down for baby category",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_scroll_down_for_baby_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to baby category detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_baby_category_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add icon for baby product title \"Ürün 25\" and price of \"25\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_baby_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on basket icon from tool menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_basket_icon_from_tool_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_total_amount_of_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more food product title \"Ürün 25\" and price of \"25\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_add_one_more_food_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more milk product title \"Ürün 25\" and price of \"25\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_add_one_more_milk_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more baby product title \"Ürün 25\" and price of \"25\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_add_one_more_baby_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify total amount of my products",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_total_amount_of_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to payment page",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_payment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify total amount of my products from payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_verify_total_amount_of_my_products_from_payment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I navigate to back",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_navigate_to_back()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete my products",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_delete_my_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate add more products in basket",
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
  "name": "I click on add icon for food product title \"Ürün 49\" and price of \"49\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(String,String)"
});
