package pages;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helper.AppiumHelper;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;


public class MilkCategory extends AppiumHelper  {

	@AndroidFindBy(id = PREFIX + "btnAdd")
	private AndroidElement addProductIcon;

	@AndroidFindBy(id = PREFIX + "ga_toolbar_getir10TitleTextView")
	private AndroidElement categoryDetailTitle;

	@AndroidFindBy(id = PREFIX + "ga_toolbar_leftIconImageView")
	private AndroidElement navigateBackIcon;

	@AndroidFindBy(id = PREFIX  + "cardChildView")
	private AndroidElement milkProduct;

	public MilkCategory(AppiumDriver driver) {

		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	public void isCategoryDetailPageLoaded() {
		Assert.assertEquals(true, isVisible(categoryDetailTitle));
	}

	public void isMilkProductVisible() {

		milkProduct.isDisplayed();
	}

	public void addProduct() {

		clickElement(addProductIcon);
	}

}

