package test.tests;

import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

import helper.AppiumBaseClass;
import helper.AppiumController;
import pages.BabyCategory;
import pages.Basket;
import pages.Categories;
import pages.FoodCategory;
import pages.Login;
import pages.Payment;
import pages.Profile;
import pages.Toolbar;
import pages.MilkCategory;


public class BaseTestClass extends AppiumBaseClass {

    protected Login loginPage;
    protected Toolbar toolbarPage;
    protected Profile profilePage;
    protected Categories categoriesPage;
    protected FoodCategory foodCategoryPage;
    protected MilkCategory milkCategoryPage;
    protected BabyCategory babyCategoryPage;
    protected Basket basketPage;
    protected Payment paymentPage; 
    

    @BeforeSuite
    public void setUp() throws Exception {
        AppiumController.instance.start();
        switch (AppiumController.executionOS) {
            case ANDROID:
                loginPage = new Login(driver());
                break;

        }
    }

    @AfterSuite
    public void tearDown() {
        AppiumController.instance.stop();
    }
}
