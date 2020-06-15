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

	@AndroidFindBy(xpath = "//android.widget.ImageView[@clickable='true']")
	private AndroidElement addProductIcon;


	@AndroidFindBy(id = PREFIX + "a_toolbar_getir10TitleTextView")
	private AndroidElement categoryDetailTitle;

	@AndroidFindBy(id = PREFIX + "ga_toolbar_leftIconImageView")
	private AndroidElement navigateBackIcon;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Ürün 49']")
	private AndroidElement milkProduct;

	public MilkCategory(AppiumDriver driver) {

		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	public void isCategoryDetailPageLoaded() {
		Assert.assertEquals(true, isVisible(categoryDetailTitle));
	}

	public void isFoodProductVisible(MobileElement milkProduct) {

		milkProduct.isDisplayed();
	}

	public void addProduct() {

		clickElement(addProductIcon);
	}

}

