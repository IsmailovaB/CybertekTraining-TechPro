package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Config;
import utilities.Driver;

public class PreschoolMainPage {

    public PreschoolMainPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//span[@class='menu-arrow'])[1]")
    public WebElement teachersSideBar;

    @FindBy(xpath = "(//li[@class='submenu'])[2]")
    public WebElement studentSideBar;

    @FindBy(xpath = "(//a[@href='all-teachers.html'])[1]")
    public WebElement allTeachersButton;

    @FindBy(xpath = "(//a[@href='add-teacher.html'])[2]")
    public WebElement addTeacherButton;

    @FindBy(xpath = "//a[@href='all-students.html']")
    public WebElement allStudentsButton;

    @FindBy(xpath = "//a[@href='add-student.html']")
    public WebElement addStudentButton;

    @FindBy(xpath = "//div[@class='row staff-grid-row']//div//div//div[2]")
    public WebElement studentEditDots;

    @FindBy(xpath = "//div[@class='dropdown-menu dropdown-menu-right show']//a")
    public WebElement studentEdit;

    @FindBy(xpath = "(//div[@class='profile-widget'])//div//a")
    public WebElement firstStudent;

    @FindBy(xpath = "//span[.='Student ID:']/following-sibling::span")
    public WebElement studentID;

    @FindBy(xpath = "//*[.='Student ID']/preceding-sibling::input")
    public WebElement searchID;

    @FindBy(xpath = "//*[.=' Search ' and @class='btn btn-success btn-block mt-4 mb-2']")
    public WebElement searchButton;

    @FindBy(xpath = "//h3[@class='user-name m-t-0']")
    public WebElement studentFullName;





        }



