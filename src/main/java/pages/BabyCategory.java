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
	
	@AndroidFindBy(xpath = "//android.widget.ImageView[@id='com.getir.casestudy.dev:id/btnAdd'[1]")
	private AndroidElement addBabyIcon;

	@AndroidFindBy(id = PREFIX + "a_toolbar_getir10TitleTextView")
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

		clickElement(addBabyIcon);
	}




}

