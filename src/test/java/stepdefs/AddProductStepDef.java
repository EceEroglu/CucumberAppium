package stepdefs;


import helper.AppiumController;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
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
	FoodCategory foodCategory = new FoodCategory(driver());
	MilkCategory milkCategory = new MilkCategory(driver());
	BabyCategory babyCategory = new BabyCategory(driver());
	Toolbar toolbar = new Toolbar(driver());
	Basket basket = new Basket(driver());
	Payment payment = new Payment(driver());

	@And("^I am logged in$")
	public void i_am_logged_in() throws Exception {

		AppiumController.instance.start();
		switch (AppiumController.executionOS) {
		case ANDROID:

			loginPage = new Login(driver());
			loginPage.isLoginPageLoaded();

			loginPage.login("hello@getir.com", "hello");

		}

	}

	@Then("^I click on food category$")
	public void i_click_on_food_category() {

		categories.selectFoodCategory();

	}

	@Then("^I click on add icon for food product title \"([^\"]*)\" and price of \"([^\"]*)\"$")
	public void i_click_on_add_icon_for_food_product_title_and_price_of(String title, String price) {

		foodCategory.addProduct();
		foodCategory.isCategoryDetailPageLoaded();

	}

	@Then("^I navigate to back$")
	public void i_navigate_to_back() {

		foodCategory.navigateBack();

	}

	@Then("^I navigate to milk category detail page$")
	public void i_navigate_to_milk_category_detail_page() {

		milkCategory.isCategoryDetailPageLoaded();

	}

	@Then("^I click on add icon for milk product title \"([^\"]*)\" and price of \"([^\"]*)\"$")
	public void i_click_on_add_icon_for_milk_product_title_and_price_of(String title, String price) {

		milkCategory.addProduct();

	}

	@Then("^I scroll down for baby category$")
	public void i_scroll_down_for_baby_category() {

		categories.scrollSelectBabyCategory();

	}

	@Then("^I navigate to baby category detail page$")
	public void i_navigate_to_baby_category_detail_page() {

		babyCategory.isCategoryDetailPageLoaded();

	}

	@Then("^I click on add icon for baby product title \"([^\"]*)\" and price of \"([^\"]*)\"$")
	public void i_click_on_add_icon_for_baby_product_title_and_price_of(String title, String price) {

		babyCategory.addProduct();
	}

	@Then("^I click on basket icon from tool menu$")
	public void i_click_on_basket_icon_from_tool_menu() {

		toolbar.clickBasketIcon();

	}

	@Then("^I verify total amount of my products$")
	public void i_verify_total_amount_of_my_products() {

		basket.isBasketPageLoaded();
		basket.verifyTotalAmount();

	}

	@Then("^I delete my products$")
	public void i_delete_my_products() {

		basket.deleteProduct();

	}

	@Then("^I add one more food product title \"([^\"]*)\" and price of \"([^\"]*)\"$")
	public void i_add_one_more_food_product_title_and_price_of(String title, String price) {

		basket.addMoreProduct();

	}

	@Then("^I add one more milk product title \"([^\"]*)\" and price of \"([^\"]*)\"$")
	public void i_add_one_more_milk_product_title_and_price_of(String title, String price) {

		basket.addMoreProduct();

	}

	@Then("^I add one more baby product title \"([^\"]*)\" and price of \"([^\"]*)\"$")
	public void i_add_one_more_baby_product_title_and_price_of(String title, String price) {

		basket.addMoreProduct();

	}

	@Then("^I navigate to payment page$")
	public void i_navigate_to_payment_page() {

		basket.goToPayment();
		payment.isPaymentPageLoaded();
	}

	@Then("^I verify total amount of my products from payment page$")
	public void i_verify_total_amount_of_my_products_from_payment_page() {

		payment.verifyTotalAmount();

	}

}
