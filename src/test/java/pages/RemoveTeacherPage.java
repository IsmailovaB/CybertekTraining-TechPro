package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class RemoveTeacherPage {


    public RemoveTeacherPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }
    @FindBy(xpath = "(//div[@class='profile-img']//a)[1]")
    public WebElement teacher;

    @FindBy(xpath = "(//ul[@class='personal-info']//li//span)[2]")
    public WebElement teacherID;

    @FindBy(xpath = "(//div[@class='dropdown profile-action'])[1]")
    public WebElement threeDotsInTeacher;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement popUpDeleteButton;
    @FindBy(xpath = "//div[@class='dropdown-menu dropdown-menu-right show']//a[2]")
    public WebElement deleteButton;

    @FindBy(xpath = "//div[@class='modal-body card-box']//p")
    public WebElement verificationOfDelete;


}
