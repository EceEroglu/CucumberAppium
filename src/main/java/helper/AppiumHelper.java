package helper;

import io.appium.java_client.MobileElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class AppiumHelper {

    public static final String PREFIX = "com.getir.casestudy.dev:id/";

    WebDriverWait wait = new WebDriverWait(AppiumController.instance.driver, 30);

    public void clickElement(MobileElement mobileElement) {
        mobileElement = waitUntilElementVisible(mobileElement);
        mobileElement.click();
    }

    protected Object isChecked(List<MobileElement> mobileElementList, MobileElement mobileElement) {
        Object flag = false;
        for (MobileElement aMobileElementList : mobileElementList) {
            if (aMobileElementList.getText().equalsIgnoreCase(mobileElement.getText())) {
                flag = Boolean.valueOf(aMobileElementList.getAttribute("checked"));
                break;
            }
        }
        return flag;
    }

    protected void selectElement(List<MobileElement> mobileElementList, String options) {
        for (MobileElement aMobileElementList : mobileElementList) {
            if (aMobileElementList.getText().equalsIgnoreCase(options)) {
                aMobileElementList.click();
                break;
            }
        }
    }

    protected boolean isVisibleListItem(List<MobileElement> mobileElementList) {
        boolean status = false;
        for (MobileElement aMobileElementList : mobileElementList) {
            status = isVisible(aMobileElementList);
        }
        return status;
    }

    protected boolean isVisible(MobileElement mobileElement) {
        boolean status = false;
        try {
            waitUntilElementVisible(mobileElement);
            status = true;
        } catch (Exception ignored) {

        }
        return status;
    }

    protected MobileElement waitUntilElementVisible(MobileElement mobileElement) {
        return (MobileElement) wait.until(ExpectedConditions.visibilityOf(mobileElement));
    }

    protected void fillInTheFieldWith(MobileElement mobileElement, String stringToBeEntered) {
        mobileElement = waitUntilElementVisible(mobileElement);
        mobileElement.sendKeys(stringToBeEntered);
    }
}
