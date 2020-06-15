package pages;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helper.AppiumHelper;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class Payment extends AppiumHelper  {


	@AndroidFindBy(id = PREFIX + "ga_toolbar_leftIconImageView")
	private AndroidElement navigateBackIcon;

	@AndroidFindBy(id = PREFIX + "tvAmount")
	private AndroidElement amount;
	
	@AndroidFindBy(id =  PREFIX + "ga_toolbar_getir10TitleTextView")
	private AndroidElement pageTitle;

	
	public Payment(AppiumDriver driver) {

		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
 
	public void isPaymentPageLoaded() {
		Assert.assertEquals(true, isVisible(pageTitle));
	}

	public void isFoodProductVisible(MobileElement amount) {

		amount.isDisplayed();
	}

	public void navigateBack() {
		
		clickElement(navigateBackIcon);
	}
	
	public void verifyTotalAmount() {
		
		String actualText = amount.getText();
		String expectedText = "342 ₺";
		
		Assert.assertEquals(actualText,expectedText);
		
	}

}




