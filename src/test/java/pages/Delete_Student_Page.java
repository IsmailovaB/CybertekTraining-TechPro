package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class Delete_Student_Page {
    public Delete_Student_Page() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//a[@class='avatar'])[2]")
    public WebElement sampleStudent;
    @FindBy(xpath = "(//div[@class='col-md-5']//span//a)[1]")
    public WebElement studentID;
    @FindBy(xpath = "//h3[@class='user-name m-t-0']")
    public WebElement studentName;
    @FindBy(xpath = "(//a[@class='action-icon dropdown-toggle'])[2]")
    public WebElement actionIcon;
    @FindBy(xpath = "(//a[@class='dropdown-item'])[12]")
    public WebElement deleteFunction;
    @FindBy(xpath = "//html//body//div//div//div//div//form//div//div//button")
    public WebElement deleteButton;
    @FindBy(xpath = "(//i[@class='fa fa-bars'])[2]")
    public WebElement tableStyle;

}
