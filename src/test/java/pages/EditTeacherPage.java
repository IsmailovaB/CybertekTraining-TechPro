package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class EditTeacherPage {

    public EditTeacherPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//div[@class='col-lg-6 col-md-6 col-sm-6 col-12'])[2]//div[4]//input")
    public WebElement mobileNumInputBox;

    @FindBy(xpath = "(//div[@class='col-lg-6 col-md-6 col-sm-6 col-12'])[1]//div[2]//input")
    public WebElement emailAddressInputBox;


    @FindBy(xpath = "//textarea[@id='message']")
    public WebElement presentAddressInputBox;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement submitButton;


    @FindBy(xpath = "//h5[.='Edit Teacher']")
    public WebElement editTeacherPageHeader;



}
