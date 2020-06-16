package pages;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helper.AppiumHelper;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class Basket extends AppiumHelper  {

	@AndroidFindBy(id = PREFIX + "tvTotalTitle")
	private AndroidElement totalAmountText;

	@AndroidFindBy(id = PREFIX + "ga_toolbar_getir10TitleTextView")
	private AndroidElement basketScreenTitle;

	@AndroidFindBy(id = PREFIX + "ga_toolbar_leftIconImageView")
	private AndroidElement goBackButton;

	@AndroidFindBy(xpath = "//android.widget.ImageView[@clickable='true']")
	private AndroidElement addProductIcon;

	@AndroidFindBy(xpath = "//android.widget.ImageView[@id='com.getir.casestudy.dev:id/btnRemove']")
	private AndroidElement deleteProductIcon;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Ürün 25']")
	private AndroidElement foodProduct;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Ürün 49']")
	private AndroidElement milkProduct;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Ürün 97']")
	private AndroidElement babyProduct;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Total Amount : 171 ₺']")
	private AndroidElement totalAmount;

	@AndroidFindBy(xpath = "//android.widget.Button[@text='PAYMENT']")
	private AndroidElement paymentButton;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Total Amount : 342 ₺']")
	private AndroidElement addedTotalAmount;

	public Basket(AppiumDriver driver) {

		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	public void isBasketPageLoaded() {
		Assert.assertEquals(true, isVisible(basketScreenTitle));
	}

	public void addMoreProduct() {
		clickElement(addProductIcon);
	}

	public void navigateBack() {
		clickElement(goBackButton);
	}

	public void goToPayment() {
	clickElement(paymentButton);
	}

	public void deleteProduct() {
		clickElement(deleteProductIcon);
	}
	
	public void verifyTotalAmount() {
		
		String actualText = totalAmount.getText();
		String expectedText = "Total Amount : 171 ₺";
		
		Assert.assertEquals(actualText,expectedText);
		
	}
	
	public void verifyAddedTotalAmount() {
		
		String actualText = addedTotalAmount.getText();
		String expectedText = "Total Amount : 342 ₺";
		
		Assert.assertEquals(actualText,expectedText);
		
	}

}
