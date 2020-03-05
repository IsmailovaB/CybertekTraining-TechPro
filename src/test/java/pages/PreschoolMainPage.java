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




        }



