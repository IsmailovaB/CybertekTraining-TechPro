package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class AddStudentPage {

    public AddStudentPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//div[@class='col-lg-7 col-md-12 col-sm-12 col-12']/h5")
    public WebElement addStudentTextDisplay;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[1]")
    public WebElement firstNameInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[2]")
    public WebElement emailInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[3]")
    public WebElement subjectInput;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group']/select)[1]")
    public WebElement selectGender;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[4]")
    public WebElement birthDate;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group']/select)[2]")
    public WebElement selectBatch;

    @FindBy(xpath = "//textarea[@id='message']")
    public WebElement permanentAddress;

    @FindBy(xpath = "(//input[@type='number'])[1]")
    public WebElement mobileNumInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[5]")
    public WebElement lastNameInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[6]")
    public WebElement joinDateInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[8]")
    public WebElement majorInput;


    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[10]")
    public WebElement companyNameInput;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group']/input)[14]")
    public WebElement startDateInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[12]")
    public WebElement streetInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[13]")
    public WebElement stateInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[14]")
    public WebElement titleInput;

    @FindBy(xpath = "(//div[@id='app']//input[@type='text'])[15]")
    public WebElement cityInput;

    @FindBy(xpath = "(//input[@type='number'])[2]")
    public WebElement zipCodeInput;

    @FindBy(xpath = "//button[.='Submit']")
    public WebElement sumbitButton;

    @FindBy(xpath = "//div[.='All Students']")
    public WebElement allStudentText;

    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group']/input)[2]")
    public WebElement studentNameSearchBox;

    @FindBy(xpath = "//div[.=' Search ']")
    public WebElement searchButton;

    @FindBy(xpath = "(//ul[@class='personal-info']//a)[1]")
    public WebElement studentId;

}
