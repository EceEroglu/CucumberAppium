package pages;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helper.AppiumHelper;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class Categories extends AppiumHelper {

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Yiyecek']")
	public AndroidElement foodCategory;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Süt & Kahvaltı']")
	public AndroidElement milkCategory;

	@AndroidFindBy(id = PREFIX + "ga_toolbar_getirLogoImageView")
	private MobileElement toolbarTitle;

	@AndroidFindBy(uiAutomator = ("new UiScrollable(new UiSelector()).scrollIntoView(text(\"Bebek\"));"))
	private MobileElement babyCategory;

	public Categories(AppiumDriver driver) {

		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	public void isCategoriesPageLoaded() {
		Assert.assertEquals(true, isVisible(toolbarTitle));
	}

	public void selectFoodCategory() {
		clickElement(foodCategory);
	}

	public void selectMilkCategory() {
		clickElement(milkCategory);
	}

	public void scrollSelectBabyCategory() {
		clickElement(babyCategory);
	}

}
