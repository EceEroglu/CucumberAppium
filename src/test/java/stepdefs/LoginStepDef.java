package stepdefs;

import helper.AppiumController;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Login;
import pages.Profile;
import pages.Toolbar;



public class LoginStepDef extends BaseTestClass {
	

	@Given("^I am on login screen$")
	public void given_i_am_on_login_screen() throws Throwable {
		AppiumController.instance.start();
		switch (AppiumController.executionOS) {
		case ANDROID:
			loginPage = new Login(driver());
			loginPage.isLoginPageLoaded();
			break;
		}
	}

	@When("^I enter username as \"([^\"]*)\"$")
	 public void when_i_enter_username_as(String username) throws InterruptedException {
        loginPage.enterUserName(username);
    }

	@When("^I enter password as \"([^\"]*)\"$")
	public void when_i_enter_password_as(String password) throws Throwable {
		loginPage.enterPassword(password);
	}
	

	@When("^I click on submit button$")
	public void i_click_on_submit_button() {

		loginPage.clickLoginButton();

	}

	@Then("^I should get toast message$")
	public void i_should_get_toast_message() {

		loginPage.isToastMessageVisible();

	}

	@Then("^I click on profile Icon$")
	public void i_click_on_profile_Icon() {

		Toolbar toolbar = new Toolbar(driver());
		toolbar.clickProfileButton();

	}


	@Then("^I click on logout button$")
	public void i_click_on_logout_button() {

		Profile profile = new Profile(driver());
		profile.clickLogoutButton();

	}

	@Then("^I navigate to login page$")
	public void i_navigate_to_login_page() {

		loginPage.isLoginPageLoaded();

	}

}
