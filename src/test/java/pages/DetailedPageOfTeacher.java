package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DetailedPageOfTeacher {

    public DetailedPageOfTeacher(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//ul[@class='personal-info']//li//span[2]//a")
    public WebElement idNumber;
}
