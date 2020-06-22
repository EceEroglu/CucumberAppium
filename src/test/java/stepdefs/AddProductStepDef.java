package stepdefs;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.BabyCategory;
import pages.Basket;
import pages.Categories;
import pages.FoodCategory;
import pages.Login;
import pages.MilkCategory;
import pages.Payment;
import pages.Toolbar;

public class AddProductStepDef extends BaseTestClass {

    Categories categories = new Categories(driver());
    Login login = new Login(driver());
    FoodCategory foodCategory = new FoodCategory(driver());
    MilkCategory milkCategory = new MilkCategory(driver());
    BabyCategory babyCategory = new BabyCategory(driver());
    Toolbar toolbar = new Toolbar(driver());
    Basket basket = new Basket(driver());
    Payment payment = new Payment(driver());

    @When("^I am logged in$")
    public void ı_am_logged_in() {

        login.enterUserName("hello@getir.com");
        login.enterPassword("hello");
        login.clickLoginButton();

        categories.isCategoriesPageLoaded();

    }

    @And("^I click on food category$")
    public void ı_click_on_food_category() {

        categories.selectFoodCategory();
        foodCategory.isCategoryDetailPageLoaded();

    }

    @And("^I click on add icon for food product$")
    public void ı_click_on_add_icon_for_food_product() {

        foodCategory.addProduct();

    }

    @And("^I navigate to back$")
    public void ı_navigate_to_back() {

        foodCategory.navigateBack();
        categories.isCategoriesPageLoaded();

    }

    @And("^I navigate to milk category$")
    public void ı_navigate_to_milk_category() {

        categories.isCategoriesPageLoaded();


    }

    @And("^I click on add icon for milk product$")
    public void ı_click_on_add_icon_for_milk_product() {

        milkCategory.addProduct();

    }

    @And("^I scroll down for baby category$")
    public void ı_scroll_down_for_baby_category() {

        categories.scrollSelectBabyCategory();

    }

    @And("^I navigate to baby category detail page$")
    public void ı_navigate_to_baby_category_detail_page() {

        babyCategory.isCategoryDetailPageLoaded();

    }

    @And("^I click on add icon for baby product$")
    public void ı_click_on_add_icon_for_baby_product() {

        babyCategory.addProduct();

    }

    @And("^I click on basket icon from tool menu$")
    public void ı_click_on_basket_icon_from_tool_menu() {

        toolbar.clickBasketIcon();

    }

    @Then("^I verify total amount of my products$")
    public void ı_verify_total_amount_of_my_products() {

        basket.isBasketPageLoaded();
        basket.verifyTotalAmount();

    }

    @And("^I delete my products$")
    public void ı_delete_my_products() {

        basket.deleteProduct();

    }

    @Then("^I verify \"([^\"]*)\" of my products$")
    public void i_verify_of_my_products(String string) {

    }

    @And("^I add one more food product$")
    public void ı_add_one_more_food_product() {

    }

    @And("^I add one more milk product$")
    public void ı_add_one_more_milk_product() {

    }

    @And("^I add one more baby product$")
    public void ı_add_one_more_baby_product() {

    }

    @And("^I navigate to payment page$")
    public void ı_navigate_to_payment_page() {

        basket.navigateBack();
        payment.isPaymentPageLoaded();

    }

    @Then("^I verify \"([^\"]*)\" of my products from payment page$")
    public void ı_verify_of_my_products_from_payment_page(String string) {

    }

}
