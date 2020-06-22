package pages;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helper.AppiumHelper;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class BabyCategory extends AppiumHelper {
	
	@AndroidFindBy(id = PREFIX + "btnAdd")
	private AndroidElement addProductIcon;

	@AndroidFindBy(id = PREFIX + "ga_toolbar_getir10TitleTextView")
	private AndroidElement categoryDetailTitle;

	@AndroidFindBy(id = PREFIX + "ga_toolbar_leftIconImageView")
	private AndroidElement navigateBackIcon;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Ürün 97']")
	private AndroidElement babyProduct;

	public BabyCategory(AppiumDriver driver) {

		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	public void isCategoryDetailPageLoaded() {
		Assert.assertEquals(true, isVisible(categoryDetailTitle));
	}

	public void isBabyProductVisible(MobileElement babyProduct) {

		babyProduct.isDisplayed();
	}

	public void addProduct() {

		clickElement(addProductIcon);
	}




}

