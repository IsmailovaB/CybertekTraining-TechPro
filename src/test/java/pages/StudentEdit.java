package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class StudentEdit {
    public StudentEdit(){
        PageFactory.initElements(Driver.getDriver(),this);
    }


    @FindBy (xpath = "//*[.='Firstname']/..//input")
    public WebElement studentFirstName;

    @FindBy (xpath = "//*[.='Lastname']/..//input")
    public WebElement studentLastName;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[4]//input")
    public WebElement studentSubjectField;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement submitStudent;
}
