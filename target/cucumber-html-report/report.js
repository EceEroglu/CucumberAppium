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
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:751)\r\n\tat org.testng.Assert.assertEquals(Assert.java:761)\r\n\tat pages.FoodCategory.isCategoryDetailPageLoaded(FoodCategory.java:34)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:53)\r\n\tat ✽.I click on add icon for food product title \"Ürün 25\" and price of \"25\"(classpath:Features/AddProduct.feature:8)\r\n",
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: androidx.test.uiautomator.StaleObjectException\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C0IFO17\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\eceer\\Desktop\\Appi..., appActivity: com.getir.casestudy.modules..., appPackage: com.getir.casestudy.dev, databaseEnabled: false, desired: {app: C:\\Users\\eceer\\Desktop\\Appi..., appActivity: com.getir.casestudy.modules..., appPackage: com.getir.casestudy.dev, deviceName: EmulatorEce, platformName: android, resetKeyboard: true, unicodeKeyboard: true}, deviceApiLevel: 28, deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 9, resetKeyboard: true, statBarHeight: 63, takesScreenshot: true, unicodeKeyboard: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: ebcfeaa0-7a9e-4f15-b1af-4378afe8326a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat sun.reflect.GeneratedMethodAccessor10.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.appium.java_client.pagefactory.ElementInterceptor.getObject(ElementInterceptor.java:40)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:52)\r\n\tat ✽.I click on add icon for food product title \"Ürün 49\" and price of \"49\"(classpath:Features/AddProduct.feature:8)\r\n",
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element \u0027By.xpath: //android.widget.ImageView[@clickable\u003d\u0027true\u0027]\u0027 does not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C0IFO17\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\eceer\\Desktop\\Appi..., appActivity: com.getir.casestudy.modules..., appPackage: com.getir.casestudy.dev, databaseEnabled: false, desired: {app: C:\\Users\\eceer\\Desktop\\Appi..., appActivity: com.getir.casestudy.modules..., appPackage: com.getir.casestudy.dev, deviceName: EmulatorEce, platformName: android, resetKeyboard: true, unicodeKeyboard: true}, deviceApiLevel: 28, deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 9, resetKeyboard: true, statBarHeight: 63, takesScreenshot: true, unicodeKeyboard: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: c53386b6-0906-4d0b-9364-50e2a26bed51\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat sun.reflect.GeneratedMethodAccessor10.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.appium.java_client.pagefactory.ElementInterceptor.getObject(ElementInterceptor.java:40)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:52)\r\n\tat ✽.I click on add icon for food product title \"Ürün 97\" and price of \"97\"(classpath:Features/AddProduct.feature:8)\r\n",
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
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:751)\r\n\tat org.testng.Assert.assertEquals(Assert.java:761)\r\n\tat pages.FoodCategory.isCategoryDetailPageLoaded(FoodCategory.java:34)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:53)\r\n\tat ✽.I click on add icon for food product title \"Ürün 25\" and price of \"25\"(classpath:Features/AddProduct.feature:30)\r\n",
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
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: androidx.test.uiautomator.StaleObjectException\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C0IFO17\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\eceer\\Desktop\\Appi..., appActivity: com.getir.casestudy.modules..., appPackage: com.getir.casestudy.dev, databaseEnabled: false, desired: {app: C:\\Users\\eceer\\Desktop\\Appi..., appActivity: com.getir.casestudy.modules..., appPackage: com.getir.casestudy.dev, deviceName: EmulatorEce, platformName: android, resetKeyboard: true, unicodeKeyboard: true}, deviceApiLevel: 28, deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 9, resetKeyboard: true, statBarHeight: 63, takesScreenshot: true, unicodeKeyboard: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 0535611b-2dad-4279-a126-49fa6d53a10b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat sun.reflect.GeneratedMethodAccessor10.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.appium.java_client.pagefactory.ElementInterceptor.getObject(ElementInterceptor.java:40)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat helper.AppiumHelper.waitUntilElementVisible(AppiumHelper.java:60)\r\n\tat helper.AppiumHelper.clickElement(AppiumHelper.java:16)\r\n\tat pages.FoodCategory.addProduct(FoodCategory.java:44)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:52)\r\n\tat ✽.I click on add icon for food product title \"Ürün 49\" and price of \"49\"(classpath:Features/AddProduct.feature:30)\r\n",
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
  "name": "I add one more food product title \"Ürün 49\" and price of \"49\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_add_one_more_food_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more milk product title \"Ürün 49\" and price of \"49\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_add_one_more_milk_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more baby product title \"Ürün 49\" and price of \"49\"",
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
formatter.embedding("image/png", "embedded4.png", null);
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
  "name": "I click on add icon for food product title \"Ürün 97\" and price of \"97\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:751)\r\n\tat org.testng.Assert.assertEquals(Assert.java:761)\r\n\tat pages.FoodCategory.isCategoryDetailPageLoaded(FoodCategory.java:34)\r\n\tat stepdefs.AddProductStepDef.i_click_on_add_icon_for_food_product_title_and_price_of(AddProductStepDef.java:53)\r\n\tat ✽.I click on add icon for food product title \"Ürün 97\" and price of \"97\"(classpath:Features/AddProduct.feature:30)\r\n",
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
  "name": "I add one more food product title \"Ürün 97\" and price of \"97\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_add_one_more_food_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more milk product title \"Ürün 97\" and price of \"97\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddProductStepDef.i_add_one_more_milk_product_title_and_price_of(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add one more baby product title \"Ürün 97\" and price of \"97\"",
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
formatter.embedding("image/png", "embedded5.png", null);
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