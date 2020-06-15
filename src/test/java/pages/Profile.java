package pages;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helper.AppiumHelper;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;


public class Profile extends AppiumHelper  {

    @AndroidFindBy(xpath = "//android.widget.TextView[@text='My Address']")
    private MobileElement myAddressButton;

    @AndroidFindBy(xpath = "//android.widget.TextView[@text='Log out']")
    private MobileElement logoutButton;

    public Profile(AppiumDriver driver) {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    public void isProfilePageLoaded() {
        Assert.assertEquals(true, isVisible(myAddressButton));
        Assert.assertEquals(true, isVisible(logoutButton));

    }

    public void clickLogoutButton() {
        clickElement(logoutButton);
    }
}

