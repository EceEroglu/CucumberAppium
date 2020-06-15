package pages;


import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helper.AppiumHelper;

public class Toolbar extends AppiumHelper {

    @AndroidFindBy(id = PREFIX + "ga_toolbar_leftIconImageView")
    private MobileElement profileButton;

    @AndroidFindBy(id = PREFIX + "ga_toolbar_getir10TitleTextView")
    private MobileElement getirText;

    @AndroidFindBy(id = PREFIX + "ga_toolbar_getir10GABasketButton")
    private MobileElement getirBasketButton;


    public Toolbar(AppiumDriver driver) {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    public void isToolbarPageLoaded() {
        Assert.assertEquals(true, isVisible(profileButton));
        Assert.assertEquals(true, isVisible(getirText));
        Assert.assertEquals(true, isVisible(getirBasketButton));
    }

    public void clickProfileButton() {
        clickElement(profileButton);
    }
    
    public void clickBasketIcon() {
        clickElement(getirBasketButton);
    }
}
