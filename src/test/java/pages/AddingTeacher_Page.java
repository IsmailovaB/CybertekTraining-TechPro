package pages;

import cucumber.api.java.de.Wenn;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.ArrayList;
import java.util.List;

public class AddingTeacher_Page {

    public AddingTeacher_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement firstName;

    @FindBy (xpath = "(//input[@type='text'])[5]")
    public WebElement lastName;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement email;

    @FindBy(xpath = "(//input[@type='password'])[1]")
    public WebElement password;

    @FindBy(xpath = "(//input[@type='password'])[2]")
    public WebElement confirmPassword;

    @FindBy (xpath = "(//input[@class='form-control'])[1]")
    public WebElement birthDate;

    @FindBy (xpath = "(//input[@class='form-control'])[2]")
    public WebElement joiningDate;

    @FindBy(xpath = "(//input[@type='text'])[3]")
    public WebElement subject;

    @FindBy (xpath = "(//input[@type='number'])")
    public WebElement number;

    @FindBy (xpath = "(//input[@type='text'])[7]")
    public WebElement salary;

    @FindBy (xpath = "(//input[@type='text'])[8]")
    public WebElement section;

    @FindBy (xpath = "//textarea[@class='form__field']")
    public WebElement permanentAddress;

    @FindBy (xpath = "//button[.='Submit']")
    public WebElement submitButton;

    @FindBy (xpath = "(//input[@type='text'])[2]")
    public WebElement teacherNameSearch;

    @FindBy (xpath = "(//a[@class='btn btn-success btn-block mt-4 mb-2'])")
    public WebElement searchClick;

    @FindBy (xpath = "(//h4[@class='user-name m-t-10 m-b-0 text-ellipsis'])[1]")
    public WebElement nameSearchEntry;

    @FindBy (xpath = "(//div[@class='col-md-5']//span//a)[1] ")
    public WebElement teacherId;

    public List<WebElement> list = new ArrayList<>();

    public List<WebElement> getList() {

        list.add(firstName);
        list.add(lastName);
        list.add(email);
        list.add(joiningDate);
        list.add(password);
        list.add(subject);
        list.add(number);
        list.add(birthDate);
        list.add(section);
        list.add(permanentAddress);

        return list;
    }
}

