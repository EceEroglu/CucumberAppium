package stepdefs;

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

    protected Login login;
    protected Toolbar toolbar;
    protected Profile profile;
    protected Categories categories;
    protected FoodCategory foodCategory;
    protected MilkCategory milkCategory;
    protected BabyCategory babyCategory;
    protected Basket basket;
    protected Payment payment; 
    

    @BeforeSuite
    public void setUp() throws Exception {
        AppiumController.instance.start();
        switch (AppiumController.executionOS) {
            case ANDROID:
                login = new Login(driver());
                break;
        		
        }
        
        
    }

    @AfterSuite
    public void tearDown() throws Exception {
        AppiumController.instance.stop();
        
       
    }
    
   
}
