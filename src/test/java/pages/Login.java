package pages;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helper.AppiumHelper;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;


public class Login extends AppiumHelper {

	@AndroidFindBy(id = PREFIX + "usernameEditText")
	private MobileElement userNameTextBox;

	@AndroidFindBy(id = PREFIX + "passwordEditText")
	private MobileElement passwordTextBox;

	@AndroidFindBy(id = PREFIX + "loginButton")
	private MobileElement loginButton;

	@AndroidFindBy(xpath = "//android.widget.toast[1]")
	private MobileElement toastMessage;

	public Login(AppiumDriver driver) {

		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}


	public void isLoginPageLoaded() {
		Assert.assertEquals(true, isVisible(userNameTextBox));
		Assert.assertEquals(true, isVisible(passwordTextBox));
		Assert.assertEquals(true, isVisible(loginButton));
	}

	public void enterUserName(String username) {
		fillInTheFieldWith(userNameTextBox, username);
	}

	public void enterPassword(String password) {
		fillInTheFieldWith(passwordTextBox, password);
	}

	public void clickLoginButton() {
		clickElement(loginButton);
	}
		
	public void isToastMessageVisible() {
		Assert.assertFalse(isVisible(toastMessage));
	}
}

